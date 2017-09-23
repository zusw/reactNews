import React from "react";
import PCCarousel from "./pc_carousel";
import { Row, Col } from 'antd';
import PCText from  "./pc_text.js";
import PCTextImg from "./pc_text_img.js";
import PCTabs from "./pc_tabs.js";
import "../../../css/pc-body.css";

export default class PCBody extends React.Component{
  render(){
    return(
     <div className="pc-body">
       <Row>
         <Col span={2}></Col>
         <Col span={20}>
          <div className="pc-body-top">
            <PCCarousel width="500px" height="300px"/>
            <div className="pc-body-text">
              <PCText url="http://www.iwen.wiki/sxtstu/news/juhenews.php?type=top&count=3"/>
              <PCText url="http://www.iwen.wiki/sxtstu/news/juhenews.php?type=yule&count=3"/>
            </div>
          </div>
          <div className="pc-body-center">
            <PCTextImg url="http://www.iwen.wiki/sxtstu/news/juhenews.php?type=top&count=10" />
            <PCTabs/>
          </div>
          <div>
            {
              // <PCTextImg url="http://www.iwen.wiki/sxtstu/news/juhenews.php?type=junshi&count=10" />
            }
          </div> 
         </Col>
         <Col span={2}></Col>
       </Row>
     </div>
    )
  }
}
