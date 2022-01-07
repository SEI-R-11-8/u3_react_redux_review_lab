import { GetBlog, GetComment, AddComment } from '../../service/BlogService'

import { GET_BLOG, BLOG_COMMENT, ADD_COMMENT} from '../type'

export const LoadBlogs = () => {
    return async (dispatch) => {
      try {
        const blogs = await GetBlog() 
        
        dispatch({
          type: GET_BLOG,
          payload: blogs
        })
  
      } catch (error) {
        throw error
      }
    }
  }

 


  export const CreateComment = (com) => {
    return async (dispatch) => {
      try {
       await AddComment(com) 
        
        dispatch({
          type: ADD_COMMENT,
          payload: com
        })
  
      } catch (error) {
        throw error
      }
    }
  }

  export const LoadComment = (comment) => ({
          type: BLOG_COMMENT,
          payload: comment
        })
  
    
  