import "./ShowBMI.css"
import { useEffect, useState } from 'react';

const ShowBMI = (props) => {
    const show = props.items;
    let type ;
    if(show === 0){
        type = "ไม่มีข้อมูล"
    }else if(show < 18.5){
       type = "ผอมเกินไป - น้ำหนักน้อยกว่าปกติ" 
    }else if(show < 25.0){
        type = "น้ำหนักปกติ น้ำหนักเหมาะสม"
    }else if(show < 30.0){
        type = "เริ่มอ้วน"
    }else if(show < 35.0){
        type = "อ้วน"
    }else if(show >= 35.0){
        type = "อ้วนมากผิดปกติ"
    }
    const [fromValid,setfromValid] = useState(false);
    useEffect(() => {
        const cheakData = show > 0 && type.trim().length > 0;
        setfromValid(cheakData);
    },[show,type]);
    return (
        <div>
            <div className="Show-result">
                <div >
                    <label disabled={!fromValid}>ค่าที่ได้ : </label>
                    <input type="text" disabled={!fromValid} value={show}/>
                </div>
                <div >
                    <label disabled={!fromValid}>ประเภท : </label>
                    <input type="text" disabled={!fromValid} value={type}/>
                </div>
            </div>
        </div>
    )
}
export default ShowBMI;
