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
import { useSelector } from "react-redux";

export const ScreensPage = () => {

  const filterModalRef = useRef(null);

  const openFilterModal = () => {
    if (filterModalRef.current) {
      filterModalRef.current.openModal()
    }
  }

  const idDesk = useSelector(selectActiveDeskId);

  return (
    <ScreensPageElement>
      <SectionHeader>
        <Title>Project office { idDesk}</Title>
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

      
{/* {dashboards && dashboards.length > 0 ? <ProjectOffice /> : <DefaultScreen />}  */}

      <Columns idDesk={ idDesk } />

      <FilterModal ref={filterModalRef} />
    </ScreensPageElement>
  );
};
