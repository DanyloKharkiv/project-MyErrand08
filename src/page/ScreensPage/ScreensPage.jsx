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
import { useRef } from "react";
import FilterModal from '../../components/Modals/Filters/FilterModal'
import Columns from "../../components/Container/Column/Columns";

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
        <Title>Project office</Title>
        <Filter>
          <svg
            width="16"
            height="16"
            stroke="var(--filterTxt)"
            fill="var(--primaryBoardBg)"
          >
            <use href={sprite + `#icon-filter`}></use>
          </svg>
          <FilterBtn onClick={openFilterModal}>Filters</FilterBtn>
        </Filter>
      </SectionHeader>
      <Columns />
      <FilterModal ref={filterModalRef} />
    </ScreensPageElement>
  );
};
