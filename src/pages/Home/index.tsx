import React, { useContext } from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import CreateNewPost from '../../components/CreateNewPost'
import PostList from './components/PostList'
import { useSelector } from 'react-redux'
import { useUsername } from '../../redux/userSlice'
import { PostContext } from '../../contexts/PostContext'

const Home: React.FC = () => {
  const username = useSelector(useUsername)

  const { posts } = useContext(PostContext)

  return (
    <S.Container>
      <Header username={username} />
      <S.Main>
        <CreateNewPost />
        <PostList posts={posts} />
      </S.Main>
    </S.Container>
  )
}

export default Home
