import css from '../NewBoard/css.module.css'
import sprite from '../../../images/sprite.svg'
import { useState } from 'react'
import img_1 from   '../../../images/image-icons/img_1.svg'
import img_2 from '../../../images/image-icons/img_2.svg';

const NewBoard = () => {

    const [icons, setIcons] = useState('');
    const [backImg, setBackImg] = useState('img_1');

    const handleClickIcons = ({ target }) => {
      setIcons(target.id);
    }
    const handleClickImg = ({ target }) => {
        setBackImg(target.id);
    }

    return (
        <div className={css.modal}>
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
                    <li><label htmlFor="img_1">
                        <img className={(backImg==='img_1')?css.imgOn:css.imgOff} src={img_1} alt="" />
                        <input onClick={handleClickImg} className={css.realRadio} type="radio" id='img_1' />
                    </label> </li>
                    <li><label htmlFor="img_2">
                        <img className={(backImg==='img_2')?css.imgOn:css.imgOff} src={img_2} alt="" />
                        <input onClick={handleClickImg} className={css.realRadio} type="radio" id='img_2' />
                    </label> </li>
                    <li><label htmlFor="img_3">
                        <img className={(backImg==='img_3')?css.imgOn:css.imgOff} src={img_2} alt="" />
                        <input onClick={handleClickImg}  className={css.realRadio} type="radio" id='img_3' />
                    </label> </li>
                    <li><label htmlFor="img_4">
                        <img className={(backImg==='img_4')?css.imgOn:css.imgOff} src={img_2} alt="" />
                        <input onClick={handleClickImg} className={css.realRadio} type="radio" id='img_4' />
                    </label> </li>
                    <li><label htmlFor="img_5">
                        <img className={(backImg==='img_5')?css.imgOn:css.imgOff} src={img_2} alt="" />
                        <input onClick={handleClickImg} className={css.realRadio} type="radio" id='img_5' />
                    </label> </li>
                    <li><label htmlFor="img_6">
                        <img className={(backImg==='img_6')?css.imgOn:css.imgOff} src={img_2} alt="" />
                        <input onClick={handleClickImg} className={css.realRadio} type="radio" id='img_6' />
                    </label> </li>
                    <li><label htmlFor="img_7">
                        <img className={(backImg==='img_7')?css.imgOn:css.imgOff} src={img_2} alt="" />
                        <input onClick={handleClickImg} className={css.realRadio} type="radio" id='img_7' />
                    </label> </li>
                    <li><label htmlFor="img_8">
                        <img className={(backImg==='img_8')?css.imgOn:css.imgOff} src={img_2} alt="" />
                        <input onClick={handleClickImg} className={css.realRadio} type="radio" id='img_8' />
                    </label> </li>
                    <li><label htmlFor="img_9">
                        <img className={(backImg==='img_9')?css.imgOn:css.imgOff} src={img_2} alt="" />
                        <input onClick={handleClickImg} className={css.realRadio} type="radio" id='img_9' />
                    </label> </li>
                    <li><label htmlFor="img_10">
                        <img className={(backImg==='img_10')?css.imgOn:css.imgOff} src={img_2} alt="" />
                        <input onClick={handleClickImg} className={css.realRadio} type="radio" id='img_10' />
                    </label> </li>
                    <li><label htmlFor="img_11">
                        <img className={(backImg==='img_11')?css.imgOn:css.imgOff} src={img_2} alt="" />
                        <input onClick={handleClickImg} className={css.realRadio} type="radio" id='img_11' />
                    </label> </li>
                    <li><label htmlFor="img_12">
                        <img className={(backImg==='img_12')?css.imgOn:css.imgOff} src={img_2} alt="" />
                        <input onClick={handleClickImg} className={css.realRadio} type="radio" id='img_12' />
                    </label> </li>
                    <li><label htmlFor="img_13">
                        <img  className={(backImg==='img_13')?css.imgOn:css.imgOff} src={img_2} alt="" />
                        <input onClick={handleClickImg} className={css.realRadio} type="radio" id='img_13' />
                    </label> </li>
                    <li><label htmlFor="img_14">
                        <img className={(backImg==='img_14')?css.imgOn:css.imgOff} src={img_2} alt="" />
                        <input onClick={handleClickImg} className={css.realRadio} type="radio" id='img_14' />
                    </label> </li>
                    <li><label htmlFor="img_15">
                        <img className={(backImg==='img_15')?css.imgOn:css.imgOff} src={img_2} alt="" />
                        <input onClick={handleClickImg} className={css.realRadio} type="radio" id='img_15' />
                    </label> </li>
                    <li><label htmlFor="img_16">
                        <img className={(backImg==='img_16')?css.imgOn:css.imgOff} src={img_2} alt="" />
                        <input onClick={handleClickImg} className={css.realRadio} type="radio" id='img_16' />
                    </label> </li>
                    
                </ul>
                <button className={css.btn}>Create</button>


            </form>

        </div>
    )
}

export default NewBoard;