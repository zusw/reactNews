import React from "react";
import {render} from "react-dom";
import MediaQuery from "react-responsive";
import {Router,Route,hashHistory,IndexRoute} from "react-router";
import PCIndex from "./components/pc/pc_index.js";
import Mobile from "./components/mobile/mobile_index.js";
import PCYuleNews from "./components/pc/pc_yulenews.js";
import PCGuojiNews from "./components/pc/pc_guojinews.js";
import PCIndexRouter from "./components/pc/pc_index_router.js";
import PCCenter from "./components/pc/pc_center";
import "../css/init.css";

class App extends React.Component{
  render(){
    return(
      <div>
        <MediaQuery query="(min-device-width:1224px)">
          <Router history={hashHistory}>
            <Route path="/" component={PCIndex}>
              <IndexRoute component={PCIndexRouter}/>
              <Route path="/yuletype/:type/:count" component={PCYuleNews}></Route>
              <Route path="/guojitype/:type/:count" component={PCGuojiNews}></Route>
            </Route>
            <Route path="/center" component={PCCenter}></Route>
          </Router>
        </MediaQuery>

        <MediaQuery query="(max-device-width:1224px)">
          <Mobile />
        </MediaQuery>
      </div>
    )
  }
}

render(<App />,document.getElementById("root"));
