import React from 'react';
import logChangedProps from '../lib/logChangedProps';

function propLog(WrappedComponent) {
  class PropLog extends React.Component {
    componentDidUpdate(nextProps) {
      logChangedProps(nextProps, this);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  PropLog.displayName = `PropLog(${getDisplayName(WrappedComponent)})`;
  return PropLog;
}

export function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default propLog;
