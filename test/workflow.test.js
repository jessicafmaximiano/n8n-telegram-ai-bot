const { test } = require('node:test');
const assert = require('node:assert/strict');
const workflow = require('../bot-estudos-ti.json');

test('modelo público está inativo e sem vínculos da instalação', () => {
  assert.equal(workflow.active, false);
  assert.equal(workflow.meta, undefined);
  for (const node of workflow.nodes) {
    assert.equal(node.credentials, undefined);
    assert.equal(node.webhookId, undefined);
  }
  const sheet = workflow.nodes.find(n => n.type === 'n8n-nodes-base.googleSheets');
  assert.equal(sheet.parameters.documentId.value, 'SUBSTITUA_PELO_ID_DA_PLANILHA');
  assert.equal(sheet.parameters.authentication, 'serviceAccount');
});

test('conexões referenciam nós existentes e preservam modelo Groq', () => {
  const names = new Set(workflow.nodes.map(n => n.name));
  assert.equal(names.size, workflow.nodes.length);
  for (const [source, outputs] of Object.entries(workflow.connections)) {
    assert.ok(names.has(source));
    for (const groups of Object.values(outputs)) {
      for (const target of groups.flat()) assert.ok(names.has(target.node));
    }
  }
  assert.ok(workflow.nodes.some(n => n.type.endsWith('.lmChatGroq')));
  assert.equal(workflow.connections['Groq Chat Model'].ai_languageModel[0][0].node, 'AI Agent');
});
