import logChangedProps, { stripUtilName } from '../../src/lib/logChangedProps';

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
      constructor: { displayName: 'PropLog(TestComponent)' },
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
      constructor: { name: 'PropLog(TestComponent)' },
      props: prevProps,
    };

    logChangedProps(prevProps, component);
    expect(console.log).not.toBeCalled();
  });
});

describe('stripUtilName', () => {
  it('should remove PropLog( ) from input if it exists', () => {
    expect(stripUtilName('PropLog(TestComponent)')).toBe('TestComponent');
  });

  it('should return input if PropLog( ) is not present', () => {
    expect(stripUtilName('TestComponent')).toBe('TestComponent');
  });

  it('should retain any other higher order Component( ) names in input', () => {
    expect(stripUtilName('PropLog(TestHOC(TestComponent))')).toBe('TestHOC(TestComponent)');
  });
});
