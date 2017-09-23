import React from "react";
import {get} from "../../fetch/get.js";
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import '../../../css/pc-tabs.css';

export default class PCTabs extends React.Component{

  constructor(){
    super();
    this.state = {
      type:"yule",
      news:[
        {
          "title":"未知",
          "url":"",
          "thumbnail_pic_s":""
        }
      ]
    }
  }

  componentDidMount(){
    this.http(this.state.type);
  }

  http(type){
    var result = get("http://www.iwen.wiki/sxtstu/news/juhenews.php?type="+type+"&count=3");
    result.then(res => {
      return res.json();
    }).then(json =>{
      this.setState({
        news:json
      })
    })
  }

  callback(key){
    switch (key) {
      case "yule":
        this.http("yule");
        break;
      case "keji":
        this.http("keji");
        break;
      case "guoji":
        this.http("guoji");
        break;
      case "guonei":
        this.http("guonei");
        break;
      case "junshi":
        this.http("junshi");
        break;
      case "shehui":
        this.http("shehui");
        break;

    }
  }

  render(){
    return(
      <div className="pc-tabs">
        <Tabs defaultActiveKey="yule" onChange={this.callback.bind(this)}>
         <TabPane tab="娱乐" key="yule">
          <ul>
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
         </TabPane>
         <TabPane tab="科技" key="keji">
         <ul>
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
         </TabPane>
         <TabPane tab="国际" key="guoji">
         <ul>
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
         </TabPane>
         <TabPane tab="国内" key="guonei">
         <ul>
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
         </TabPane>
         <TabPane tab="军事" key="junshi">
         <ul>
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
         </TabPane>
         <TabPane tab="社会" key="shehui">
         <ul>
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
         </TabPane>
        </Tabs>
      </div>
    )
  }
}
