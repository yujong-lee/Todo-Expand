import styled from '@emotion/styled';

import { original, highlight } from '../fixture/color';

type ButtonProps = {
  isSelected: boolean
};

const TitleButton = styled.button<ButtonProps>(({ isSelected }) => ({
  border: 0,
  color: (isSelected) ? highlight : original,
  textDecoration: 'none',
  fontSize: '1.5em',
  background: 'transparent',
  marginBottom: 8,
  '&:hover': {
    fontWeight: 'bold',
  },
}));

export default TitleButton;
