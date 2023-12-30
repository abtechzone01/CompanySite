import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Image from "next/image";
import Erp from "../../images/ERP.jpeg";
import Institute from "../../images/institute.jpeg";
import App from "../../images/app.jpeg";
import Bestearning from "../../images/bestearning.jpeg";
import Link from "next/link";
const OurWork = () => {
  return (
    <>
      <Header />
      <div className="bannerServices">
        <p className="heading">--- Our Work ---</p>
        <h1 className="headingBold">Our Recent Work</h1>
        <div className="service-container">
          <div className="service-item" data-wow-delay="0.5s">
            <div className="service-iconserviceservice-iconservice">
              <Image src={Erp} height={250} width={250} alt="" />
            </div>
            <h5>Ab Erp Solutions</h5>
            <Link
              className="linkcolor"
              href="https://aberpsolutions.com"
              target="blank"
            >
              View
            </Link>
          </div>
          <div className="service-item" data-wow-delay="0.1s">
            <div className="service-iconservice">
              <Image src={App} height={250} width={250} alt="" />
            </div>
            <h5>Earning App Solutions</h5>
            <Link
              className="linkcolor"
              href="https://earningappsolutions.online"
              target="blank"
            >
              View
            </Link>
          </div>
          <div className="service-item" data-wow-delay="0.3s">
            <div className="service-iconservice">
              <Image src={Institute} height={250} width={250} alt="" />
            </div>
            <h5>Bajpai Institutions</h5>
            <Link
              className="linkcolor"
              href="https://bajpaiinstitutions.com"
              target="blank"
            >
              View
            </Link>
          </div>
          <div className="service-item" data-wow-delay="0.3s">
            <div className="service-iconservice">
              <Image src={Bestearning} height={250} width={250} alt="" />
            </div>
            <h5>Best Earning Apps</h5>
            <Link
              className="linkcolor"
              href="https://bestearningapps.online"
              target="blank"
            >
              View
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OurWork;
