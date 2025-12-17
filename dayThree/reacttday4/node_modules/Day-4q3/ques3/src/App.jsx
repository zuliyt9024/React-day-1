

 Component Lifecycle in React Functional Components

In functional components, React manages the component lifecycle using the useEffect hook.

Mount Phase

useEffect(() => {
  // runs once when component mounts
}, []);


Runs only once when the component is first added to the DOM.
Used for API calls, subscriptions, or initial setup.

Update Phase

useEffect(() => {
  // runs when dependencies change
}, [dependency]);


Runs every time the given dependency changes.
Used to react to state or prop updates.

Unmount Phase

useEffect(() => {
  return () => {
    // cleanup logic
  };
}, []);


Runs when the component is removed from the DOM.

b) What is a Cleanup Function? Why Is It Needed?

A cleanup function is a function returned inside useEffect.

useEffect(() => {
  // setup logic

  return () => {
    // cleanup logic
  };
}, []);
