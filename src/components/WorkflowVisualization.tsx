const steps = [
  ['Lead Capture', 'Incoming lead information enters the workflow.'],
  ['Data Processing', 'Lead information is prepared for analysis.'],
  ['AI Analysis', 'AI analyzes and classifies the incoming information.'],
  ['Lead Qualification', 'Qualification or priority information is assigned.'],
  ['Lead Scoring', 'Lead scoring supports the next workflow decision.'],
  ['Automated Action', 'The appropriate automated business workflow is triggered.'],
];
export function WorkflowVisualization() {
  return <section className="workflow-visualization" aria-labelledby="workflow-title"><h3 id="workflow-title">Workflow Visualization</h3><p>An illustrative view of the project's n8n architecture.</p><ol>{steps.map(([title, description], i) => <li key={title}><span>{String(i + 1).padStart(2, '0')}</span><div><h4>{title}</h4><p>{description}</p></div></li>)}</ol></section>;
}
