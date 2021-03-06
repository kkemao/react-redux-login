import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { keepLogin } from '../../utils/config';

const FormItem = Form.Item;

const defaultProps = {
  username: '',
  password: ''
};

const propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const login = this.props.login;
    console.log('LoginFormPorps----', this.props);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        login(values, this.props);
      }
    });
  };

  render() {
    const { username, password } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="login_form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名!' }],
            initialValue: username
          })(
            <Input
              prefix={<Icon type="user" style={{ fontSize: 14 }} />}
              placeholder="用户名"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
            initialValue: password
          })(
            <Input
              prefix={<Icon type="lock" style={{ fontSize: 14 }} />}
              type="password"
              placeholder="密码"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: keepLogin
          })(<Checkbox /* onClick={handleRemember} */>保持登录</Checkbox>)}
          {/* <a className="login_form_forgot">忘记密码？</a> */}
          <Button
            type="primary"
            htmlType="submit"
            className="login_form_button"
          >
            登录
          </Button>
          {/* Or <a>注册!</a> */}
        </FormItem>
      </Form>
    );
  }
}

LoginForm.defaultProps = defaultProps;
LoginForm.propTypes = propTypes;

const WrappedLoginForm = Form.create()(LoginForm);
export default WrappedLoginForm;
