import html from "html-literal";

export default () => html`
  <section id="Mystamps">
    <p>
      Welcome to your Loyalty App. This will help small businesses development
      there customer database while creating a rewards program to most
      importantly retain customers while rewarding them to help grow there
      business.
    </p>
    <input
      id="text"
      type="text"
      value="http://www.dreamcadian.com"
      style="width:80%"
    /><br />
    <div id="qrcode">
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100"
        alt=""
        title=""
      />
    </div>
  </section>
`;
