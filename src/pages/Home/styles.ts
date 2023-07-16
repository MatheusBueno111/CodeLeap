import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80rem;
  width: 100%;
  padding: 2.4rem;
  gap: 2.4rem;
  background-color: ${({ theme }) => theme.colors.white};
`
