import React from "react";
import MobileHeader from "./mobile_header.js";
import MobileCarousel from "./mobile_carousel.js";
import MobileTabs from "./mobile_tabs.js";

export default class MobileIndex extends React.Component{
  render(){
    return (
      <div>
        <MobileHeader />
        <MobileCarousel width="100%" height="200px"/>
        <MobileTabs />
      </div>
    )
  }
}
