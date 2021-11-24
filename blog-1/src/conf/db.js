const env = process.env.NODE_DEV //环境参数 node的一个全局变量


// 配置
let MYSQL_CONF

if (env === 'dev') {
    
    MYSQL_CONF = {
        host: 'localhost',
        user:'root',
        password:'123456',
        port:'3306',
        database:'myBlog'
    }
}

// 如果要上线，这里写成线上的info
if (env === 'production') {

    MYSQL_CONF = {
        host: 'localhost',
        user:'root',
        password:'123456',
        port:'3306',
        database:'myBlog'
    }
}

module.exports = {
    MYSQL_CONF
}