import styled from '@emotion/styled';

const StyledForm = styled.form({
  display: 'grid',
  '@media (min-width: 786px)': {
    gridTemplateColumns: 'auto 1fr auto',
    gridGap: '1rem',
    alignItems: 'center',
  },
});

export default StyledForm;
