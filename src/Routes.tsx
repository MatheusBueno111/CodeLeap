import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import { useSelector, useDispatch } from 'react-redux'
import { isLoggedIn, loginUser } from './redux/userSlice'
import PostContextProvider from './contexts/PostContext'

const PrivateRoute = () => {
  const isAuthenticated = useSelector(isLoggedIn)
  const dispatch = useDispatch()

  const userFromStorage = localStorage.getItem('user')
  if (userFromStorage && !isAuthenticated) {
    const user = JSON.parse(userFromStorage)
    dispatch(loginUser(user))
  }

  if (!isAuthenticated) {
    return <Navigate to="/signup" />
  }

  return (
    <>
      <Outlet />
    </>
  )
}

export const Router = createBrowserRouter([
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        path: '/',
        element: (
          <PostContextProvider>
            <Home />
          </PostContextProvider>
        ),
      },
    ],
  },
])
