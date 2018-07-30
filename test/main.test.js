import { whatsNew, logChangedProps } from '../src/main';

describe('main', () => {
  it('exports a higher-order component for debug logging', () => {
    expect(whatsNew).toBeDefined();
  });

  it('exports the debug logging function if needed', () => {
    expect(logChangedProps).toBeDefined();
  });
});
