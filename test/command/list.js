import test from 'tape';

import command from '../../src/command/list';

test('list command has correct name', assert => {
  assert.plan(1);

  assert.equal(command.getName(), 'ls', 'name is correct');

  assert.end();
});
