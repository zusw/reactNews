import React from "react";
import { Row, Col, Menu, Icon,Button,Modal,Tabs,Form,Input,message} from 'antd';
import {Link} from "react-router";
import logo from "../../../images/iwennews.png";
import {get} from "../../fetch/get.js";
import "../../../css/pcheader.css";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class PCHeader extends React.Component{

  constructor(){
    super();
    this.state = {
      current:"top",
      hasLogined:false,
      userNickName:"未知",
      modalVisible:false,
      action:"login"
    }
  }

  //读取用户数据
  componentWillMount(){
    if(localStorage.getItem("username") != null){
      this.setState({
        hasLogined:true,
        userNickName:localStorage.getItem("username")
      })
    }
  }

  //菜单事件
  handlerClickMenu(event){
    if(event.key == "register"){
      this.setModalVisible(true);
    }else{
      this.setState({
        current:event.key
      })
    }
  }

  //控制弹出框显示与隐藏
  setModalVisible(value){
    this.setState({
      modalVisible:value
    })
  }

  //判断是登陆还是注册  此时通过拿到action就可以知道是登陆还是注册
  callback(key){
    if(key == "1"){
      this.setState({
        action:"login"
      })
    }else if(key == "2"){
      this.setState({
        action:"register"
      })
    }
  }

  //表单提交事件
  handlerSubmit(event){
    event.preventDefault();
    //获取输入框的值
    var formData = this.props.form.getFieldsValue();
    if(this.state.action == "login"){
      //登陆
      var result = get("http://www.iwen.wiki/sxtstu/news/selectuser.php?username="+formData.username+"&password="+formData.password);
      result.then(res => {
        return res.json();
      }).then(json => {
        this.setState({
          hasLogined:true,
          userNickName:json.username
        })
        this.setModalVisible(false);
        localStorage.setItem("username",json.username);
        localStorage.setItem("password",json.password);
      })
    }else{
      //注册
      var result = get("http://www.iwen.wiki/sxtstu/news/adduser.php?username="+formData.r_username+"&password="+formData.r_password+"&repassword="+formData.r_confirmpassword);
      result.then(res => {
        return res.json();
      }).then(json => {
        message.success(json);
        this.setModalVisible(false);
      })
    }
  }

  //登出
  logout(){
    this.setState({
      hasLogined:false
    });
    localStorage.clear();
  }

  render(){
    //定义获取的key
    var {getFieldProps} = this.props.form;
    var userShow = this.state.hasLogined
    ?
    <Menu.Item key="logout" className="header-login">
       <Button type="primary">{this.state.userNickName}</Button>
       <Button type="dashed">
        <Link to={`/center`}>个人中心</Link>
       </Button>
       <Button type="ghost" onClick={this.logout.bind(this)}>退出</Button>
    </Menu.Item>
    :
    <Menu.Item key="register" className="header-login" >
     登陆|注册
    </Menu.Item>

    return(
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Row>
              <Col span={1}>
                <div className="logo">
                  <img src={logo} />
                </div>
              </Col>
              <Col span={22}>
                <Menu onClick={this.handlerClickMenu.bind(this)} className="menu" mode="horizontal" selectedKeys={[this.state.current]}>
                  <Menu.Item key="top">
                    <Link to={`/`}>
                      <Icon type="to-top" />
                      头条
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="guonei">
                    <Link to={`/type/${"guonei"}/${10}`}>
                      <Icon type="minus-square" />
                      国内
                    </Link>
                  </Menu.Item>

                  <Menu.Item key="guoji">
                    <Link to={`/guojitype/${"guoji"}/${10}`}>
                      <Icon type="global" />
                      国际
                    </Link>
                  </Menu.Item>

                  <Menu.Item key="yule">
                    <Link to={`/yuletype/${"yule"}/${10}`}>
                      <Icon type="appstore" />
                      娱乐
                    </Link>
                  </Menu.Item>

                  <Menu.Item key="tiyu">
                    <Link to={`/type/${"tiyu"}/${10}`}>
                      <Icon type="smile" />
                      体育
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="junshi">
                    <Link to={`/type/${"junshi"}/${10}`}>
                      <Icon type="rocket" />
                      军事
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="keji">
                    <Link to={`/type/${"keji"}/${10}`}>
                      <Icon type="fork" />
                      科技
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="shishang">
                    <Link to={`/type/${"shishang"}/${10}`}>
                      <Icon type="apple" />
                      时尚
                    </Link>
                  </Menu.Item>
                  {userShow}
                </Menu>

                <Modal visible={this.state.modalVisible} onCancel={()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)} okText="关闭">

                <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                  <TabPane tab="登陆" key="1">
                    <Form layout="horizontal" onSubmit={this.handlerSubmit.bind(this)}>
                      <FormItem label="用户名">
                        <Input placeholder="请输入您的账号" {...getFieldProps("username")}/>
                      </FormItem>
                      <FormItem label="密码">
                        <Input type="password" placeholder="请输入您的密码"  {...getFieldProps("password")}/>
                      </FormItem>
                      <Button type="primary" htmlType="submit">登陆</Button>
                    </Form>
                  </TabPane>
                  <TabPane tab="注册" key="2">
                  <Form layout="horizontal" onSubmit={this.handlerSubmit.bind(this)}>
                    <FormItem label="用户名">
                      <Input placeholder="请输入您的账号"  {...getFieldProps("r_username")}/>
                    </FormItem>
                    <FormItem label="密码">
                      <Input type="password" placeholder="请输入您的密码" {...getFieldProps("r_password")}/>
                    </FormItem>
                    <FormItem label="确认密码">
                      <Input type="password" placeholder="请再次输入您的密码" {...getFieldProps("r_confirmpassword")}/>
                    </FormItem>
                    <Button type="primary" htmlType="submit">注册</Button>
                  </Form>
                  </TabPane>
                </Tabs>
                </Modal>
              </Col>
              <Col span={1}></Col>
            </Row>
          </Col>
          <Col span={2}></Col>
        </Row>

      </div>
    )
  }
}


export default PCHeader = Form.create({})(PCHeader);
