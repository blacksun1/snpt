import test from 'tape';

import command from '../../src/command/write-to-disk';

test('write to disk command has correct name', assert => {
  assert.plan(1);

  assert.equal(command.getName(), 'write', 'name is correct');

  assert.end();
});
