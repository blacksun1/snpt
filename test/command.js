import espionage from 'espionage';
import test from 'tape';

import command from '../src/command';

test('command has a name', assert => {
  assert.plan(1);

  let testCommand = command('foo');

  assert.equal(testCommand.getName(), 'foo', 'name is returned');

  assert.end();
});

test('command has usage info', assert => {
  assert.plan(1);

  let testCommand = command('', 'foo');

  assert.equal(testCommand.getUsage(), 'foo', 'usage info is returned');

  assert.end();
});

test('command has an action', assert => {
  assert.plan(1);

  let actionSpy = espionage.createSpy();
  let arg1 = 'foo';
  let arg2 = 'bar';

  command('', '', actionSpy).run(arg1, arg2);

  assert.equal(
    actionSpy.wasCalledWith(arg1) && actionSpy.wasCalledWith(arg2),
    true,
    'action was executed with correct args'
  );

  assert.end();
});
