import html from "html-literal";

export default () => html`
  <section id="create">
    <h2>Stamp Creation</h2>
    <form action="https://formspree.io/f/mjvqkajy" method="post">
      <!--This where the business owner Uploads there logo  -->
      <label for="logo">Upload Logo:</label>
      <input type="file" id="logo" name="logo" /><br />

      <h2>Stamp Card Options</h2>
      <ul>
        <!-- This where the business owner selects number of stamps needed to build out stamp card -->
        <li>
          <input type="radio" id="sixStamps" name="stamps" value="6" /><label
            for="sixStamps"
            >6 stamps</label
          >
        </li>
        <li>
          <input type="radio" id="eightStamps" name="stamps" value="8" /><label
            for="eightStamps"
            >8 stamps</label
          >
        </li>
        <li>
          <input type="radio" id="tenStamps" name="stamps" value="10" /><label
            for="tenStamps"
            >10 stamps</label
          >
        </li>
      </ul>
      <!-- This where the business owner selects the type of rewards that the stamp card is awarded -->
      <h2>Rewards</h2>
      <label for="multi">Multi Rewards</label>
      <input type="checkbox" id="multi" name="multi" /><br />

      <label for="tier">Tier Rewards</label>
      <input type="checkbox" id="tier" name="tier" /><br />

      <!-- This is where the business owner inputs company info and percentage of rewards -->
      <h2>Company Info</h2>
      <label for="companyName">Company Name</label>
      <input type="text" id="company" name="company" /><br />

      <label for="address">Full Address</label>
      <input type="text" id="address" name="address" /><br />

      <label for="reward">Reward</label>
      <input type="text" id="reward" name="reward" /><br />

      <label for="tierReward">Tier Reward</label>
      <input type="text" id="tierReward" name="tierReward" /><br />

      <label for="website">Website</label>
      <input type="text" id="website" name="website" /><br />

      <!-- This where the Stamp card is created for the business owner which also creates the qr code to be scanned for the stamp card add up -->
      <button type="submit">Create</button>
    </form>
  </section>
`;
