import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors['gray-500']};
  border-radius: 1.6rem;
  justify-content: center;
  padding: 2.4rem;
  gap: 2.4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2.2rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  span {
    color: ${({ theme }) => theme.colors.red};
    font-size: 1.2rem;
  }
`

export const Input = styled.input`
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors['gray-700']};
  padding: 0.9rem 1.4rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-500']};
    font-family: Roboto;
    font-size: 1.4rem;
    font-weight: 400;
  }
`

export const Button = styled.button`
  max-width: 11.1rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  border-radius: 0.8rem;
  padding: 0.7rem 3rem;
  align-self: end;
  margin-top: 0.8rem;

  &:not(:disabled) {
    background: ${({ theme }) => theme.colors.blue};

    &:hover {
      opacity: 0.9;
    }
  }

  &:disabled {
    background: ${({ theme }) => theme.colors['gray-500']};
    cursor: not-allowed;

    &:hover {
      opacity: 0.9;
    }
  }
`
