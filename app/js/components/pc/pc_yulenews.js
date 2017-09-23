import React from "react";
import {get} from "../../fetch/get.js";

export default class PCYuleNews extends React.Component{
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
    console.log(this.props.params.type);
    var result = get("http://www.iwen.wiki/sxtstu/news/juhenews.php?type="+this.props.params.type+"&count="+this.props.params.count);
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
