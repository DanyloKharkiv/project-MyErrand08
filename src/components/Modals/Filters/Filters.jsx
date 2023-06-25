import filter from './filter.module.css'
import { useState } from 'react';

const Filter = () => {

    const [radio, setRadio] = useState('');
    
    const handleClick = ({ target }) => {
        setRadio(target.name)
    }
    const showClick = () => {
        setRadio('')
    }
    

    return (<div className={filter.modal}>
        <h3 className={filter.title}>Filter</h3>
        <div className={filter.background}>
            <h3 className={filter.titleBackground}>Backgrounds</h3>
            <ul className={filter.list}>
                <li className={filter.item}></li>
                <li className={filter.item}></li>
                <li className={filter.item}></li>
                <li className={filter.item}></li>
                <li className={filter.item}></li>
                <li className={filter.item}></li>
                <li className={filter.item}></li>
                <li className={filter.item}></li>
                <li className={filter.item}></li>
                <li className={filter.item}></li>
                <li className={filter.item}></li>
                <li className={filter.item}></li>
                <li className={filter.item}></li>
                <li className={filter.item}></li>
                <li className={filter.item}></li>
                <li className={filter.item}></li>
            </ul>
        </div>
        <div>
            <ul className={filter.labelColor}>
                <li><h3 className={filter.labelColorTitle}>Label color</h3></li>
                <li><h3 className={filter.show} onClick={showClick}>Show all</h3></li>
            </ul>
            
        </div>
        <div >
            <div className={filter.radioItem}>
                
                <label onChange={handleClick} className={(radio==='without')?filter.labelOn:filter.labelOff} for="without">
                    <input checked={radio==='without'} type="radio" id="without" name="without" value="without" className={filter.realRadio} />
                    <span className={`${filter.customRadio} ${filter.without}`}></span>
                    Without priority
                    </label>
            </div>

             <div className={filter.radioItem}>
                
                <label onChange={handleClick} className={(radio==='low')?filter.labelOn:filter.labelOff} for="low">
                    <input checked={radio==='low'} type="radio" id="low" name="low" value="low" className={filter.realRadio} />
                <span className={`${filter.customRadio} ${filter.low}`}></span>
                    Low</label>
            </div>
            <div className={filter.radioItem}>
                
                <label onChange={handleClick} className={(radio==='medium')?filter.labelOn:filter.labelOff} for="medium">
                    <input checked={radio==='medium'} type="radio" id="medium" name="medium" value="medium" className={filter.realRadio} />
                <span className={`${filter.customRadio} ${filter.medium}`}></span>
                    Medium</label>
            </div>
            <div className={filter.radioItem}>
                
                <label onChange={handleClick} className={(radio==='high')?filter.labelOn:filter.labelOff} for="high">
                    <input checked={radio==='high'} type="radio" id="high" name="high" value="high" className={filter.realRadio} />
                <span className={`${filter.customRadio} ${filter.high}`}></span>
                    High</label>
            </div>
            
        </div>
            
            </div>)
}
export default Filter;