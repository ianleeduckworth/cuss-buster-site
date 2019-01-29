import React from "react";

const Contact = () => {
  return (
    <div>
      <h2>Contact information</h2>
      <p className="italic">
        Contact us about custom pricing to suit your unique business needs!
      </p>
      <a href="mailto:support@cussbuster.com">support@cussbuster.com</a>
      <div className="pad-15" />
      <p className="italic">
        If you have general questions about our code or our site (or if you wish
        to file a bug ticket), please visit our{" "}
        <a
          href="https://github.com/ianleeduckworth/cuss-buster/"
          target="_blank"
          rel="noopener noreferrer"
        >
          github repository
        </a>
        .
      </p>
    </div>
  );
};

export default Contact;
