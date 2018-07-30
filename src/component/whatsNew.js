import React from 'react';
import logChangedProps from '../lib/logChangedProps';

function whatsNew(WrappedComponent) {
  class WhatsNew extends React.Component {
    componentDidUpdate(nextProps) {
      logChangedProps(nextProps, this);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WhatsNew.displayName = `WhatsNew(${getDisplayName(WrappedComponent)})`;
  return WhatsNew;
}

export function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default whatsNew;
