const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db')


//创建链接对象
const con = mysql.createConnection(MYSQL_CONF)

//开始链接
con.connect()
 
//统一执行sql函数
// 这里因为执行sql需要时间，我们有需要打印出来result，因此这里属于异步，所以直接封装成promise就成。
function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) { 
                reject(err)
                return 
            }
            resolve(result)
        })
    })
    return promise
}

module.exports = {
    exec
}