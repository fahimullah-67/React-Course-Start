function CustomReact(Element, Container) {
  const domElement = document.createElement(Element.type);
  domElement.innerHTML = Element.Children;

  domElement.setAttribute("href", Element.props.href);
  domElement.setAttribute("target", Element.props.target);

  Container.appendChild(domElement);
  Container.appendChild(domElement);
}

const ReactElement = {
  type: "a",
  props: {
    href: "http://www.google.com",
    target: "_blank",
  },
  Children: "Click Me",
};
const MainContainer = document.querySelector("#root");

CustomReact(ReactElement, MainContainer);
