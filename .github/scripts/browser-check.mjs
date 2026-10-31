import { chromium } from '@playwright/test';
import { preview } from 'vite';
import { fileURLToPath } from 'node:url';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const output = new URL('../../playwright-artifacts/', import.meta.url);
await mkdir(output, { recursive: true });
const server = await preview({ root: fileURLToPath(new URL('../../', import.meta.url)), configFile: false, base: '/Dareen-OS/', preview: { host: '127.0.0.1', port: 4173, strictPort: true } });
const browser = await chromium.launch({ headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--disable-gpu-compositing'] });
const errors = [];
const results = [];
let page;

async function settle(target) {
  await target.evaluate(() => document.fonts.ready);
  await target.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
}

try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1040 }, deviceScaleFactor: 1 });
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  // An existing visitor may still have the former Arabic preference stored.
  await context.addInitScript(() => localStorage.setItem('dareen-language', 'ar'));
  page = await context.newPage();
  page.on('pageerror', error => { errors.push(error.message); console.log('PAGE ERROR:', error.message); });
  const response = await page.goto('http://127.0.0.1:4173/Dareen-OS/', { waitUntil: 'networkidle' });
  assert.equal(response.status(), 200);
  assert.equal(await page.locator('html').getAttribute('lang'), 'en');
  assert.equal(await page.locator('html').getAttribute('dir'), 'ltr');
  assert.equal(/[\u0600-\u06ff]/.test(await page.locator('body').innerText()), false);
  await page.getByRole('img', { name: 'Dareen Esleem, 3D design and AI engineer' }).evaluate(image => { if (!image.complete || !image.naturalWidth) throw Error('Portrait failed to load'); });
  assert.equal(await page.locator('.project-card').count(), 3);
  results.push('English-only page, including returning visitors; original portrait loads successfully');

  await page.getByRole('button', { name: 'Replay introduction' }).click();
  await page.getByRole('button', { name: 'Pause introduction', exact: true }).click();
  const pausedCode = await page.locator('.editor-code').innerText();
  await page.waitForTimeout(150);
  assert.equal(await page.locator('.editor-code').innerText(), pausedCode);
  await page.getByRole('button', { name: 'Resume introduction' }).click();
  await page.locator('.code-editor[data-typing-complete="true"]').waitFor();
  await page.locator('.terminal-result').waitFor();
  assert.match(await page.locator('.terminal-result').innerText(), /Welcome to my world\./);
  await settle(page);
  await page.screenshot({ path: fileURLToPath(new URL('dareen-identity-desktop.png', output)), fullPage: true });
  await page.locator('.hero').screenshot({ path: fileURLToPath(new URL('dareen-home.png', output)) });
  results.push('Animated code introduction types the name and greeting; pause, resume and replay work');

  await page.locator('.project-filters').getByRole('button', { name: 'AI applications', exact: true }).click();
  assert.equal(await page.locator('.project-card').count(), 1);
  await page.getByRole('button', { name: 'Explore project: Dentivo AI', exact: true }).click();
  await page.getByRole('dialog').waitFor({ state: 'visible' });
  assert.equal(await page.getByRole('dialog').getByRole('link').getAttribute('href'), 'https://github.com/engdareenbassamesleem/dentivo-ai');
  await page.keyboard.press('Escape');
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.getByRole('button', { name: 'All projects' }).click();
  results.push('Project filtering, accessible dialogs and real repository links');
  await page.getByRole('button', { name: 'Explore Workflow: Dareen AI Lead Engine', exact: true }).click();
  await page.getByRole('dialog').waitFor({ state: 'visible' });
  await page.getByRole('dialog').getByRole('heading', { name: 'Workflow Visualization', exact: true }).waitFor();
  assert.equal(await page.getByRole('dialog').locator('.workflow-visualization li').count(), 6);
  assert.equal(await page.getByRole('dialog').getByRole('link').count(), 0);
  await page.keyboard.press('Escape');
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.getByRole('heading', { name: /3D Lab.*Experimental & Concept Work/ }).waitFor();
  await page.locator('.lab-showcase').getByRole('button', { name: 'Product', exact: true }).waitFor();
  await page.getByRole('button', { name: /02.*Generative form/ }).click();
  await page.locator('.lab-showcase').getByRole('button', { name: 'Knot', exact: true }).waitFor();
  await page.getByRole('button', { name: /03.*Spatial interface/ }).click();
  await page.locator('.lab-showcase').getByRole('button', { name: 'Interface', exact: true }).waitFor();
  await page.getByRole('button', { name: /01.*Product visualization/ }).click();
  results.push('Real AI projects are separate from the original 3D lab; Lead Engine has a six-step workflow and no invented links');


  const studio = page.locator('.hero-studio');
  await studio.scrollIntoViewIfNeeded();
  await studio.locator('canvas').waitFor();
  await studio.locator('.scene-fallback').waitFor({ state: 'hidden' });
  assert.ok(await studio.locator('canvas').evaluate(canvas => Boolean(canvas.getContext('webgl2'))));
  await studio.getByRole('button', { name: 'Ribbon', exact: true }).click();
  assert.equal(await studio.getByRole('button', { name: 'Ribbon', exact: true }).getAttribute('aria-pressed'), 'true');
  await studio.getByRole('button', { name: 'Pause animation', exact: true }).click();
  await studio.getByRole('button', { name: 'Rotate scene', exact: true }).click();
  await studio.getByRole('button', { name: 'Crystal', exact: true }).click();
  await studio.getByRole('button', { name: 'Violet material', exact: true }).click();
  assert.equal(await studio.getByRole('button', { name: 'Violet material', exact: true }).getAttribute('aria-pressed'), 'true');
  await studio.getByRole('button', { name: /Wireframe/ }).click();
  assert.equal(await studio.getByRole('button', { name: /Wireframe/ }).getAttribute('aria-pressed'), 'true');
  await studio.getByRole('button', { name: /Wireframe/ }).click();
  await studio.getByRole('button', { name: 'Knot', exact: true }).click();
  results.push('3D sculpture: three forms, material switches, wireframe, rotation and pause controls');

  await page.getByRole('button', { name: 'Copy email address' }).click();
  await page.getByRole('status').filter({ hasText: 'Email copied' }).waitFor();
  assert.equal(await page.evaluate(() => navigator.clipboard.readText()), 'dareen1872001@gmail.com');
  results.push('Email clipboard interaction');

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: 'reduce' });
  mobile.on('pageerror', error => errors.push(error.message));
  await mobile.goto('http://127.0.0.1:4173/Dareen-OS/', { waitUntil: 'networkidle' });
  await mobile.getByRole('button', { name: 'Toggle navigation' }).click();
  await mobile.getByRole('navigation').getByRole('link', { name: /Work/ }).click();
  assert.equal(await mobile.getByRole('button', { name: 'Toggle navigation' }).getAttribute('aria-expanded'), 'false');
  for (const width of [320, 390, 768, 1024, 1440]) {
    await mobile.setViewportSize({ width, height: 900 });
    await settle(mobile);
    const size = await mobile.evaluate(() => ({ width: document.documentElement.clientWidth, content: document.documentElement.scrollWidth }));
    assert.ok(size.content <= size.width + 1, `Horizontal overflow at ${width}: ${JSON.stringify(size)}`);
  }
  await mobile.setViewportSize({ width: 390, height: 844 });
  await mobile.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await settle(mobile);
  await mobile.screenshot({ path: fileURLToPath(new URL('dareen-identity-mobile.png', output)), fullPage: true });
  results.push('Mobile menu and responsive layouts at 320, 390, 768, 1024 and 1440 pixels');
  assert.equal(await mobile.locator('.code-editor').getAttribute('data-typing-complete'), 'true');
  await mobile.locator('.hero-studio').getByRole('button', { name: 'Play animation', exact: true }).waitFor({ state: 'attached' });
  results.push('Reduced motion displays the full greeting immediately and pauses the 3D scene');

  const fallback = await browser.newPage({ reducedMotion: 'reduce' });
  await fallback.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function(kind, ...args) {
      if (kind === 'webgl' || kind === 'webgl2' || kind === 'experimental-webgl') return null;
      return original.call(this, kind, ...args);
    };
  });
  await fallback.goto('http://127.0.0.1:4173/Dareen-OS/', { waitUntil: 'networkidle' });
  await fallback.locator('.hero-studio').scrollIntoViewIfNeeded();
  await fallback.locator('.hero-studio .scene-fallback').waitFor({ state: 'visible' });
  assert.equal(await fallback.locator('.project-card').count(), 3);
  results.push('The portrait, welcome and portfolio remain usable without WebGL');
  assert.deepEqual(errors, []);
  await writeFile(new URL('verification.json', output), JSON.stringify({ results, errors }, null, 2));
  console.log(JSON.stringify({ results, errors }, null, 2));
} catch (error) {
  if (page) await page.screenshot({ path: fileURLToPath(new URL('failure.png', output)), fullPage: true }).catch(() => {});
  throw error;
} finally { await browser.close(); await new Promise(resolve => server.httpServer.close(resolve)); }
