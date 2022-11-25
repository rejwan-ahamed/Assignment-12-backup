import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="blog-main mt-20 mb-20 px-4 lg:px-20 xl:px-40">
        <h1 className="text-2xl font-[600] font-general">
          What are the different ways to manage a state in a React application?
        </h1>
        <p className="font-general font-medium mt-4 mb-4">
          Local (UI) state – Local state is data we manage in one or another
          component. Local state is most often managed in React using the
          useState hook. For example, local state would be needed to show or
          hide a modal component or to track values for a form component, such
          as form submission, when the form is disabled and the values of a
          form’s inputs.
          <br /> Global (UI) state – Global state is data we manage across
          multiple components. Global state is necessary when we want to get and
          update data anywhere in our app, or in multiple components at least. A
          common example of global state is authenticated user state. If a user
          is logged into our app, it is necessary to get and change their data
          throughout our application. Sometimes state we think should be local
          might become global.
          <br /> Server state – Data that comes from an external server that
          must be integrated with our UI state. Server state is a simple
          concept, but can be hard to manage alongside all of our local and
          global UI state. There are several pieces of state that must be
          managed every time you fetch or update data from an external server,
          including loading and error state. Fortunately there are tools such as
          SWR and React Query that make managing server state much easier.
          <br /> URL state – Data that exists on our URLs, including the
          pathname and query parameters. URL state is often missing as a
          category of state, but it is an important one. In many cases, a lot of
          major parts of our application rely upon accessing URL state. Try to
          imagine building a blog without being able to fetch a post based off
          of its slug or id that is located in the URL! There are undoubtedly
          more pieces of state that we could identify, but these are the major
          categories worth focusing on for most applications you build.
        </p>
        <h1 className="text-2xl font-[600] font-general mt-8">
          How does prototypical inheritance work?
        </h1>
        <p className="font-general font-medium mt-4 mb-4">
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object.{" "}
        </p>
        <h1 className="text-2xl font-[600] font-general mt-8">
          What is a unit test? Why should we write unit tests?
        </h1>
        <p className="font-general font-medium mt-4 mb-4">
          The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages.
        </p>
        <h1 className="text-2xl font-[600] font-general mt-8">
          React vs. Angular vs. Vue?
        </h1>
        <p className="font-general font-medium mt-4 mb-4">
          Vue provides higher customizability and hence is easier to learn than
          Angular or React. Further, Vue has an overlap with Angular and React
          with respect to their functionality like the use of components. Hence,
          the transition to Vue from either of the two is an easy option.
        </p>
      </div>
    </div>
  );
};

export default Blog;