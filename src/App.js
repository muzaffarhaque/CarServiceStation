
import { useEffect, useState } from 'react';
import './App.scss';
import table1 from "./images/Table.jpg"
function App() {
const [car,setCar]=useState("");
const [ckbox,setCkbox]=useState([]);
// const [fulform,setFulform]=useState({BS01:"",EF01:"",CF01:"",BF01:"",GF01:""});
const [finalObj,setFinalObj]=useState([]);
const [totalbil,setTotalbil]=useState(0);
const [chk,setChk]=useState({BS01:false,EF01:false,CF01:false,BF01:false,GF01:false});
const {BS01,EF01,CF01,BF01,GF01}=chk;
const [price,setPrice]=useState({
"BS01":2000,
"EF01":5000,
"CF01":2000,
"BF01":1000,
"GF01":3000});
// const {BS01,EF01,CF01,BF01,GF01}=fulform;



  function getdata(e){
    // console.log("dd",e.target)
    let {value,name,checked,id}= e.target
    // console.log(`${value} is ${checked}`)
    
    if(checked){
      //user checked box
      setCkbox([...ckbox,value]);
      // setFulform({...fulform,[e.target.value]:name});
      // setChk({...chk,ck1:checked,ck2:checked,ck3:checked,ck4:checked,ck5:checked});
      setChk({...chk,[value]:checked})
      setFinalObj([...finalObj,{pri:id,value:name}]);
      setTotalbil(totalbil + parseInt(id));
      // console.log(chk,"jjjj")
     
    }else{
      //user unchedk boxx
      setCkbox(ckbox.filter((e)=>e!==value));
  
      // setFulform({...fulform,[e.target.value]:""});
      setChk({...chk,[value]:false})
      setFinalObj(finalObj.filter((e)=>e.value!==name));
      setTotalbil(totalbil - parseInt(id));
    }
  }

// useEffect(
//   ()=>{
   
//      console.log("Name :",fulform);
//      console.log("Name :",price.BS01);
//      console.log("Price diff Type care",price)
//      console.log("Final Object",finalObj)
     
//   },[ckbox]
// )
useEffect(
  ()=>{

    console.log("show car =",car)
    switch(car){
      case "Hatchback":
        setPrice( {
          "BS01":2000,
          "EF01":5000,
          "CF01":2000,
          "BF01":1000,
          "GF01":3000
         })
        break;
      case "Sedan":
        setPrice( {
          "BS01":4000,
            "EF01":8000,
            "CF01":4000,
            "BF01":1500,
            "GF01":6000
         })
        break;
     
      case "Suv":
        setPrice(
          {
            "BS01":5000,
            "EF01":10000,
            "CF01":6000,
            "BF01":2500,
            "GF01":8000
           }
        )
        break;
      default:
       
        console.log("No car slected")
    }


  
  },[car]
)
//  console.log(car.BF01);
//  console.log(suv);
//  console.log(car);
// console.log(Object.keys(service))
function select_car(e){

setCar(e.target.value);
setTotalbil(0);
setChk({BS01:false,EF01:false,CF01:false,BF01:false,GF01:false});
setFinalObj([]);
setCkbox([]);
}
  return (
    <div className="App">
      <img src={table1} alt="table data" className='table-image-details' />
   <div className="child1">
         <select name="type_of_care" id="type"  onChange={select_car} className="select-option">
          <option selected value="">select Type of car</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Sedan">Sedan </option>
          <option value="Suv">Suv</option>
         </select>

   </div>

  
{
  car!=""?<div className="slect-service">
     <center><h2>Service</h2></center>
  <label htmlFor="Basic Servicing">
    <input type="checkbox" value="BS01" pric="6666" onChange={getdata} name="Basic Servicing" checked={BS01} id={price.BS01} />
    BS01
  </label>
  <label htmlFor="Engine Fixing">
    <input type="checkbox" value="EF01"  pric={price.EF01} onChange={getdata} name="Engine Fixing" checked={EF01} id={price.EF01} />
    EF01
  </label>
  <label htmlFor="Clutch Fixing">
    <input type="checkbox" value="CF01"  pric={price.CF01} onChange={getdata} name="Clutch Fixing" checked={CF01} id={price.CF01} />
    CF01
  </label>
  <label htmlFor="Brake Fixing">
    <input type="checkbox" value="BF01"  pric={price.BF01} onChange={getdata} name="Brake Fixing" checked={BF01} id={price.BF01} />
    BF01
  </label>
  <label htmlFor="Gear Fixing" title='Gear Fixing'>
    <input type="checkbox" title='Gear Fixing'  pric={price.GF01} value="GF01" onChange={getdata} name="Gear Fixing" checked={GF01} id={price.GF01} />
    GF01
  </label>
</div>:<center><h2>⬆️ Select Car Type ⬆️</h2></center>
}
   
   <div className="disply-output">
    <h4> Service Bill :</h4>
    <h3>Type of Car <span>-{car}</span></h3>
    <h3>Service Code <span>-{ckbox.join(" , ")}</span></h3><br/>

{
  finalObj.length>0 ?finalObj.map(
    (item,i)=>{
      return(
          <h3 key={i}>Charges for {item.value} <span>-{item.pri} </span></h3>
      )
    }
  ):null
}

    
    <h3>Total Bill <span>- {totalbil}</span>{totalbil>=10000?<span className='Notes'> ( Will provide free cleaning )</span>:null}</h3>
   </div>
  {/* <p style={{fontSize:"20px" ,height:"200px"}}>tall est height</p> */}
    </div>
  );
}

export default App;
