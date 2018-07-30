export default function logChangedProps(prevProps, component) {
  Object.keys(component.props).forEach(key => {
    if (component.props[key] !== prevProps[key]) {
      console.log(`${stripUtilName(component.constructor.displayName)}:`, key, 'changed from', prevProps[key], 'to', component.props[key]);
    }
  });
}

export function stripUtilName(name) {
  const componentName = name.match(/WhatsNew\(([^)].*)\)/);
  if (componentName) {
    return componentName[1];
  }
  return name;
}
