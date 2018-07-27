import React from 'react';
import { shallow, mount } from 'enzyme';
import whatsNew, { getDisplayName } from '../../src/component/whatsNew';

describe('whatsNew', () => {
  let TestComponent;
  beforeEach(() => {
    class MockComponent extends React.Component {
      render() {
        return (
          <div>
            Component
          </div>
        );
      }
    }
    TestComponent = whatsNew(MockComponent);
  });

  it('should render passed components', () => {
    const wrapper = shallow(
      <TestComponent />
    );
    expect(wrapper.html()).toBe('<div>Component</div>');
  });

  it('should call logChangedProps when props change', () => {
    global.console = { log: jest.fn() };
    const wrapper = mount(
      <TestComponent a={1} />
    );
    wrapper.setProps({ a: 2 });
    expect(console.log).toBeCalledWith('MockComponent:', 'a', 'changed from', 1, 'to', 2);
  });
});

describe('getDisplayName', () => {
  it("should set displayName to the wrapped component's displayName if set", () => {
    const wrappedComponent = { displayName: 'WrappedComponent' };
    expect(getDisplayName(wrappedComponent)).toBe('WrappedComponent');
  });

  it("should set displayName to the wrapped component's name if set", () => {
    const wrappedComponent = { name: 'WrappedComponent' };
    expect(getDisplayName(wrappedComponent)).toBe('WrappedComponent');
  });

  it('should set displayName to Component if wrapped component has no name', () => {
    const wrappedComponent = { };
    expect(getDisplayName(wrappedComponent)).toBe('Component');
  });
});
