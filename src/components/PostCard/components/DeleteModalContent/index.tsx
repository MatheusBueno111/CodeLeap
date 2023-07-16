import React, { useContext } from 'react'
import * as S from './styles'

import { PostContext } from '../../../../contexts/PostContext'

interface DeleteModalContentProps {
  postId: number
  onClose: () => void
}

const DeleteModalContent: React.FC<DeleteModalContentProps> = ({
  postId,
  onClose,
}) => {
  const { removePost, fetchPosts } = useContext(PostContext)

  const onDeletePost = async (id: number) => {
    Promise.resolve(removePost(id)).then(() => {
      fetchPosts()
    })
    onClose()
  }

  return (
    <S.Container>
      <p>Are you sure you want to delete this item?</p>
      <S.Buttons>
        <S.Cancel onClick={onClose}>Cancel</S.Cancel>
        <S.Delete onClick={() => onDeletePost(postId)}>Delete</S.Delete>
      </S.Buttons>
    </S.Container>
  )
}

export default DeleteModalContent
