import React, { useState } from 'react'
import * as S from './styles'
import Modal from '../Modal'
import EditModalContent from './components/EditModalContent'
import { Post } from '../../types'
import {
  calcularTempoPassadoEmSegundos,
  converterParaMinutosHorasDias,
} from '../../utils/formattedTime'
import { useSelector } from 'react-redux'
import { useUsername } from '../../redux/userSlice'
import DeleteModalContent from './components/DeleteModalContent'

interface PostCardProps {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [modalType, setModalType] = useState<'delete' | 'edit' | null>(null)
  const username = useSelector(useUsername)

  const handleOpenModal = (type: 'delete' | 'edit') => {
    setModalType(type)
  }

  const handleCloseModal = () => {
    setModalType(null)
  }

  const modalContent = {
    delete: <DeleteModalContent postId={post.id} onClose={handleCloseModal} />,
    edit: <EditModalContent postCard={post} onClose={handleCloseModal} />,
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>{post.title}</S.Title>
        {username === post.username ? (
          <S.ConfigButton>
            <button onClick={() => handleOpenModal('delete')}>
              <img src="/trash.svg" alt="delete button" />
            </button>
            <button onClick={() => handleOpenModal('edit')}>
              <img src="/edit.svg" alt="edit button" />
            </button>
          </S.ConfigButton>
        ) : null}
      </S.Header>
      <S.Wrapper>
        <S.PostInfo>
          <p>@{post.username}</p>
          <span>
            {converterParaMinutosHorasDias(
              calcularTempoPassadoEmSegundos(post.created_datetime),
            )}
            &nbsp;ago
          </span>
        </S.PostInfo>
        <S.Content>{post.content}</S.Content>
      </S.Wrapper>

      {modalType && (
        <Modal onCloseOverlay={handleCloseModal}>
          {modalContent[modalType]}
        </Modal>
      )}
    </S.Container>
  )
}

export default PostCard
