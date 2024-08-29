## React Assignment

1. How can you implement shared functionality across a component tree?

  * React context API :
    The context api is useful for sharing state or funcitonality between component with out passing props down manually at every level 

  * Custom Hooks :
    Custom hooks allow you to encapsulate shared logic that can be reused across multiple components.

  * Higher Order Components :
    HOCs are functions that take a component and return a new component with additional props or functionality

  * Render Props :
    Render props allow you to pass a function as a prop to share functionality between components

  * Redux (third party library) :
    For more complex state management across large applications, you might consider using a state management library like Redux  to share functionality and state across components

2. Why is the `useState` hook appropriate for handling state in a complex component?

    The useState hook is particularly appropriate for handling state in a complex component for some reasons
    They are

    * Local State Management :
      useState is ideal for managing state that is local to a component. This means it’s perfect for scenarios where the state does not need to be shared across multiple components, making the component self-contained and easier to understand

    * Encapsulation of State Logic :
      By using useState, you can encapsulate state-related logic within the component, which can make the component more modular. This encapsulation allows you to manage complex state transitions within the component itself without affecting other parts of the application

    * Initial State Setup :
      useState allows you to set an initial state value, which can be static or derived from a function. This flexibility is particularly useful in complex components where the initial state may depend on props or other dynamic conditions

    * Multiple State Variables :
      With useState, you can manage multiple pieces of state independently within the same component. This is useful in complex components where different parts of the UI may rely on different aspects of the component's state

    * Simple State Updates :
      useState provides a straightforward API for updating state, where you can either set a new value directly or use a function to update state based on the previous state. This is particularly helpful in complex components where the state updates may depend on the previous state

3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
