import css from '../NewBoard/css.module.css';
import sprite from '../../../images/sprite.svg';
import { useState } from 'react';
import backimg from '../../../json/icon.json';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeDeskNameById,
  changeDeskIconById,
  changeDeskBGById,
} from '../../../redux/desk/deskOperations';

import { selectChangeDeskId, selectChangeDeskTitle } from '../../../redux/desk/deskSelectors';

const EditBoard = ({ close }) => {
  const dispatch = useDispatch();

  const deskId = useSelector(selectChangeDeskId);
  const oldDeskTitle = useSelector(selectChangeDeskTitle);


  const [title, setTitle] = useState('');
  const [icons, setIcons] = useState('');
  const [backImg, setBackImg] = useState('');

  const handleClose = () => {
    close();
  };
  const onFormChange = e => {
    const { name, value, id } = e.target;

    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'icons':
        setIcons(id);
        break;
      case 'backgrounds':
        setBackImg(id);
        break;
      default:
        throw new Error('There has been a mistake. Try again, please.');
    }
  };
  const onFormSubmit = e => {
    e.preventDefault();

    if (title !== '') {
      const newTitle = { _id: deskId, title: title };
      dispatch(changeDeskNameById(newTitle));
    }

    if (icons !== '') {
      const newIcon = { _id: deskId, icon: icons };
      dispatch(changeDeskIconById(newIcon));
    }

    if (backImg !== '') {
      const newbackImg = { _id: deskId, background: backImg };
      dispatch(changeDeskBGById(newbackImg));
    }

    setTitle('');
    setIcons('');
    setBackImg('');
    close();
  };

  return (
    <div className={css.modal}>
      <svg onClick={handleClose} className={css.closeBtn} width="18" height="18">
        <use href={sprite + '#icon-x'}></use>
      </svg>
      <h3 className={css.title}>Enter a new board name:</h3>
      <form onSubmit={onFormSubmit}>
        <input
          onChange={onFormChange}
          className={css.inputText}
          value={title}
          type="text"
          name="title"
          id="title"
          placeholder={oldDeskTitle}
        />
        <h3 className={css.iconsTitle}>Choose an icon:</h3>
        <ul className={css.inputList}>
          <li>
            <label htmlFor="icon_1">
              <svg
                className={icons === 'icon_1' ? css.svgOn : css.svgOff}
                width="18"
                height="18"
                fill="none"
                stroke="var(--filterModalText)"
              >
                <use href={sprite + '#icon_1'}></use>
              </svg>
              <input
                onChange={onFormChange}
                className={css.realRadio}
                type="radio"
                name="icons"
                id="icon_1"
              />
            </label>
          </li>
          <li>
            <label htmlFor="icon_2">
              <svg
                className={icons === 'icon_2' ? css.svgOn : css.svgOff}
                width="18"
                height="18"
                stroke="var(--filterModalText)"
              >
                <use href={sprite + '#icon_2'}></use>
              </svg>
              <input
                onChange={onFormChange}
                className={css.realRadio}
                type="radio"
                name="icons"
                id="icon_2"
              />
            </label>
          </li>
          <li>
            <label htmlFor="icon_3">
              <svg
                className={icons === 'icon_3' ? css.svgOn : css.svgOff}
                width="18"
                height="18"
                stroke="var(--filterModalText)"
              >
                <use href={sprite + '#icon_3'}></use>
              </svg>
              <input
                onChange={onFormChange}
                className={css.realRadio}
                type="radio"
                name="icons"
                id="icon_3"
              />
            </label>
          </li>
          <li>
            <label htmlFor="icon_4">
              <svg
                className={icons === 'icon_4' ? css.svgOn : css.svgOff}
                width="18"
                height="18"
                stroke="var(--filterModalText)"
              >
                <use href={sprite + '#icon_4'}></use>
              </svg>
              <input
                onChange={onFormChange}
                className={css.realRadio}
                type="radio"
                name="icons"
                id="icon_4"
              />
            </label>
          </li>
          <li>
            <label htmlFor="icon_5">
              <svg
                className={icons === 'icon_5' ? css.svgOn : css.svgOff}
                width="18"
                height="18"
                stroke="var(--filterModalText)"
              >
                <use href={sprite + '#icon_5'}></use>
              </svg>
              <input
                onChange={onFormChange}
                className={css.realRadio}
                type="radio"
                name="icons"
                id="icon_5"
              />
            </label>
          </li>
          <li>
            <label htmlFor="icon_6">
              <svg
                className={icons === 'icon_6' ? css.svgOn : css.svgOff}
                width="18"
                height="18"
                stroke="var(--filterModalText)"
              >
                <use href={sprite + '#icon_6'}></use>
              </svg>
              <input
                onChange={onFormChange}
                className={css.realRadio}
                type="radio"
                name="icons"
                id="icon_6"
              />
            </label>
          </li>
          <li>
            <label htmlFor="icon_7">
              <svg
                className={icons === 'icon_7' ? css.svgOn : css.svgOff}
                width="18"
                height="18"
                stroke="var(--filterModalText)"
              >
                <use href={sprite + '#icon_7'}></use>
              </svg>
              <input
                onChange={onFormChange}
                className={css.realRadio}
                type="radio"
                name="icons"
                id="icon_7"
              />
            </label>
          </li>
          <li>
            <label htmlFor="icon_8">
              <svg
                className={icons === 'icon_8' ? css.svgOn : css.svgOff}
                width="18"
                height="18"
                stroke="var(--filterModalText)"
              >
                <use href={sprite + '#icon_8'}></use>
              </svg>
              <input
                onChange={onFormChange}
                className={css.realRadio}
                type="radio"
                name="icons"
                id="icon_8"
              />
            </label>
          </li>
        </ul>
        <h3 className={css.iconsTitle}>Choose a background:</h3>
        <ul className={css.backgroundList}>
          {backimg.map(({ url, id }) => (
            <li className={css.backgroundListItem} key={id}>
              <label htmlFor={id}>
                <img
                  className={backImg === `${id}` ? css.imgOn : css.imgOff}
                  src={url}
                  alt="img"
                  width="28"
                ></img>
                <input
                  onChange={onFormChange}
                  className={css.realRadio}
                  type="radio"
                  name="backgrounds"
                  id={id}
                />
              </label>
            </li>
          ))}
        </ul>
        <button className={css.btn}>
        <div  className={css.div}>
                    <div  className={css.span}>
                        <svg width="20" height="20" stroke="var(--addBtnText)">
                  <use href={sprite + `#icon-plus`}></use>
                </svg>
                </div>
          Edit
          </div>
          </button>
      </form>
    </div>
  );
};

export default EditBoard;
