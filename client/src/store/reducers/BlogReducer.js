const { GET_BLOG, BLOG_COMMENT, ADD_COMMENT } = require('../type')

const iState = {
    blogs: [],
    addComments: '',
    blogsNew: ''
}

const BlogReducer = (state = iState, action) => {
    switch (action.type) {
        case GET_BLOG:
            return { ...state, blogs: action.payload }
        case ADD_COMMENT:
            return {...state, addComments:[...state.addComments, action.payload]}
        case BLOG_COMMENT:
            return{...state, blogsNew: action.payload }
        default:
            return { ...state }
    }
}

export default BlogReducer