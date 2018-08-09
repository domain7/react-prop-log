import { propLog, logChangedProps } from '../src/main';

describe('main', () => {
  it('exports a higher-order component for debug logging', () => {
    expect(propLog).toBeDefined();
  });

  it('exports the debug logging function if needed', () => {
    expect(logChangedProps).toBeDefined();
  });
});
