const renderElement = (reactElement, container) => {
  let domElement = document.createElement(reactElement.type);
  domElement.textContent = reactElement.children;

  for (let prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
};

let reactElement = {
  type: 'a',
  props: {
    href: 'https://github.com/developerjay18',
    target: '_blank',
  },
  children: 'Click me to visit my GitHub Account',
};

const rootContainer = document.querySelector('.root');

renderElement(reactElement, rootContainer);
