import {
  ScreensPageElement,
  SectionHeader,
  Title,
  Filter,
  FilterBtn,
} from "./ScreensPage.Styled";
import sprite from "../../images/sprite.svg";
import { useRef, useState } from "react";
import FilterModal from '../../components/Modals/Filters/FilterModal'
import Columns from "../../components/Container/Column/Columns";
import { selectActiveDeskId, selectDesks } from "../../redux/desk/deskSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getDeskById } from "../../redux/desk/deskOperations";
import { DefaultScreen } from "../../components/DefaultScreen/DefaultScreen";
import { useEffect } from "react";
import desktop from "../../json/desktop.json" 

export const ScreensPage = () => {

  const filterModalRef = useRef(null);
  const [bgImg, setBgImg] = useState(null);
  
  const openFilterModal = () => {
    if (filterModalRef.current) {
      filterModalRef.current.openModal()
    }
  }
  const backgroundImg = useSelector(selectDesks);
  
  const dispatch = useDispatch();
  const idDesk = useSelector(selectActiveDeskId);

  useEffect(() => {
    backgroundImg.map(elem => {
    if (elem._id === idDesk) {
      desktop.map(ele => {
        if (ele.id === elem.background) {
          setBgImg(ele.url) 
        }
      });
    }
    return
  });
  console.log(bgImg);
  }, [idDesk])
  
  

 
    
    // const deskInfo = dispatch(getDeskById(idDesk));
    // console.log("Desk title", deskInfo);


  

  return (
    <ScreensPageElement>
      <SectionHeader>
        <Title>ownerDesk={idDesk} </Title>
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
      <img src={bgImg} width="100px" height="100px" />
    </ScreensPageElement>
  );
};
