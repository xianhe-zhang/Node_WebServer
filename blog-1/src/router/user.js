const { login } = require('../controller/user')

const {SuccessModel, ErrorModel} = require('../model/resModel')

// 获取cookie的过期时间
const getCookieExpires = () => {
    const d =new Date()
    d.setTime(d.getTime() + (24 * 60 * 60 *1000))
    return d.toGMTString()
}

const handleUserRouter = (req, res) => {
    const method = req.method //GET POST

    //登录
    if(method === 'POST' && req.path === '/api/user/login') {
        const { username, password } = req.body
        const result = login(username, password)
        return result.then(data => {
            if(data.username) {
                
                // 设置session
                req.session.username = data.username
                req.session.realname = data.realname

                return new SuccessModel()
            }
            return new ErrorModel('login failed')
        })
    }

    //登录验证的测时, 首先上面先去修改cookie，然后再访问test的时候，就会带着cookie过来
    if (method == 'GET' && req.path === '/api/user/login-test') {
        if(req.session.username) {
            return new SuccessModel({
                username: req.cookie.username
            })
        }
        return new ErrorModel('not login in yet!')
    }
}

 module.exports = handleUserRouter