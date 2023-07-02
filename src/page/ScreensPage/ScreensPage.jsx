import {
  ScreensPageElement,
  SectionHeader,
  Title,
  Filter,
  FilterBtn,
} from "./ScreensPage.Styled";
import sprite from "../../images/sprite.svg";
import { useRef } from "react";
import FilterModal from '../../components/Modals/Filters/FilterModal'
import Columns from "../../components/Container/Column/Columns";
import { selectActiveDeskId } from "../../redux/desk/deskSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getDeskById } from "../../redux/desk/deskOperations";

export const ScreensPage = () => {

  const filterModalRef = useRef(null);

  const openFilterModal = () => {
    if (filterModalRef.current) {
      filterModalRef.current.openModal()
    }
  }

  const dispatch = useDispatch();
  const idDesk = useSelector(selectActiveDeskId);

  const deskInfo = dispatch(getDeskById(idDesk));

  console.log("Desk title", deskInfo.title);

  return (
    <ScreensPageElement>
      <SectionHeader>
        <Title>ownerDesk={ idDesk}</Title>
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

      
      <Columns idDesk={ idDesk } />

      <FilterModal ref={filterModalRef} />
    </ScreensPageElement>
  );
};
