import React from 'react';
import logChangedProps from '../lib/logChangedProps';

function whatsNew(WrappedComponent) {
  class WhatsNew extends React.Component {
    componentDidUpdate(nextProps) {
      console.log(this);
      logChangedProps(nextProps, this);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WhatsNew.displayName = getDisplayName(WrappedComponent);
  return WhatsNew;
}

export function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default whatsNew;
