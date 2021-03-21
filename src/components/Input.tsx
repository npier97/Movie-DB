import styled from '@emotion/styled';

const Input = styled.input({
  fontSize: '1.6rem',
  padding: '0.5rem 2rem',
  lineHeight: '2.8rem',
  borderRadius: '20px',
  border: '1px solid #ddd',
  marginBottom: '1rem',
  '@media (min-width: 786px)': {
    marginBottom: 0,
  },
});

export default Input;
