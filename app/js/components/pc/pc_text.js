import React from "react";
import {get} from "../../fetch/get.js";
import "../../../css/pc-text.css";

export default class PCText extends React.Component{

  constructor(){
    super();
    this.state = {
      news:[
        {
          "title":"未知",
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
      this.setState({
        news:json
      })
    })
  }

  render(){
    return(
      <div className='pc-text'>
        <h3>{this.state.news[0].title}</h3>
        <ul>
          {
            this.state.news.map(function(newsItem,index){
              return (
                <li><a target="_blank" href={newsItem.url}>{newsItem.title}</a></li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
