import logChangedProps from '../../src/lib/logChangedProps';

describe('logChangedProps', () => {
  beforeEach(() => {
    global.console = { log: jest.fn() };
  });

  it('should log changed props', () => {
    const prevProps = {
      a: 1,
      b: 2,
      c: 3,
    };
    const component = {
      constructor: { displayName: 'TestComponent' },
      props: {
        a: 4,
        b: 2,
        c: 3,
      },
    };

    logChangedProps(prevProps, component);
    expect(console.log).toBeCalledWith('TestComponent:', 'a', 'changed from', 1, 'to', 4);
  });

  it('should not log if no props have changed', () => {
    const prevProps = {
      a: 1,
      b: 2,
      c: 3,
    };
    const component = {
      constructor: { name: 'TestComponent' },
      props: prevProps,
    };

    logChangedProps(prevProps, component);
    expect(console.log).not.toBeCalled();
  });
});
