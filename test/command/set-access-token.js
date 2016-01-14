import test from 'tape';

import command from '../../src/command/set-access-token';

test('set access token command has correct name', assert => {
  assert.plan(1);

  assert.equal(command.getName(), 'token', 'name is correct');

  assert.end();
});
