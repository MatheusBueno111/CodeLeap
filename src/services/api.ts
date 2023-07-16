import axios from 'axios'
import { EditPost, newPost } from '../types'

export const api = {
  newPost: (newPostData: newPost) =>
    axios.post('https://dev.codeleap.co.uk/careers/', newPostData),
  getPosts: () => axios.get('https://dev.codeleap.co.uk/careers/'),
  deletePost: (postId: number) =>
    axios.delete(`https://dev.codeleap.co.uk/careers/${postId}/`),
  updatePost: (postId: number, updatedData: EditPost) => {
    axios.patch(`https://dev.codeleap.co.uk/careers/${postId}/`, updatedData)
  },
}
