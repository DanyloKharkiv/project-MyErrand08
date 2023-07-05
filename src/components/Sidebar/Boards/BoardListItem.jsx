import { useDispatch, useSelector } from "react-redux";
import {
  changeActiveDeskById,
  deleteDesk,
  setActiveDeskId,
} from "../../../redux/desk/deskOperations";
import {
  BoardsItem,
  BtnsSVG,
  BtnsSVGBox,
  ProjectSVG,
  ProjectsBox,
} from "./Boards.Styled";
import sprite from "../../../images/sprite.svg";

import { useRef } from "react";
import EditBoardModal from "../../Modals/EditDeskModal/EditBoardModal";
// import { useSelect } from '@mui/base';
import { selectActiveDeskId } from "../../../redux/desk/deskSelectors";

export const DesksListItem = ({ _id, icon, title, background }) => {
  const dispatch = useDispatch();

  const handleDeleteDesk = (deskId) => {
    dispatch(deleteDesk(deskId));
  };

  const handleClickActiveDeskId = (deskId) => {
    dispatch(setActiveDeskId(deskId));
  };

  const handleClickChangeDeskById = (_id, title, icon, background) => {
    dispatch(changeActiveDeskById({ _id, title, icon, background }));
  };

  const EditBoardModalRef = useRef(null);

  const openEditBoardModal = () => {
    if (EditBoardModalRef.current) {
      EditBoardModalRef.current.openModal();
    }
  };

  const activeDeskId = useSelector(selectActiveDeskId);

  return (
    <BoardsItem
      isSelected={activeDeskId === _id}
      key={_id}
      onClick={() => handleClickActiveDeskId(_id)}
    >
      <ProjectsBox>
        <ProjectSVG width="18" height="18" stroke="var(--contrastColor)">
          <use href={sprite + `#${icon}`}></use>
        </ProjectSVG>
        <span>{title}</span>
      </ProjectsBox>
      <BtnsSVGBox isSelected={activeDeskId === _id}>
        <BtnsSVG isSelected={activeDeskId === _id}>
          <svg
            onClick={() => {
              handleClickChangeDeskById(_id, title, icon, background);

              openEditBoardModal();
            }}
            width="16"
            height="16"
            stroke="var(--myBoards)"
            fill="transparent"
            // fill="var(--sidebarColor)"
          >
            <use href={sprite + `#icon-Icon-pencil`}></use>
          </svg>
        </BtnsSVG>
        <BtnsSVG isSelected={activeDeskId === _id}>
          <svg
            onClick={() => handleDeleteDesk(_id)}
            width="16"
            height="16"
            fill="transparent"
            stroke="var(--myBoards)"
          >
            <use href={sprite + `#icon-trash-04`}></use>
          </svg>
        </BtnsSVG>
      </BtnsSVGBox>
      <EditBoardModal ref={EditBoardModalRef} />
    </BoardsItem>
  );
};
