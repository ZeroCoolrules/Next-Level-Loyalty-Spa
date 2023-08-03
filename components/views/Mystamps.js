import html from "html-literal";

export default () => html`
  <section id="Mystamps">
    <p>
      Welcome to your Loyalty App. This will help small businesses development
      there customer database while creating a rewards program to most
      importantly retain customers while rewarding them to help grow there
      business.
    </p>
    <form id="stamp-card-form">
      <label for="business-name">Business Name</label>
      <input type="text" id="business-name" name="business-name" required />

      <label for="reward-description">Reward Description</label>
      <input
        type="text"
        id="reward-description"
        name="reward-description"
        required
      />

      <label for="number-of-stamps">Number of Stamps to Redeem</label>
      <input
        type="number"
        id="number-of-stamps"
        name="number-of-stamps"
        min="1"
        required
      />

      <label for="expires-after">Expires After (days)</label>
      <input
        type="number"
        id="expires-after"
        name="expires-after"
        min="1"
        required
      />

      <button type="submit" class="handleSubmit">Create</button>
    </form>
  </section>
`;
