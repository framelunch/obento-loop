const loop = require('./index');

it('loop basic', () => {
  const mock1 = jest.fn();
  const mock2 = jest.fn();

  expect(loop.add).toBeInstanceOf(Function);
  expect(loop.remove).toBeInstanceOf(Function);
});
