import './App.css'
import FromBMI from './Mains/FromBMI';
import ShowBMI from './Mains/ShowBMI';
import {useState} from 'react';

function App() {
  const design = {color:"red",textAlign:"center",fontSize:'1.5rem'}
  const [items,setItems] = useState(0);
  const onAddNewItem = (newItem) => {
    const h = newItem.height/100;
    const bmi = (newItem.weight/(h*h)).toFixed(2);
    setItems(bmi);
  }
  return (
    <div>
      <h1 style={design}>โปรแกรมคำนวณหาค่าดัชนีมวลกาย (BMI)</h1>
      <FromBMI onAddNewItem={onAddNewItem}/>
      <ShowBMI items = {items}/>

    </div>
  );
}

export default App;
