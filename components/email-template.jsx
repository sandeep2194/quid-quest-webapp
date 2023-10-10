import * as React from "react";

export const EmailTemplate = ({ firstName, link }) => (
  <div>
    <h1>Hi, {firstName}!</h1>
    <p>You have been invited on quid quest</p>
    <p>Please click on the link below to start your onboarding</p>
    <a href={link}>Start onboarding</a>
  </div>
);
