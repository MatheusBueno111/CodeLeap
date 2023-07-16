import React from 'react'
import { Post } from '../../../../types'
import PostCard from '../../../../components/PostCard'
import Loader from '../../../../components/Loader'

interface PostListProps {
  posts: Post[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => {
          return <PostCard key={post.id} post={post} />
        })
      ) : (
        <Loader />
      )}
    </>
  )
}

export default PostList
