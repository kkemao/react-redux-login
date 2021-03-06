const API1 = '/api';
const API2 = '/api/intellif';

module.exports = {
    api: {
      userLogin: `${API1}/oauth/token`,
      userLogout: `${API2}/server/logoff`,
      checkOutOfDate: `${API2}/user/isOutOfDateorNot`,
      imageService: `${API2}/image/:id`,
      //更新用户信息
    getUserRightSever: `${API2}/user/right/:id`,
    }
};