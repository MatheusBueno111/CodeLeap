import React from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/userSlice'

interface HeaderProps {
  username: string
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    localStorage.removeItem('user')
    dispatch(logoutUser())
  }

  return (
    <S.Container>
      <S.Title>CodeLeap Network</S.Title>
      {username && (
        <S.Wrapper>
          <S.Login>Hi, {username}</S.Login>
          <span>|</span>
          <S.LogoutButton onClick={handleLogout}>Logout</S.LogoutButton>
        </S.Wrapper>
      )}
    </S.Container>
  )
}

export default Header
