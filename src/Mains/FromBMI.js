import './FromBMI.css';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FromBMI = (props) => {
    const [height,setheight] = useState(0);
    const [weight,setweight] = useState(0);
    const [fromValid,setfromValid] = useState(false);

    const InputHeight = (event) => {
        setheight(event.target.value);
    }
    const InputWeight = (event) => {
        setweight(event.target.value);
    }
    const SavaItem = (event) => {
        event.preventDefault();
        const itemData = {
            id:uuidv4(),
            height: Number(height),
            weight: Number(weight)
        }
        props.onAddNewItem(itemData);
    }
    useEffect(() => {
        const cheakData = height > 0 && weight > 0;
        setfromValid(cheakData);
    },[height,weight]);
    return(
        <div className='form-Bmi'>
            <form onSubmit = {SavaItem}>
                <div className="form-control">
                    <label>ส่วนสูง (เซนติเมตร): </label>
                    <input type="number" placeholder="ระบุส่วนสูง" onChange={InputHeight} value={height}/>
                </div>
                <div className="form-control">
                    <label>น้ำหนัก (กิโลกรัม): </label>
                    <input type="number" placeholder="ระบุน้ำหนัก"onChange={InputWeight} value={weight}/>
                </div>
                <div>
                    <button type="submit" className='btn' disabled={!fromValid}>คำนวณ</button>
                </div>
            </form>
        </div>
    )
}

export default FromBMI;