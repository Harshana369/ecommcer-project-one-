import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <ShopSection />
      <CalltoActionSection />
      {/* {/* <ContactInfo />
        <Footer /> */}
    </div>
  );
};

export default HomeScreen;
