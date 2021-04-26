import styled from '@emotion/styled';

interface IText {
  size: number;
}

const Text = styled.p<IText>(({ size }) => ({
  fontSize: size,
}));

export default Text;
