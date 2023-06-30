import styled from 'styled-components';
import css from './theme.Styled.jsx';

 const styledDateDeadline = ({ theme }) => css`
  position: absolute;
  top: 0;
  left: 0;
  color: ${theme.textColors.accent};
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: -0.28px;
`;

export const StyledInput = styled.div`
  position: relative;
  opacity: 0;
  z-index: 20;
`;

export const Container = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const DateDeadline = styled.p`
  ${styledDateDeadline}
`;