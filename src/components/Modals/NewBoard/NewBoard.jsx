import css from '../NewBoard/css.module.css'
import sprite from '../../../images/sprite.svg'
import { useState } from 'react'
const NewBoard = () => {

    const [icons, setIcons] = useState('');

    const handleClick = ({ target }) => {
        console.log(target.id);
      setIcons(target.id);
    }

    return (
        <div className={css.modal}>
            <h3 className={css.title}>New Board</h3>
            <form>
                <input className={css.inputText} type="text" name="" id="" placeholder='Title' />
                <h3 className={css.iconsTitle}>Icons</h3>
                <ul className={css.inputList}>
                    <li>
                        <label htmlFor="icon_1">
                    <svg className={(icons==='icon_1')?css.svgOn:css.svgOff} width='18' height='18'>
                        <use href={sprite + '#icon-loading-03'}></use>
                    </svg>
                    <input onClick={handleClick} className={css.realRadio} type="radio" name="icons" id="icon_1" />
                </label>
                    </li>
                    <li>
                        <label htmlFor="icon_2">
                    <svg className={(icons==='icon_2')?css.svgOn:css.svgOff} width='18' height='18'>
                        <use href={sprite + '#icon-star-04'}></use>
                    </svg>
                    <input onClick={handleClick} className={css.realRadio} type="radio" name="icons" id="icon_2" />
                </label>
                    </li>
                    <li>
                        <label htmlFor="icon_3">
                    <svg className={(icons==='icon_3')?css.svgOn:css.svgOff} width='18' height='18'>
                        <use href={sprite + '#icon-help-circle'}></use>
                    </svg>
                    <input onClick={handleClick} className={css.realRadio} type="radio" name="icons" id="icon_3" />
                </label>
                    </li>
                    <li>
                        <label htmlFor="icon_4">
                    <svg className={(icons==='icon_4')?css.svgOn:css.svgOff} width='18' height='18'>
                        <use href={sprite + '#icon-hexagon-01'}></use>
                    </svg>
                    <input onClick={handleClick} className={css.realRadio} type="radio" name="icons" id="icon_4" />
                </label>
                    </li>
                    <li>
                        <label htmlFor="icon_5">
                    <svg className={(icons==='icon_5')?css.svgOn:css.svgOff} width='18' height='18'>
                        <use href={sprite + '#icon-star-04'}></use>
                    </svg>
                    <input onClick={handleClick} className={css.realRadio} type="radio" name="icons" id="icon_5" />
                </label>
                    </li>
                    <li>
                        <label htmlFor="icon_6">
                    <svg className={(icons==='icon_6')?css.svgOn:css.svgOff} width='18' height='18'>
                        <use href={sprite + '#icon-lightning-02'}></use>
                    </svg>
                    <input onClick={handleClick} className={css.realRadio} type="radio" name="icons" id="icon_6" />
                </label>
                    </li>
                    <li>
                        <label htmlFor="icon_7">
                    <svg className={(icons==='icon_7')?css.svgOn:css.svgOff} width='18' height='18'>
                        <use href={sprite + '#icon-colors'}></use>
                    </svg>
                    <input onClick={handleClick} className={css.realRadio} type="radio" name="icons" id="icon_7" />
                </label>
                    </li>
                    <li>
                        <label htmlFor="icon_8">
                    <svg className={(icons==='icon_8')?css.svgOn:css.svgOff} width='18' height='18'>
                        <use href={sprite + '#icon-container'}></use>
                    </svg>
                    <input onClick={handleClick} className={css.realRadio} type="radio" name="icons" id="icon_8" />
                </label>
                    </li>
                </ul>
                <h3 className={css.iconsTitle}>Background</h3>
                <ul className={css.backgroundList}>
                    <li className={css.backgroundItem}></li>
                    <li className={css.backgroundItem}></li>
                    <li className={css.backgroundItem}></li>
                    <li className={css.backgroundItem}></li>
                    <li className={css.backgroundItem}></li>
                    <li className={css.backgroundItem}></li>
                    <li className={css.backgroundItem}></li>
                    <li className={css.backgroundItem}></li>
                    <li className={css.backgroundItem}></li>
                    <li className={css.backgroundItem}></li>
                    <li className={css.backgroundItem}></li>
                    <li className={css.backgroundItem}></li>
                    <li className={css.backgroundItem}></li>
                    <li className={css.backgroundItem}></li>
                    <li className={css.backgroundItem}></li>
                    <li className={css.backgroundItem}></li>
                </ul>
                <button className={css.btn}>Create</button>


            </form>

        </div>
    )
}

export default NewBoard;