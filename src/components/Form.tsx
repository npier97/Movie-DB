import styled from '@emotion/styled';

const StyledForm = styled.form`
  display: grid;

  @media (min-width: 786px) {
    grid-template-columns: auto 1fr auto;
    grid-gap: 1rem;
    align-items: center;
  }
`;

export default StyledForm;
