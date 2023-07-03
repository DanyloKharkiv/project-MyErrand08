import { useDispatch, useSelector } from "react-redux"
import { deleteDesk, setActiveDeskId } from "../../../redux/desk/deskOperations";
import { BoardsItem, BtnsSVG, BtnsSVGBox, ProjectSVG, ProjectsBox } from "./Boards.Styled";
import sprite from '../../../images/sprite.svg'
import { selectActiveDeskId } from "../../../redux/desk/deskSelectors";

export const DesksListItem = ({ _id, icon, title }) => {

  const dispatch = useDispatch();
    const handleDeleteDesk = deskId => {
            dispatch(deleteDesk(deskId));
  }
  
  const handleClickActiveDeskId = (deskId) => {
    dispatch(setActiveDeskId(deskId));
  };

  const idDesk = useSelector(selectActiveDeskId);

  const isActive = (_id === idDesk) ? "active" : "";
  
  return (
      
    <BoardsItem isActive>
            <ProjectsBox onClick={()=>handleClickActiveDeskId(_id)}>
                <ProjectSVG
                width="18"
                height="18"
                stroke="var(--contrastColor)">
                <use href={sprite + `#${icon}`}></use>
                </ProjectSVG>
                <span>{title}</span>
            </ProjectsBox>
            <BtnsSVGBox>
                <BtnsSVG>
                    <svg
                width="16"
                height="16"
                stroke="var(--myBoards)"
              >
                <use href={sprite + `#icon-Icon-pencil`}></use>
              </svg>
                </BtnsSVG>
                <BtnsSVG>
                    <svg
                        onClick={()=>handleDeleteDesk(_id)}
                width="16"
                height="16"
                fill="var(--prOfBg)"
                stroke="var(--myBoards)"
              >
                <use href={sprite + `#icon-trash-04`}></use>
              </svg>
                </BtnsSVG>
            </BtnsSVGBox>
        </BoardsItem>
    )
}