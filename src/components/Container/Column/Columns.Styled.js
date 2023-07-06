import styled from "styled-components";

export const ColumnsUl = styled.ul`
  display: flex;
  gap: 34px;

  height: calc(100vh - 268px);

  @media screen and (min-width: 320px) {
    margin-bottom: 94px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 122px;
    height: calc(100vh - 297px);
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 86px;
    height: calc(100vh - 228px);
  }
`;
