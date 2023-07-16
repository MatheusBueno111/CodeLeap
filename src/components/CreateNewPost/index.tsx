import React, { useContext } from 'react'
import * as S from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../services/api'
import { useSelector } from 'react-redux'
import { useUsername } from '../../redux/userSlice'
import { PostContext } from '../../contexts/PostContext'
import { toast } from 'react-toastify'

const createNewPostFormSchema = z.object({
  title: z
    .string()
    .nonempty('This field is required')
    .min(1, 'At least 1 letters'),
  content: z
    .string()
    .nonempty('This field is required')
    .min(1, 'At least 1 letters'),
})

type CreateNewPostFormData = z.infer<typeof createNewPostFormSchema>

const CreateNewPost: React.FC = () => {
  const username = useSelector(useUsername)
  const { fetchPosts } = useContext(PostContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<CreateNewPostFormData>({
    resolver: zodResolver(createNewPostFormSchema),
  })

  const title = watch('title')
  const content = watch('content')
  const isSubmitDisabled = !title || !content

  const createNewPost = async (data: CreateNewPostFormData) => {
    try {
      const newPostData = {
        username,
        title: data.title,
        content: data.content,
      }
      console.log('newPostData', newPostData)
      await api.newPost(newPostData)
      toast.success('New Post')
      fetchPosts(0)
      reset()
    } catch (error) {
      toast.error('Error creating post')
      console.error('Error creating post:', error)
    }
  }

  return (
    <S.Container>
      <p>What&apos;s on your mind?</p>
      <S.FormNewPost onSubmit={handleSubmit(createNewPost)}>
        <S.Wrapper>
          <label htmlFor="title">Title</label>
          <S.Input type="text" placeholder="John Doe" {...register('title')} />
          {errors.title && <span>{errors.title.message}</span>}
        </S.Wrapper>

        <S.Wrapper>
          <label htmlFor="content">Content</label>
          <S.TextArea {...register('content')} placeholder="Content here" />
          {errors.content && <span>{errors.content.message}</span>}
        </S.Wrapper>

        <S.Button type="submit" disabled={isSubmitDisabled}>
          Create
        </S.Button>
      </S.FormNewPost>
    </S.Container>
  )
}

export default CreateNewPost
