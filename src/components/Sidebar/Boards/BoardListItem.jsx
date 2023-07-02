import { useDispatch } from "react-redux"
import { deleteDesk, setActiveDeskId } from "../../../redux/desk/deskOperations";
import { BoardsItem, BtnsSVG, BtnsSVGBox, ProjectSVG, ProjectsBox } from "./Boards.Styled";
import sprite from '../../../images/sprite.svg'

export const DesksListItem = ({ _id, icon, title }) => {

  const dispatch = useDispatch();
    const handleDeleteDesk = deskId => {
            dispatch(deleteDesk(deskId));
  }
  

  
  const handleClickActiveDeskId = (deskId) => {
    dispatch(setActiveDeskId(deskId));
  };

  return (
      
        <BoardsItem>
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