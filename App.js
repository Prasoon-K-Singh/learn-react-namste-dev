import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World! from React"
);

const jsxHeading = <h1 id="heading">This heading is added on UI using jsx</h1>;

const Title = () => (
  <h1 id="heading" className="title">
    component composition
  </h1>
);
// without return

const FuctionalComponent = () => {
  return (
    <div id="container">
      <Title />
      <Title></Title>
      <h1>This is function component</h1>
      {/* can write any js code inside {} bracket in JXS syntax */}
      {jsxHeading}
      {Title()}
      <h2>{100 + 200}</h2>
    </div>
  );
};
// with return

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<FuctionalComponent />);
