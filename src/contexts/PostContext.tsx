import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { EditPost, Post } from '../types'
import { api } from '../services/api'
import { toast } from 'react-toastify'

// import { Container } from './styles';

interface PostContextType {
  posts: Post[]
  fetchPosts: () => Promise<void>
  removePost: (postId: number) => Promise<void>
  editPost: (postId: number, updatedData: EditPost) => Promise<void>
}

export const PostContext = createContext({} as PostContextType)

interface PostContextProviderProps {
  children: ReactNode
}

const PostContextProvider: React.FC<PostContextProviderProps> = ({
  children,
}) => {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = async () => {
    try {
      const response = await api.getPosts()
      const data = response.data.results

      setPosts(data)
    } catch (error) {
      alert('Algo deu errado, não foi possível buscar os posts')
      console.log(error)
    }
  }

  const removePost = async (postId: number) => {
    try {
      await api.deletePost(postId)
      toast.success('Post delete')
    } catch (error) {
      toast.error('Failed to delete the post.')
      console.log(error)
    }
  }

  const editPost = async (postId: number, updatedData: EditPost) => {
    try {
      await api.updatePost(postId, updatedData)
      toast.success('Post updated')
    } catch (error) {
      toast.error('Failed to edit the post.')
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <PostContext.Provider
      value={{
        posts,
        fetchPosts,
        removePost,
        editPost,
      }}
    >
      {children}
    </PostContext.Provider>
  )
}

export default PostContextProvider
