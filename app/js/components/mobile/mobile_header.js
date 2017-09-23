import React from "react";
import "../../../css/mobile-header.css";
import logo from "../../../images/iwennews.png";
import { Icon } from 'antd';


export default class MobileHeader extends React.Component{
  render(){
    return(
      <div className="mobile-header">
        <img src={logo} />
        <span>ReactNews</span>
        <Icon type="user-add" />
      </div>
    )
  }
}
