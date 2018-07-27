import main from '../src/main';

describe('main', () => {
  it('exports a higher-order component for debug logging', () => {
    expect(main.whatsNew).toBeDefined();
  });

  it('exports the debug logging function if needed', () => {
    expect(main.logChangedProps).toBeDefined();
  });
});
