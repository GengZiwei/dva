import { connect } from 'dva';
import React, { Component } from 'react';
import queryString  from 'query-string';
import { Form, Input, Icon, Checkbox, Button } from 'antd';
import './Index.css';

const FormItem = Form.Item;

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const { form } = this.props.login
    let fn_dispatch =  this.props.dispatch
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="flex-div">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
        {getFieldDecorator('userName', {
          rules: [{ required: true, whitespace: true, message: '请输入你的用户名!' }],
          validateFirst: true
        })(
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
        )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入你的密码!' }]
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(
            <Checkbox>记住我</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码?</a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={() => this.updata(fn_dispatch, form)}>
            登陆
          </Button>
          Or <a href="">立即注册</a>
          </FormItem>
      </Form>
      </div>
    )
  };

  updata(fn_dispatch, s_form) { // 登陆
    fn_dispatch({
      type: 'index/logo'
    })
    let a_url = s_form.form && s_form.form.split('?') || '/';
    fn_dispatch({
      type: 'index/redirect',
      path: a_url[0],
      search: queryString.parse(a_url[1])
    })
  }
}


Login.propTypes = {

};

export default connect(
  ({login}) => ({login}),
  (dispatch) => {return {dispatch}}
)(Form.create()(Login))
