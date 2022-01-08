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

 


  export const CreateComment = (inputComment) => {
   
    return async (dispatch) => {
     
      try {
        const comment = await AddComment(inputComment) 
        
        dispatch({
          type: ADD_COMMENT,
          payload: comment
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
        
  
    
  