import test from 'tape';

import command from '../../src/command/copy';

test('copy command has correct name', assert => {
  assert.plan(1);

  assert.equal(command.getName(), 'cp', 'name is correct');

  assert.end();
});
