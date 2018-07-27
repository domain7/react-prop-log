import whatsNew from '../src/main';

describe('whatsNew', () => {
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
      constructor: { name: 'TestComponent' },
      props: {
        a: 4,
        b: 2,
        c: 3,
      },
    };

    whatsNew(prevProps, component);
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

    whatsNew(prevProps, component);
    expect(console.log).not.toBeCalled();
  });
});
