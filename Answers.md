# Answers

1.  What is React JS and what problems does it try and solve?

React is a library that was created by Facebook/Instagram to make things easier and to run faster using reusable components in your app or even using them in an entirely different app. Efficient! 

1.  What does it mean to _think_ in react?

It means you have to think ahead about things as you build them. Here are the steps:

1: Break the UI into a component hierarchy.
2: Build a static version in React.
3: Identify the minimal representation of UI state.
4: Identify where your state should live.
5: Add inverse data flow.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Both versions will give you the exact same output. the most obvious difference is the syntax. Functional is a plain JavaScript Function that returns a React element. A class requires you to entend from React.Component and create a render funciton which returns a React element. 



1.  Describe state.

State is the representation of the app at a given point in time. State is data. Data changes and gets mutated. We can update and change state. So, state is data, but it kind of refers to what our data looks like right now. If our state changes what does our data do to react to that change. Hamburger dropdown menu is a piece of data in your state that says sidebar open in is true. 

1.  Describe props.

Props are basically data or callback functions that are being passed down from a parent to a child component. These can be container or presentational components. 

Data flows down (from parent)
Events flow up (from child
