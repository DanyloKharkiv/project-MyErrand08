import { useDispatch, useSelector } from "react-redux";
import filter from "./filter.module.css";
import {
  selectBackImg,
  selectRadio,
} from "../../../redux/filter/filterSelectors";
import { setBackImg, setRadio } from "../../../redux/filter/filterSlice";
import sprite from "../../../images/sprite.svg";
import icons from "../../../json/icon.json";

const Filter = ({ close }) => {
  const dispatch = useDispatch();
  const radio = useSelector(selectRadio);
  const backImg = useSelector(selectBackImg);

  const handleClick = ({ target }) => {
    const action = setRadio(target.name);
    dispatch(action);
  };
  const showClick = () => {
    dispatch(setRadio(""));
    dispatch(setBackImg(""));
  };
  const handleClose = () => {
    close();
  };
  const handleClickImg = ({ target }) => {
    const action = setBackImg(target.id);
    dispatch(action);
  };

  return (
    <div className={filter.modal}>
      <svg
        onClick={handleClose}
        className={filter.closeBtn}
        width="18"
        height="18"
        stroke="var(--addBtnText)"
      >
        <use href={sprite + "#icon-x"}></use>
      </svg>
      <h3 className={filter.title}>Filter</h3>
      <div className={filter.background}>
        <h3 className={filter.titleBackground}>Backgrounds</h3>
        <ul className={filter.list}>
          {icons.map(({ url, id }) => (
            <li className={filter.backgroundListItem} key={id}>
              <label htmlFor={id}>
                <img
                  className={backImg === `${id}` ? filter.imgOn : filter.imgOff}
                  src={url}
                  alt="img"
                  width="28"
                ></img>
                <input
                  onClick={handleClickImg}
                  className={filter.realRadio}
                  type="radio"
                  name="backgrounds"
                  id={id}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className={filter.labelColor}>
          <li>
            <h3 className={filter.labelColorTitle}>Label color</h3>
          </li>
          <li>
            <button
              className={
                radio === "" && backImg === ""
                  ? filter.btnShowOn
                  : filter.btnShow
              }
              onClick={showClick}
            >
              Show all
            </button>
          </li>
        </ul>
      </div>
      <div>
        <div className={filter.radioItem}>
          <label
            className={radio === "without" ? filter.labelOn : filter.labelOff}
            htmlFor="without"
          >
            <input
              onChange={handleClick}
              checked={radio === "without"}
              type="radio"
              id="without"
              name="without"
              value="without"
              className={filter.realRadio}
            />
            <span className={`${filter.customRadio} ${filter.without}`}></span>
            Without priority
          </label>
        </div>

        <div className={filter.radioItem}>
          <label
            className={radio === "low" ? filter.labelOn : filter.labelOff}
            htmlFor="low"
          >
            <input
              onChange={handleClick}
              checked={radio === "low"}
              type="radio"
              id="low"
              name="low"
              value="low"
              className={filter.realRadio}
            />
            <span className={`${filter.customRadio} ${filter.low}`}></span>
            Low
          </label>
        </div>
        <div className={filter.radioItem}>
          <label
            className={radio === "medium" ? filter.labelOn : filter.labelOff}
            htmlFor="medium"
          >
            <input
              onChange={handleClick}
              checked={radio === "medium"}
              type="radio"
              id="medium"
              name="medium"
              value="medium"
              className={filter.realRadio}
            />
            <span className={`${filter.customRadio} ${filter.medium}`}></span>
            Medium
          </label>
        </div>
        <div className={filter.radioItem}>
          <label
            className={radio === "high" ? filter.labelOn : filter.labelOff}
            htmlFor="high"
          >
            <input
              onChange={handleClick}
              checked={radio === "high"}
              type="radio"
              id="high"
              name="high"
              value="high"
              className={filter.realRadio}
            />
            <span className={`${filter.customRadio} ${filter.high}`}></span>
            High
          </label>
        </div>
      </div>
    </div>
  );
};
export default Filter;
