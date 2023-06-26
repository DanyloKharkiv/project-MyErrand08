import {
  ScreensPageElement,
  SectionHeader,
  AddBtnBox,
  Title,
  Filter,
  FilterBtn,
  AddBtnText,
  AddBtn,
} from "./ScreensPage.Styled";
import sprite from "../../images/sprite.svg";

export const ScreensPage = () => {
  return (
    <ScreensPageElement>
      <SectionHeader>
        <Title>Project office</Title>
        <Filter>
          <svg
            width="16"
            height="16"
            stroke="rgba(255,255,255, 0.8)"
            fill="#1F1F1F"
          >
            <use href={sprite + `#icon-filter`}></use>
          </svg>
          <FilterBtn>Filters</FilterBtn>
        </Filter>
      </SectionHeader>
      <AddBtnBox>
        <AddBtn>+</AddBtn>
        <AddBtnText>Add another column</AddBtnText>
      </AddBtnBox>
    </ScreensPageElement>
  );
};
