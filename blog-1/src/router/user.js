const { loginCheck } = require('../controller/user')

const {SuccessModel, ErrorModel} = require('../model/resModel')

const handleUserRouter = (req, ers) => {
  const method = req.method //GET POST

  //登录
    if(method === 'POST' && req.path === '/api/user/login') {
        const { username, password } = req.body
        const result = loginCheck(username, password)
        return result.then(data => {
            if(data.username) {
                return new SuccessModel()
            }
            return new ErrorModel('login failed')
        })
    }
}

 module.exports = handleUserRouter