import { useDispatch } from 'react-redux';
import {
  changeActiveDeskById,
  deleteDesk,
  setActiveDeskId,
} from '../../../redux/desk/deskOperations';
import { BoardsItem, BtnsSVG, BtnsSVGBox, ProjectSVG, ProjectsBox } from './Boards.Styled';
import sprite from '../../../images/sprite.svg';

import { useRef } from 'react';
import EditBoardModal from '../../Modals/EditDeskModal/EditBoardModal';

export const DesksListItem = ({ _id, icon, title, background }) => {
  const dispatch = useDispatch();

  const handleDeleteDesk = deskId => {
    dispatch(deleteDesk(deskId));
  };

  const handleClickActiveDeskId = deskId => {
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

  return (
    <BoardsItem>
      <ProjectsBox onClick={() => handleClickActiveDeskId(_id)}>
        <ProjectSVG width="18" height="18" stroke="var(--contrastColor)">
          <use href={sprite + `#${icon}`}></use>
        </ProjectSVG>
        <span>{title}</span>
      </ProjectsBox>
      <BtnsSVGBox>
        <BtnsSVG>
          <svg
            onClick={() => {
              handleClickChangeDeskById(_id, title, icon, background);

              openEditBoardModal();
            }}
            width="16"
            height="16"
            stroke="var(--myBoards)"
          >
            <use href={sprite + `#icon-Icon-pencil`}></use>
          </svg>
        </BtnsSVG>
        <BtnsSVG>
          <svg
            onClick={() => handleDeleteDesk(_id)}
            width="16"
            height="16"
            fill="var(--prOfBg)"
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
