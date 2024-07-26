"use client";

import "./emailInput.scss"

const EmailInput = () => {
  return (
    <form>
      <input type="email" placeholder="Enter your email" />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default EmailInput;
