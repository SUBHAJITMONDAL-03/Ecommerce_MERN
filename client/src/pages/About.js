import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to our ecommerce store! Discover a vast array of
            high-quality products from electronics and fashion to home and
            beauty. Our user-friendly platform ensures a seamless shopping
            experience, aided by smart search filters, personalized
            recommendations, and customer reviews. Shop with confidence as we
            prioritize your security with SSL encryption and secure payment
            gateways. Enjoy the convenience of mobile responsiveness, making
            on-the-go shopping a breeze. We offer reliable shipping with
            tracking options, and our responsive customer support is ready to
            assist you. Take advantage of regular promotions and discounts, and
            explore our social media presence for more. Happy shopping!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
