import {
  ScreensPageElement,
  SectionHeader,
  Title,
  Filter,
  FilterBtn,
} from "./ScreensPage.Styled";
import sprite from "../../images/sprite.svg";
import { useRef, useState } from "react";
import FilterModal from "../../components/Modals/Filters/FilterModal";
import Columns from "../../components/Container/Column/Columns";
import {
  selectActiveDeskId,
  selectDesks,
} from "../../redux/desk/deskSelectors";
import { useSelector } from "react-redux";
import { DefaultScreen } from "../../components/DefaultScreen/DefaultScreen";
import { useEffect } from "react";
import desktop from "../../json/desktop.json";

export const ScreensPage = () => {
  const filterModalRef = useRef(null);
  const [bgImg, setBgImg] = useState(null);

  const openFilterModal = () => {
    if (filterModalRef.current) {
      filterModalRef.current.openModal();
    }
  };
  const backgroundImg = useSelector(selectDesks);

  const idDesk = useSelector(selectActiveDeskId);

  const allDesks = useSelector(selectDesks);

  useEffect(() => {
    backgroundImg.map((elem) => {
      if (elem._id === idDesk) {
        desktop.map((ele) => {
          if (elem.background === "id-0") {
            setBgImg(undefined);
          }
          if (ele.id === elem.background) {
            setBgImg(ele.url);
          }
          return null;
        });
      }
      return null;
    });
  }, [idDesk, backgroundImg]);

  return (
    <ScreensPageElement
      style={{ backgroundImage: bgImg ? `url(${bgImg})` : "none" }}
    >
      <SectionHeader>
        <Title>
          {idDesk && (
            <div>
              {allDesks.map((desk) => (desk._id === idDesk ? desk.title : ""))}
            </div>
          )}
        </Title>
        <Filter>
          <svg
            width="16"
            height="16"
            stroke="var(--filterTxt)"
            fill="transparent"
          >
            <use href={sprite + `#icon-filter`}></use>
          </svg>
          <FilterBtn onClick={openFilterModal}>Filters</FilterBtn>
        </Filter>
      </SectionHeader>

      {allDesks.length === 0 && <DefaultScreen />}
      {allDesks.length > 0 && !idDesk && <p>Please, select a Board!</p>}
      {idDesk && <Columns idDesk={idDesk} />}

      <FilterModal ref={filterModalRef} />
    </ScreensPageElement>
  );
};
