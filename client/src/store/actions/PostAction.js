import {
    GetPosts, GetPostsById, NewPost, UpdatePost, DeletePost
} from '../../services/PostService'
import { GET_POSTS, GET_POSTS_BY_ID, NEW_POST, UPDATE_POST, DELETE_POST } from '../types'

export const LoadPosts = () => {
    return async (dispatch) => {
        try {
            const posts = await GetPosts()
            dispatch({
                type: GET_POSTS,
                payload: posts
            })
        } catch (error) {
            throw error
        }
    }
}

export const LoadPostsById = (id) => {
    return async (dispatch) => {
        try {
            const postsById = await GetPostsById(id)
            dispatch({
                type: GET_POSTS_BY_ID,
                payload: postsById
            })
        } catch (error) {
            throw error
        }
    }
}

export const LoadNewPost = (post) => {
    return async (dispatch) => {
        try {
            const newPost = await NewPost(post)
            dispatch({
                type: NEW_POST,
                payload: newPost
            })
        } catch (error) {
            throw error
        }
    }
}

export const LoadUpdatePost = (postToUpdate) => {
    return async (dispatch) => {
        try {
            const updatedPost = await UpdatePost(postToUpdate)
            dispatch({
                type: UPDATE_POST,
                payload: updatedPost
            })
        } catch (error) {
            throw error
        }
    }
}

export const LoadDeletePost = (postToDelete) => {
    return async (dispatch) => {
        try {
            const deletePost = await DeletePost(postToDelete)
            dispatch({
                type: DELETE_POST,
                payload: deletePost
            })
        } catch (error) {
            throw error
        }
    }
}

