import React, { useContext } from 'react'
import * as S from './styles'
import { Post } from '../../../../types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { PostContext } from '../../../../contexts/PostContext'

interface EditModalContentProps {
  postCard: Post
  onClose: () => void
}

const editPostFormSchema = z.object({
  title: z
    .string()
    .nonempty('This field is required')
    .min(1, 'At least 1 letters'),
  content: z
    .string()
    .nonempty('This field is required')
    .min(1, 'At least 1 letters'),
})

type editPostFormSchemaData = z.infer<typeof editPostFormSchema>

const EditModalContent: React.FC<EditModalContentProps> = ({
  postCard,
  onClose,
}) => {
  const { editPost, fetchPosts } = useContext(PostContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<editPostFormSchemaData>({
    resolver: zodResolver(editPostFormSchema),
    defaultValues: {
      title: postCard.title,
      content: postCard.content,
    },
  })

  const editPostCard = async (data: editPostFormSchemaData) => {
    try {
      const { title, content } = getValues()
      if (title === postCard.title && content === postCard.content) {
        onClose()
        return
      }
      const updatedPostData = {
        title: data.title,
        content: data.content,
      }
      console.log('updatedPostData', updatedPostData)
      Promise.resolve(editPost(postCard.id, updatedPostData)).then(() => {
        fetchPosts()
      })
      onClose()
    } catch (error) {
      console.error('Error updating post:', error)
    }
  }

  return (
    <S.Container>
      <p>What&apos;s on your mind?</p>
      <S.FormNewPost onSubmit={handleSubmit(editPostCard)}>
        <S.Wrapper>
          <label htmlFor="title">Title</label>
          <S.Input type="text" placeholder="John Doe" {...register('title')} />
          {errors.title && <span>{errors.title.message}</span>}
        </S.Wrapper>

        <S.Wrapper>
          <label htmlFor="content">Content</label>
          <S.TextArea placeholder="Content here" {...register('content')} />
          {errors.content && <span>{errors.content.message}</span>}
        </S.Wrapper>

        <S.Buttons>
          <S.Cancel onClick={onClose}>Cancel</S.Cancel>
          <S.Save type="submit">Save</S.Save>
        </S.Buttons>
      </S.FormNewPost>
    </S.Container>
  )
}

export default EditModalContent
