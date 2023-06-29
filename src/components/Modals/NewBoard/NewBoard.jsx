import css from '../NewBoard/css.module.css'
import sprite from '../../../images/sprite.svg'
import { useState } from 'react'
import backimg from '../../../json/icon.json';


const NewBoard = ({close}) => {

    const [icons, setIcons] = useState('');
    const [backImg, setBackImg] = useState('id-0');

    const handleClickIcons = ({ target }) => {
      setIcons(target.id);
    }
    const handleClickImg = ({ target }) => {
        setBackImg(target.id);
    }
    const handleClose = () => {
        close()
    }

    return (
        <div className={css.modal}>
            <svg onClick={handleClose} className={css.closeBtn} width="18" height="18">
        <use  href = {sprite + '#icon-x'}></use>
        </svg>
            <h3 className={css.title}>New Board</h3>
            <form>
                <input className={css.inputText} type="text" name="title" id="title" placeholder='Title' />
                <h3 className={css.iconsTitle}>Icons</h3>
                <ul className={css.inputList}>
                    
                    <li>
                        <label htmlFor="icon_1">
                    <svg className={(icons==='icon_1')?css.svgOn:css.svgOff} width='18' height='18'>
                        <use href={sprite + '#icon-loading-03'}></use>
                    </svg>
                    <input onClick={handleClickIcons} className={css.realRadio} type="radio" name="icons" id="icon_1" />
                </label>
                    </li>
                    <li>
                        <label htmlFor="icon_2">
                    <svg className={(icons==='icon_2')?css.svgOn:css.svgOff} width='18' height='18'>
                        <use href={sprite + '#icon-star-04'}></use>
                    </svg>
                    <input onClick={handleClickIcons} className={css.realRadio} type="radio" name="icons" id="icon_2" />
                </label>
                    </li>
                    <li>
                        <label htmlFor="icon_3">
                    <svg className={(icons==='icon_3')?css.svgOn:css.svgOff} width='18' height='18'>
                        <use href={sprite + '#icon-help-circle'}></use>
                    </svg>
                    <input onClick={handleClickIcons} className={css.realRadio} type="radio" name="icons" id="icon_3" />
                </label>
                    </li>
                    <li>
                        <label htmlFor="icon_4">
                    <svg className={(icons==='icon_4')?css.svgOn:css.svgOff} width='18' height='18'>
                        <use href={sprite + '#icon-hexagon-01'}></use>
                    </svg>
                    <input onClick={handleClickIcons} className={css.realRadio} type="radio" name="icons" id="icon_4" />
                </label>
                    </li>
                    <li>
                        <label htmlFor="icon_5">
                    <svg className={(icons==='icon_5')?css.svgOn:css.svgOff} width='18' height='18'>
                        <use href={sprite + '#icon-star-04'}></use>
                    </svg>
                    <input onClick={handleClickIcons} className={css.realRadio} type="radio" name="icons" id="icon_5" />
                </label>
                    </li>
                    <li>
                        <label htmlFor="icon_6">
                    <svg className={(icons==='icon_6')?css.svgOn:css.svgOff} width='18' height='18'>
                        <use href={sprite + '#icon-lightning-02'}></use>
                    </svg>
                    <input onClick={handleClickIcons} className={css.realRadio} type="radio" name="icons" id="icon_6" />
                </label>
                    </li>
                    <li>
                        <label htmlFor="icon_7">
                    <svg className={(icons==='icon_7')?css.svgOn:css.svgOff} width='18' height='18'>
                        <use href={sprite + '#icon-colors'}></use>
                    </svg>
                    <input onClick={handleClickIcons} className={css.realRadio} type="radio" name="icons" id="icon_7" />
                </label>
                    </li>
                    <li>
                        <label htmlFor="icon_8">
                    <svg className={(icons==='icon_8')?css.svgOn:css.svgOff} width='18' height='18'>
                        <use href={sprite + '#icon-container'}></use>
                    </svg>
                    <input onClick={handleClickIcons} className={css.realRadio} type="radio" name="icons" id="icon_8" />
                </label>
                    </li>
                </ul>
                <h3 className={css.iconsTitle}>Background</h3>
                <ul className={css.backgroundList}>
                    {backimg.map(({url,id})=>(<li className={css.backgroundListItem} key={id}>
                        <label htmlFor={id}>
                    <img className={(backImg===`${id}`)?css.imgOn:css.imgOff} src={url} alt='img' width='28'></img>
                    <input onClick={handleClickImg} className={css.realRadio} type="radio" name='backgrounds' id={id} />
                        </label>
                    </li>))}
                </ul>
                <button className={css.btn}>Create</button>


            </form>

        </div>
    )
}

export default NewBoard;