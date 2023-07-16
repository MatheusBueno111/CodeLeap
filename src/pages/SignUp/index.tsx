import React from 'react'
import * as S from './styles'

import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginUser } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const createUserFormSchema = z.object({
  username: z
    .string()
    .nonempty('Campo obrigatório')
    .min(3, 'At last 3 latters'),
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

const SignUp: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  })

  const username = watch('username')
  const isSubmitDisabled = !username

  const createNewUser = (data: CreateUserFormData) => {
    const newUser = {
      username: data.username,
    }
    dispatch(loginUser(newUser))
    localStorage.setItem('user', JSON.stringify(newUser))
    navigate('/')
  }

  return (
    <S.Container>
      <S.Title>Welcome to CodeLeap network!</S.Title>
      <S.Form onSubmit={handleSubmit(createNewUser)}>
        <label htmlFor="username">Please enter your username</label>
        <S.Input type="text" placeholder="John Doe" {...register('username')} />
        {errors.username && <span>{errors.username.message}</span>}

        <S.Button type="submit" disabled={isSubmitDisabled}>
          Entrar
        </S.Button>
      </S.Form>
    </S.Container>
  )
}

export default SignUp
