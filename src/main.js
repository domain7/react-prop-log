export default function whatsNew(prevProps, component) {
  Object.keys(component.props).forEach(key => {
    if (component.props[key] !== prevProps[key]) {
      console.log(`${component.constructor.name}:`, key, 'changed from', prevProps[key], 'to', component.props[key]);
    }
  });
}
