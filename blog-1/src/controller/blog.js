const { exec } = require('../db/mysql')


const getList  = (author, keyword) => {
//   //先返回假数据
//   return [
//     {
//       id:1,
//       title: '标题A',
//       content: 'content',
//       date: 1637139459415,
//       author: 'mario'
//     },
//     {
//       id:2,
//       title: '标题B',
//       content: 'contentBBBB',
//       date: 1637139518713,
//       author: 'xiaoshu'
//     }
//   ]
    
    let sql = `select * from blogs where 1 = 1` //1=1 占位，害怕后面author与keyword没有值 
    if (author) {
        sql += ` and author='${author}`
    }
    if (keyword) {
        sql += ` and title like '%${keyword}%'`
    }
    sql += ` order by createtime desc`
 
    // 返回promise
    return exec(sql)
}

const getDetail = (id) => {
    const sql = `select * from blogs where id='${id}'`
    return exec(sql).then(rows => {
        return rows[0]
    })
}

const newBlog = (blogData = {}) => {
    //blogData 是一个博客对象，包含title content等属性
    
    const title = JSON.parse(blogData).title
    const content = blogData.content
    const author = blogData.author
    const createtime = Date.now()

    const sql = `
        insert into blogs (title, content, createtime, author)
        values('${title}', '${content}', '${createtime}', '${author}');
    `

    return exec(sql).then(insertData => {
        console.log('insertData is', insertId)
        return {
            id: insertData.insertId
        }
    })
}

const updateBlog = (id, blogData) => {
    //id就是更新的id
    const title = blogData.title
    const content = blogData.content
    
    const sql = `
        update blogs set title='${title}', content='${content}' where id=${id}
    `
    return exec(sql).then(updateData => {
        console.log(updateData)
        if (updateData.affectedRows > 0) {
            return true
        }
        return false
    })
}

const delBlog = (id, author) => {
    const sql = `delete from blogs where id='${id}' and author='${author}'`
    return exec(sql).then(delData => {
        if (delData.affectedRows > 0) {
            return true
        }
        return false
    })
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
} 