import styled from '@emotion/styled';

const Button = styled.button({
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  color: 'white',
  padding: '1rem 2rem',
  border: '1px solid rgba(0, 0, 0, 0.75)',
  borderRadius: '20px',
  fontSize: '1.4rem',
  cursor: 'pointer',
  transition: 'background-color 250ms',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
});

export default Button;
