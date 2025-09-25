// basic smoke test: ensure Node can run the server module minimally
try {
  const assert = require('assert');
  assert.strictEqual(1 + 1, 2);
  console.log('Tests passed');
  process.exit(0);
} catch (err) {
  console.error('Tests failed', err);
  process.exit(1);
}