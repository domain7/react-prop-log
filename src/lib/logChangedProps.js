export default function logChangedProps(prevProps, component) {
  Object.keys(component.props).forEach(key => {
    if (component.props[key] !== prevProps[key]) {
      console.log(`${component.constructor.displayName}:`, key, 'changed from', prevProps[key], 'to', component.props[key]);
    }
  });
}
