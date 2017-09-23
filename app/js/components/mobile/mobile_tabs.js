import React from "react";
import {get} from "../../fetch/get.js";
import { Tabs } from 'antd';
import "../../../css/mobile-tabs.css";
import Tloader from 'react-touch-loader';
import ReactPullToRefresh from "react-pull-to-refresh";
const TabPane = Tabs.TabPane;

export default class MobileTabs extends React.Component{

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
      ],
     count:5,
     hasMore:0,
     initializing:1
    }
  }

  componentDidMount(){
    this.http(this.state.type);
    //当滑动到底部的时候，需要做一个延时加载的效果
    setTimeout(()=>{
      this.setState({
        hasMore:1,
        initializing:2  //初始化完成
      })
    },2e3);
  }

  http(type){
    var result = get("http://www.iwen.wiki/sxtstu/news/juhenews.php?type="+type+"&count="+this.state.count);
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

  loadMore(resolve){
    setTimeout(()=>{
      var count = this.state.count;
      this.setState({
        count:count+5
      })
      this.http(this.state.type,this.state.count);
      this.setState({
        hasMore:count >0 && count<30
      })
      //组件自带的，结束的标识
      resolve();
    },2e3);
  }

  //下拉刷新
  handleRefresh(resolve){
    this.http("keji");
    resolve();
  }

  render(){
    var {hasMore,initializing} = this.state;
    return(
      <div className="mobile-tabs">
        <Tabs defaultActiveKey="yule" onChange={this.callback.bind(this)}>
         <TabPane tab="娱乐" key="yule">

         <ReactPullToRefresh onRefresh={this.handleRefresh.bind(this)} style={{textAlign:"center"}}>
           <Tloader className="main" onLoadMore={this.loadMore.bind(this)} hasMore={hasMore} initializing={initializing}>
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
           </Tloader>
         </ReactPullToRefresh>
         </TabPane>
         <TabPane tab="科技" key="keji">
         <Tloader className="main" onLoadMore={this.loadMore.bind(this)} hasMore={hasMore} initializing={initializing}>
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
         </Tloader>
         </TabPane>
         <TabPane tab="国际" key="guoji">
         <Tloader className="main" onLoadMore={this.loadMore.bind(this)} hasMore={hasMore} initializing={initializing}>
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
         </Tloader>
         </TabPane>
         <TabPane tab="国内" key="guonei">
         <Tloader className="main" onLoadMore={this.loadMore.bind(this)} hasMore={hasMore} initializing={initializing}>
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
         </Tloader>
         </TabPane>
         <TabPane tab="军事" key="junshi">
         <Tloader className="main" onLoadMore={this.loadMore.bind(this)} hasMore={hasMore} initializing={initializing}>
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
          </Tloader>
         </TabPane>
         <TabPane tab="社会" key="shehui">
         <Tloader className="main" onLoadMore={this.loadMore.bind(this)} hasMore={hasMore} initializing={initializing}>
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
          </Tloader>
         </TabPane>
        </Tabs>
      </div>
    )
  }
}
