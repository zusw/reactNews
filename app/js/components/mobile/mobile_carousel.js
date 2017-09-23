import React from "react";
import { Carousel } from 'antd';

export default class MobileCarousel extends React.Component{
  render(){
    const setting = {
     dots:true,
     infinite:true,
     speed:500,
     slidesToShow:1,
     autoplay:true
   }
    return(
      <div style={{width:this.props.width,height:this.props.height}} className="pc-carousel">
        <Carousel {...setting}>
          <div>
            <img style={{height:"200px"}} src="http://iwen.wiki/zhichenshop/l1.jpg" />
          </div>
          <div>
            <img style={{height:"200px"}}  src="http://iwen.wiki/zhichenshop/l2.jpg" />
          </div>
          <div>
            <img style={{height:"200px"}}  src="http://iwen.wiki/zhichenshop/l3.jpg" />
          </div>
          <div>
            <img style={{height:"200px"}}  src="http://iwen.wiki/zhichenshop/l4.jpg" />
          </div>
        </Carousel>
      </div>
    )
  }
}
