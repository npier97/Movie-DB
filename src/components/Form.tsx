import styled from '@emotion/styled';
import { CSS_ALIGN, CSS_DISPLAY } from '../utils/theme';

const StyledForm = styled.form({
  display: CSS_DISPLAY.GRID,
  '@media (min-width: 786px)': {
    gridTemplateColumns: 'auto 1fr auto',
    gridGap: '1rem',
    alignItems: CSS_ALIGN.CENTER,
  },
});

export default StyledForm;
