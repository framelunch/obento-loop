const loop = require('./index');

it('loop basic', done => {
  const mock = jest.fn();
  let count;

  expect(loop.add).toBeInstanceOf(Function);
  expect(loop.remove).toBeInstanceOf(Function);

  setTimeout(() => {
    loop.remove(mock);
    count = mock.mock.calls.length;
    expect(count).toBeGreaterThan(10);
  }, 500);

  setTimeout(() => {
    expect(count).toBe(mock.mock.calls.length);
  }, 800);

  setTimeout(() => done(), 1000);

  loop.add(mock);
});
