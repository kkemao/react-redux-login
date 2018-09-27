import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { systemName, logoConfig, loginTypeConfig } from '../../utils/config';
import { BrowserType } from '../../utils/global';
import WrappedLoginForm from './LoginForm'; 
// import QrCode from './QrCode';   //二维码
import ErrorBoundary from '../Error/ErrorBoundary';
import { Row, Col } from 'antd';
import './Login.css';    //TODO 待改

import icon_companyLogo from '../../asset/icon/logo1.png';
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
        downloadChrome: false   //谷歌下载
    };
    componentWillMount() {
        const { initAuth } = this.props;
        initAuth(this.props);
        let browserType = BrowserType();    //检测浏览器
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
            history,
            location
        } = this.props;
        const logoutTxt =location.state && location.state.logoutTxt;
        const loginFormProps = {
            ...username,
            ...password,
            login,
            history
        };
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
                            <div className="login_form_wrap">
                                <Row type="flex" justify="center" className="mb10">
                                    {logoConfig.companyLogo && (
                                        <Col span={12} className="tc">
                                            <img src={icon_companyLogo} alt="logo" />
                                        </Col>
                                    )}
                                </Row>
                                <div span={12} className="login_form_title">
                                    {systemName}
                                </div>
                                    {loginType === 'form' && loginTypeConfig.form && (
                                        <WrappedLoginForm {...loginFormProps} />
                                    )}
                                    {/* {loginType == 'qrcode' && loginTypeConfig.qrcode && (
                                        <QrCode />
                                    )} */}
                                <div className="login_form_errorTip">
                                    {(isError && errorMsg) || logoutTxt}
                                </div>
                                <div className="login_form_footer mb15">
                                    <span className="mr5">技术服务电话：15999594639</span>
                                    <span>技术支持：云天励飞技术有限公司</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </ErrorBoundary>
        )
    }
};

Login.defaultProps = defaultProps;
Login.propTypes = propTypes;
export default Login;

