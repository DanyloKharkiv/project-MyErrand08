import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-right: 14px;
`;

export const Title = styled.p`
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;
  color: var(--themeTitle);
  cursor: pointer;
  :hover {
    color: var(--accentColor);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const List = styled.ul`
  position: absolute;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transform: translateY(${(props) => (props.isOpen ? '0' : '-10px')});
  transition: opacity 0.2s, transform 0.3s;
  pointer-events: ${(props) => (props.isOpen ? 'visible' : 'none')};

  display: flex;
  padding: 18px 44px 18px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--borderRadius8);
  background-color: var(--themeBgColor);
  box-shadow: 0px 4px 16px 0px var(--themeBoxShadow);

  gap: 8px;
  top: 19px;
  left: 0px;
  z-index: 999;
`;

export const Item = styled.li`
  cursor: pointer;
  color: var(--themeItem);
  transition: color 0.4s;
  :hover {
    color: var(--accentColor);
  }
`;