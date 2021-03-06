import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { initAuth, login, changeLoginType } from '../actions/LoginActions';

const mapStateToProps = state => ({
    isRemember: state.loginReducer.isRemember,
    username: state.loginReducer.username,
    password: state.loginReducer.password,
    isError: state.loginReducer.isError,
    errorMsg: state.loginReducer.errorMsg,
    loginType: state.loginReducer.loginType
  });

export default connect(mapStateToProps, {
    initAuth,
    login,
    changeLoginType
})(Login);
  