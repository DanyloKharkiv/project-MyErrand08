import {
  ScreensPageElement,
  SectionHeader,
  AddBtn,
} from "./ScreensPage.Styled";
import FilterModal from "../../components/Modals/Filters/FilterModal";
import { useRef } from "react";
export const ScreensPage = () => {

  const filterModalRef = useRef(null);

  const openFilterModal = () => {
    if (filterModalRef.current) {
      filterModalRef.current.openModal()
    }
  }
  return (
    <ScreensPageElement>
      <SectionHeader>
        <h1>Project office</h1>
        <button type="button" onClick={openFilterModal} >Filters</button>
      </SectionHeader>
      <AddBtn>
        <button>+</button>
        <p>Add another column</p>
      </AddBtn>
      <FilterModal ref={filterModalRef} />
    </ScreensPageElement>
  );
};
