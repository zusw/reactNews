import React from "react";
import {get} from "../../fetch/get.js";
import "../../../css/pc-text-img.css";

export default class PCTextImg extends React.Component{

  constructor(){
    super();
    this.state = {
      news:[
        {
          "title":"未知",
          "thumbnail_pic_s":"",
          "url":""
        }
      ]
    }
  }

  componentDidMount(){
    var result = get(this.props.url);
    result.then(res => {
      return res.json();
    }).then(json =>{
      console.log(json);
      this.setState({
        news:json
      })
    })
  }

  render(){
    return(
      <div className="pc-text-img">
        <ul className="clearfix">
          {
            this.state.news.map(function(newsItem,index){
              return (
                <li>
                  <a target="_blank" href={newsItem.url}>
                    <img src={newsItem.thumbnail_pic_s} />
                    <p>{newsItem.title}</p>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
