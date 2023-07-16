import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2.4rem;
  border-radius: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors['gray-600']};

  p {
    font-size: 2.2rem;
    font-weight: 700;
  }
`

export const FormNewPost = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  span {
    color: ${({ theme }) => theme.colors.red};
    font-size: 1rem;
    font-weight: 700;
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

export const TextArea = styled.textarea`
  display: flex;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors['gray-700']};
  padding: 0.9rem 1.4rem;
  max-width: 704px;
  height: 74px;
  font-family: 'Roboto';

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-500']};
    font-family: 'Roboto';
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
