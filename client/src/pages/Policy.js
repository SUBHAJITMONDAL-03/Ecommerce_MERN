import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            Information Collection: Clearly state what types of information you
            collect from your users, such as names, addresses, email addresses,
            payment information, and any other data required for the transaction
            process. Data Usage: Explain how you will use the collected
            information. For example, order processing, customer support,
            marketing communication, and improving services. Data Storage and
            Security: Describe how you will store and protect the data to ensure
            its confidentiality and integrity. Include information about
            encryption, access controls, and security measures in place.
            Third-Party Services: If you use third-party services, such as
            payment gateways or analytics tools, disclose this information and
            clarify how these services handle user data. Cookies and Tracking
            Technologies: Explain the use of cookies or tracking technologies on
            your website and how they are utilized for various purposes, such as
            improving user experience or targeted advertising.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
