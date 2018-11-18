
//专门用来存放数据的
const Datasource = {
    data: {
        comments: [
            { id: 1, title: '今天是个好日子'},
            { id: 2, title: '心想的事儿都能成'}
        ],
        blogPost: [
            { id: 1, title: '床前明月光'},
            { id: 2, title: '疑是地上霜'}
        ]
    },
    getComments () {
        return this.data.comments
    },
    getBlogPost () {
        return this.data.blogPost    
    },
    handlers: [],
    //这里是组件传入需要监听执行的方法，也就是一进组件就要执行然后把handler放入handlers里面
    addChangeListener( handler ) {
        this.handlers.push( handler ) 
    },
    //这里要在数组里面移除这个方法
    removeChangeListener( handler ) {
        this.handlers = this.handlers.filter(item => item !== handler)
    },
    //这里就是发布按钮，也就是会改变数据以后执行emit
    changeComments () {
        //改变之后会往comments里面添加一条数据，然后调用函数的emit，emit调用数组里面的方法，方法会调用setState
        this.data.comments.push({ id: 3, title: '今天真高兴'})
        this.emit()      
    },
    changeBlogPost () {
        this.data.blogPost.push({ id: 3, title: '举头望明月'})
        this.emit()    
    },
    //emit的作用就是将组件放入handlers的方法全部执行
    emit () {
        this.handlers.forEach(handler => handler())    
    }
}   

Datasource.changeComments = Datasource.changeComments.bind(Datasource)
Datasource.changeBlogPost = Datasource.changeBlogPost.bind(Datasource)


export default Datasource