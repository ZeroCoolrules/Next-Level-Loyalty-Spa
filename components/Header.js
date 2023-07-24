import html from "html-literal";

export default Header = state => html`
  <header>
    <h1>${state.header}</h1>
  </header>
`;
