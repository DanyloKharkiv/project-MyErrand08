import { useDispatch, useSelector } from "react-redux";
import { selectDesks, selectVisibleDesks } from "../../../redux/desk/deskSelectors";
import { selectBackImg } from "../../../redux/filter/filterSelectors";
import { useEffect } from "react";
import { fetchDesks } from "../../../redux/desk/deskOperations";
import { DesksListItem } from "./BoardListItem";
import { BoardsList } from "./Boards.Styled";

const DesksList = () => {
    const dispatch = useDispatch();
    const visibleDesks = useSelector(selectVisibleDesks);
    const desks = useSelector(selectDesks);
    const filterValue = useSelector(selectBackImg);
  

    useEffect(() => {
        dispatch(fetchDesks())
    }, [dispatch]);
  
  

    return (
        <BoardsList>
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