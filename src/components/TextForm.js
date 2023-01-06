import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,textset]=useState('enter the text hear');
    const uppercase= ()=>{
        let newtext = text.toUpperCase();
        textset(newtext);  
        props.showAlert("converted to uppercase","success");
    }
    const lowercase= ()=>{
        let newtext = text.toLowerCase();
        textset(newtext);
        props.showAlert("converted to lowercase","success");
        
    }
    const textonchange =(event)=>{
        textset(event.target.value);
    } 
    
  return (
    <>
<div className="container my-3" style={{color:props.mode==='dark'?'red':'yellow'}}>
    <h1>{props.heading}-</h1> 
<div className="mb-3">
  <textarea className="form-control" id="mytext" rows="8" value={text} onChange={textonchange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'red':'yellow'}}></textarea>
  <button type="submit"className="btn btn-primary" onClick={uppercase}>convert to uppercase</button>
  <button type="submit"className="btn btn-primary ms-3" onClick={lowercase}>convert to lowercase</button>
</div>
</div>
<div className="container "  style={{color:props.mode==='dark'?'red':'yellow'}} >
    <h1>text summary</h1>
    <p>{text.split(" ").length}word and{text.length}characters</p>
     <p>{0.008*text.split(" ").length}minutes read</p>
     <h2>preview</h2>
     <p> {text.length>0?text:"enter something in the text to preview it hear"}</p>
</div>
  </>
  )
}
