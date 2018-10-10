import './IndexPage.less'

import { connect } from 'dva';
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'dva/router';

import { Layout, Menu, Icon } from 'antd';
import Home from './Home'
import User from './User'

const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;

class Index extends Component{
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }
  render() {
    let dispatch = this.props.dispatch
    const { Sidelist } = this.props.index
    return (
      <Layout style={{height: '100%'}}>
        <Sider
          /* trigger={null} */
          collapsible
          onCollapse={this.togGle}
          collapsed={this.state.collapsed}
        >
          <div className="logo" onClick={() => this.handleClick({dispatch, path: '/', search: Sidelist[0].search})}>
            <Icon type={'html5'} theme="twoTone" />
          </div>
          <Menu theme="dark" mode="inline" /* defaultSelectedKeys={['0']} */>
            {
              Sidelist.map((cont, index) => {
                if(cont.child) {

                  return (
                    <SubMenu key={`sub${index}`} title={
                      <span><Icon type={cont.type} /><span>{cont.name}</span></span>
                    }>
                    {
                      cont.child.map((val,key) => {
                        return (
                          <Menu.Item onClick={() => this.handleClick({dispatch, val})} key={`Item${key}`}>
                            <Icon type={val.type} />
                            <span>{val.name}</span>
                          </Menu.Item>
                        )
                      })
                    }
                    </SubMenu>
                  )
                }
                return (
                  <Menu.Item onClick={() => this.handleClick({
                    dispatch,
                    val: cont
                  })} key={`${index}`}>
                    <Icon type={cont.type} />
                    <span>{cont.name}</span>
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.togGle}
            />
          </Header>
          <Content className="content">
            <Switch>
              <Route path="/" exact  component={Home}/>
              <Route path="/user" component={User}/>
              <Redirect to="/" />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
  };

  togGle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleClick ({dispatch, val}) {
    // path: val.path, search: val.search
    let { path, search, onClick } = val
    if (path) {
      return dispatch({type: 'index/redirect', path, search})
    }
    switch (onClick) {
      case 0:
        this.clearToken(dispatch)
        break;

      default:
        break;
    }
  }

  clearToken (dispatch) {
    dispatch({type: 'index/clear'})
    window.location.reload()
  }


}


Index.propTypes = {

};

export default connect(
  ({index}) => ({index}),
  (dispatch) => {return {dispatch}}
)(Index)
