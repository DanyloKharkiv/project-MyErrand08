import {
  ScreensPageElement,
  SectionHeader,
  AddBtn,
} from "./ScreensPage.Styled";
export const ScreensPage = () => {
  return (
    <ScreensPageElement>
      <SectionHeader>
        <h1>Project office</h1>
        <a href="">Filters</a>
      </SectionHeader>
      <AddBtn>
        <button>+</button>
        <p>Add another column</p>
      </AddBtn>
    </ScreensPageElement>
  );
};
