import React from "react";
import PCHeader from "./pc_header.js";
import PCBody from "./pc_body";
import PCFooter from "./pc_footer.js";

export default class PCIndex extends React.Component{
  render(){
    return (
      <div>
        <PCHeader />
        {this.props.children}
        <PCFooter />
      </div>
    )
  }
}
