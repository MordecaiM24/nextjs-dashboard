import React from "react";
import styles from "./style";
import {
  Billing,
  Business,
  Button,
  CTA,
  CardDeal,
  Clients,
  FeedbackCard,
  Footer,
  GetStarted,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components/index.js";

const App = () => {
  return (
    <div className="w-full overflow-hidden bg-primary px-0 sm:px-12 md:px-24 lg:px-36">
      <div className="flex items-center justify-center px-6 sm:px-16">
        <div className="w-full xl:max-w-[1280px]">
          <Navbar />
        </div>
      </div>

      <div className="flex items-start justify-center bg-primary">
        <div className="w-full xl:max-w-[1280px]">
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className="w-full xl:max-w-[1280px]">
          <Business />
          <Billing />
          {/* <CardDeal /> */}
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
