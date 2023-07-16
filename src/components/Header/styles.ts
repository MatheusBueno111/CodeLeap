import { styled } from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  max-width: 80rem;
  width: 100%;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 2.7rem 3.7rem;
`

export const Title = styled.h1`
  display: flex;
  color: ${({ theme }) => theme.colors.white};
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  span {
    align-self: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    font-weight: 700;
  }
`

export const Login = styled.div`
  align-self: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  font-weight: 700;
`

export const LogoutButton = styled.div`
  align-self: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
`
