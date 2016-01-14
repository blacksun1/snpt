import test from 'tape';

import command from '../../src/command/sync';

test('sync command has correct name', assert => {
  assert.plan(1);

  assert.equal(command.getName(), 'sync', 'name is correct');

  assert.end();
});
