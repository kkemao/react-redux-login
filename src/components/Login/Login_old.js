import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { systemName, logoConfig, loginTypeConfig } from '../../utils/config';
import { BrowserType } from '../../utils/global';
import WrappedLoginForm from './LoginForm';
// import QrCode from './QrCode';
import LoginTab from './LoginTab';
import ErrorBoundary from '../Error/ErrorBoundary';
import './Login.css';

import icon_companyLogo from '../../asset/icon/logo1.png';
import icon_systemLogo from '../../asset/icon/deepeye.png';
import chromeBrowser from '../../asset/download/chrome_flash.rar';

const defaultProps = {
  username: '',
  password: '',
  isError: false,
  errorMsg: '',
  loginType: loginTypeConfig.defaultType
};

const propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
  loginType: PropTypes.string.isRequired,
  initAuth: PropTypes.func.isRequired
};

class Login extends Component {
  state = {
    downloadChrome: false
  };
  componentWillMount() {
    const { initAuth } = this.props;
    initAuth(this.props);
    let browserType = BrowserType();
    if (browserType !== 'Chrome') {
      this.setState({ downloadChrome: true });
    }
  }
  render() {
    const {
      username,
      password,
      isError,
      errorMsg,
      loginType,
      login,
      changeLoginType,
      history
    } = this.props;

    const logoutTxt =
      this.props.location.state && this.props.location.state.logoutTxt;
    // console.log('logoutTxt',isError , errorMsg,isError && errorMsg ||logoutTxt)

    const loginFormProps = {
      ...username,
      ...password,
      login,
      history
    };

    const tabProps = {
      loginType: loginType,
      changeLoginType
    };
    console.log('loginProps--:', this.props);
    //设置logo样式
    let cs = 'tc';
    if (logoConfig.companyLogo && logoConfig.systemLogo) {
      cs += ' bdl';
    }
    return (
      <ErrorBoundary>
        <div id="loginWrap">
          {this.state.downloadChrome ? (
            <div id="browserSupport">
              <p>我们推荐Chrome浏览器访问系统</p>
              <div id="text">
                <a href={chromeBrowser}>
                  <span class="browserLogo" />
                  <span class="download">点击下载</span>
                </a>
              </div>
            </div>
          ) : (
            <div id="login">
              <Row type="flex" justify="center" className="mb30">
                {logoConfig.companyLogo ? (
                  <Col span={12} className="tc">
                    <img src={icon_companyLogo} alt="logo" />
                  </Col>
                ) : (
                  ''
                )}
                {logoConfig.systemLogo ? (
                  <Col span={12} className={cs}>
                    <img src={icon_systemLogo} alt="deepeye" />
                  </Col>
                ) : (
                  ''
                )}
              </Row>
              <div className="login_form_wrap">
                <div span={12} className="login_form_title">
                  {systemName}
                </div>
                {loginType == 'form' && loginTypeConfig.form ? (
                  <WrappedLoginForm {...loginFormProps} />
                ) : (
                  ''
                )}
                {/* {loginType == 'qrcode' && loginTypeConfig.qrcode ? (
                  <QrCode />
                ) : (
                  ''
                )} */}
                <div className="login_form_errorTip">
                  {(isError && errorMsg) || logoutTxt}
                </div>
              </div>
              {loginTypeConfig.form && loginTypeConfig.qrcode ? (
                <LoginTab {...tabProps} />
              ) : (
                ''
              )}
            </div>
          )}
          <footer className="copyright">
            <p>
              Copyright©2014-2016&nbsp;intellif.com All Rights Reserved.云天励飞
              版权所有
            </p>
          </footer>
        </div>
      </ErrorBoundary>
    );
  }
}

Login.defaultProps = defaultProps;
Login.propTypes = propTypes;

export default Login;
