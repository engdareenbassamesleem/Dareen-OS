import { chromium } from '@playwright/test';
import { preview } from 'vite';
import { fileURLToPath } from 'node:url';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const output = new URL('../../playwright-artifacts/', import.meta.url);
await mkdir(output, { recursive: true });
const server = await preview({ root: fileURLToPath(new URL('../../', import.meta.url)), configFile: false, base: '/Dareen-OS/', preview: { host: '127.0.0.1', port: 4173, strictPort: true } });
const browser = await chromium.launch({ headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const errors = [];
const results = [];
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1040 }, deviceScaleFactor: 1 });
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  const page = await context.newPage();
  page.on('pageerror', error => { errors.push(error.message); console.log('PAGE ERROR:', error.message); });
  page.on('console', message => { if (message.type() === 'error') console.log('BROWSER:', message.text()); });
  const response = await page.goto('http://127.0.0.1:4173/Dareen-OS/', { waitUntil: 'networkidle' });
  assert.equal(response.status(), 200);
  await page.locator('canvas').waitFor();
  await page.evaluate(() => document.fonts.ready);
  assert.ok(await page.locator('canvas').evaluate(canvas => Boolean(canvas.getContext('webgl2'))));
  await page.locator('.scene-fallback').waitFor({ state: 'hidden' });
  assert.equal(await page.locator('html').getAttribute('dir'), 'rtl');
  assert.equal(await page.locator('.project-card').count(), 4);
  await page.screenshot({ path: new URL('dareen-ar-desktop.png', output).pathname.replace(/^\/(\w:)/, '$1'), fullPage: true });
  results.push('Arabic initial render, RTL layout, four real projects, canvas mounted');

  await page.getByRole('button', { name: 'مجال مداري', exact: true }).click();
  assert.equal(await page.getByRole('button', { name: 'مجال مداري', exact: true }).getAttribute('aria-pressed'), 'true');
  await page.getByRole('button', { name: 'إيقاف الحركة', exact: true }).click();
  await page.getByRole('button', { name: 'تدوير المجسّم', exact: true }).click();
  await page.getByRole('button', { name: 'شبكة عصبية', exact: true }).click();
  results.push('3D shape, pause, and accessible rotation controls');

  await page.getByRole('button', { name: 'الذكاء الاصطناعي والبحث', exact: true }).click();
  assert.equal(await page.locator('.project-card').count(), 2);
  await page.getByRole('button', { name: 'اكتشف المشروع: RAGSource', exact: true }).click();
  await page.getByRole('dialog').waitFor({ state: 'visible' });
  assert.equal(await page.getByRole('dialog').getByRole('link').getAttribute('href'), 'https://github.com/engdareenbassamesleem/ragsource');
  await page.keyboard.press('Escape');
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.getByRole('button', { name: 'كل المشاريع' }).click();
  results.push('Project filters, native modal, real source link, Escape to close');

  await page.getByRole('button', { name: 'نسخ البريد الإلكتروني' }).click();
  await page.getByRole('status').filter({ hasText: 'تم نسخ البريد' }).waitFor();
  assert.equal(await page.evaluate(() => navigator.clipboard.readText()), 'dareen1872001@gmail.com');
  results.push('Email clipboard interaction');

  await page.getByRole('button', { name: 'Switch to English' }).click();
  assert.equal(await page.locator('html').getAttribute('lang'), 'en');
  assert.equal(await page.locator('html').getAttribute('dir'), 'ltr');
  await page.reload({ waitUntil: 'networkidle' });
  assert.equal(await page.locator('html').getAttribute('lang'), 'en');
  await page.getByRole('button', { name: 'Pause animation', exact: true }).click();
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.screenshot({ path: new URL('dareen-en-desktop.png', output).pathname.replace(/^\/(\w:)/, '$1'), fullPage: true });
  results.push('English translation, LTR layout, saved language preference');

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  mobile.on('pageerror', error => errors.push(error.message));
  await mobile.goto('http://127.0.0.1:4173/Dareen-OS/', { waitUntil: 'networkidle' });
  await mobile.getByRole('button', { name: 'فتح وإغلاق القائمة' }).click();
  await mobile.getByRole('navigation').getByRole('link', { name: /أعمالي/ }).click();
  assert.equal(await mobile.getByRole('button', { name: 'فتح وإغلاق القائمة' }).getAttribute('aria-expanded'), 'false');
  for (const width of [320, 390, 768, 1024, 1440]) {
    await mobile.setViewportSize({ width, height: 900 });
    const overflow = await mobile.evaluate(() => ({ width: document.documentElement.clientWidth, content: document.documentElement.scrollWidth }));
    assert.ok(overflow.content <= overflow.width + 1, `Horizontal overflow at ${width}: ${JSON.stringify(overflow)}`);
  }
  await mobile.setViewportSize({ width: 390, height: 844 });
  await mobile.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await mobile.screenshot({ path: new URL('dareen-ar-mobile.png', output).pathname.replace(/^\/(\w:)/, '$1'), fullPage: true });
  results.push('Mobile navigation and no horizontal overflow at 320, 390, 768, 1024, 1440 pixels');

  const reduced = await browser.newPage({ reducedMotion: 'reduce' });
  await reduced.goto('http://127.0.0.1:4173/Dareen-OS/', { waitUntil: 'networkidle' });
  await reduced.getByRole('button', { name: 'تشغيل الحركة', exact: true }).waitFor();
  results.push('Reduced-motion preference starts with animation paused');

  const fallback = await browser.newPage();
  await fallback.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function(kind, ...args) {
      if (kind === 'webgl' || kind === 'webgl2' || kind === 'experimental-webgl') return null;
      return original.call(this, kind, ...args);
    };
  });
  await fallback.goto('http://127.0.0.1:4173/Dareen-OS/', { waitUntil: 'networkidle' });
  await fallback.locator('.scene-fallback').waitFor({ state: 'visible' });
  assert.equal(await fallback.locator('.project-card').count(), 4);
  results.push('WebGL-disabled fallback keeps the portfolio accessible');

  assert.deepEqual(errors, []);
  await writeFile(new URL('verification.json', output), JSON.stringify({ results, errors }, null, 2));
  console.log(JSON.stringify({ results, errors }, null, 2));
} finally { await browser.close(); await new Promise(resolve => server.httpServer.close(resolve)); }
