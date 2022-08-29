import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import Footer from "./../components/Footer";
import { useParams } from "react-router";

const HomeScreen = () => {
    window.scrollTo(0, 0);

     let params = useParams();
     const keyword = params.keyword;
  
  return (
    <div>
      <Header />
      <ShopSection keyword={keyword}/>
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
