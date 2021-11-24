const getList  = (author, keyword) => {
  //先返回假数据
  return [
    {
      id:1,
      title: '标题A',
      content: 'content',
      date: 1637139459415,
      author: 'mario'
    },
    {
      id:2,
      title: '标题B',
      content: 'contentBBBB',
      date: 1637139518713,
      author: 'xiaoshu'
    }
  ]
}

const getDetail = (id) => {
  //暂时返回假数据
  return [
    {
      id:1,
      title: '标题A',
      content: 'content',
      date: 1637139459415,
      author: 'mario'
    },
    {
      id:2,
      title: '标题B',
      content: 'contentBBBB',
      date: 1637139518713,
      author: 'xiaoshu'
    }
  ]
}

const newBlog = (blogData = {}) => {
  //blogData 是一个博客对象，包含title content等属性
  console.log('here i am',blogData) 
  return {
    id: 3   //新建博客，插入到数据表里的id

  }
}

const updateBlog = (id, blogData) => {
  //id就是更新的id
  return true
}

const delBlog = (id) => {
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
} 