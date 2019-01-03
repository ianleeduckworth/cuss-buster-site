import React from 'react';

const About = () => {
  return (
    <div>
      <h2>Privacy Policy</h2>
      <h3>What information we collect</h3>
      <p>
        CussBuster stores all personally identifiable information (including
        credit card data, email, and password) in a safe and secure fashion. We
        do not store any data that is passed into the API in any format.
        Analytics regarding which flagged words were hit are recorded, but no
        data is stored which would link any words or phrases back to any user.
        In other words, even in the event of a full data breach, there would
        literally be no way to pin any words or phrases on any particular user.
      </p>
      <h3>What we do with your information</h3>
      <p>
        Your personally identifiable information never leaves CussBuster's
        immediate ecosystem. The personally identifiable data that is collected
        is used for billing purposes only. CussBuster will never sell,
        distribute, or make available any personally identifiable information
        for any reason (except in the case that we are required to by law). The
        only data that we make available in any wy is statistical data regarding
        what words in our database have been hit, however we do not store which
        client hit the offending word.
      </p>
      <h3>When we will contact you</h3>
      <p>
        CussBuster will only contact you via email when there is an issue that
        needs your response. Some examples of when we might contact you include
        (but are not limited to) issues with billing, when you're starting to
        run low on calls for the month, and when your account has been locked
        due to using up all of your calls for the month. In other words, we will
        only contact you when there is a justifiable reason to communicate with
        you. We will never send you annoying spam emails because we don't want
        all of our clients to hate us (that just seems silly).
      </p>
      <h3>How do we protect your information?</h3>
      <p>
        We use a variety of safety and security measures to keep your personal
        information safe. We never store passwords or credit card numbers in
        plain text.
      </p>
    </div>
  );
};

export default About