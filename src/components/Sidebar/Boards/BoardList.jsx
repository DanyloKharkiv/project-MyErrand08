import { useDispatch, useSelector } from "react-redux";
import { selectDesks, selectVisibleDesks } from "../../../redux/desk/deskSelectors";
import { selectBackImg } from "../../../redux/filter/filterSelectors";
import { useEffect, useRef } from "react";
import { fetchDesks } from "../../../redux/desk/deskOperations";
import { DesksListItem } from "./BoardListItem";
import { BoardsList } from "./Boards.Styled";


import 'overlayscrollbars/overlayscrollbars.css';
import { useMatchMedia } from "../../../hooks/use-match-media";
import { useScrollbar } from "../../../hooks/use-scrollbar";


const DesksList = () => {
    const dispatch = useDispatch();
    const visibleDesks = useSelector(selectVisibleDesks);
    const desks = useSelector(selectDesks);
    const filterValue = useSelector(selectBackImg);
  
    const desksWrapper = useRef(null);
  
    useEffect(() => {
        dispatch(fetchDesks())
    }, [dispatch]);
  
  
    const { isMobile } = useMatchMedia();
    const hasScroll = !isMobile && visibleDesks.length > 2;
    useScrollbar(desksWrapper, hasScroll);

    return (
        <BoardsList style={{ marginTop: '1rem', height: hasScroll ? '140px' : 'auto', minHeight: '140px' }} ref={desksWrapper}>
            {visibleDesks.length > 0 ? (
        visibleDesks.map(desk => (
          <DesksListItem key={desk._id} {...desk}/>
        ))
      ) : filterValue && desks ? (
        <div></div>
      ) : (
        <div></div>
      )}
        </BoardsList>
    )





}

export default DesksList;