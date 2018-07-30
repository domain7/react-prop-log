# What's New?

A simple React performance and debugging helper. Drop into a component and monitor props changes in the console.

# Installation

`npm i --save-dev whats-new`

# Usage

`whatsNew` is a function that'll wrap a component and log any props changes whenever the `componentDidUpdate` lifecycle method executes. `whatsNew` is a higher-order component, so you'll add it similarly to Redux's `connect`.

```js
import { whatsNew } from 'whats-new';
/* -- Your component code here  -- */
export default whatsNew(YourComponentName);
```

`logChangedProps` is the actual logger, and can be imported separately for greater control on where in the React lifecycle it is triggered. It expects a new set of props & your component instance.

```js
import { logChangedProps } from 'whats-new';

class YourComponent extends React.Component {
  /* -- Your component code here  -- */
  componentDidUpdate(nextProps) {
    logChangedProps(nextProps, this);
  }
  /* -- Your component code here  -- */
}

export default YourComponent;
```