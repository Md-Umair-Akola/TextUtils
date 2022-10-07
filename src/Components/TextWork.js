import React,{useState} from "react";

export default function TextWork(props) {
    const handleUpClick=()=>
    {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase.","success");
    }
    const handleLoClick=()=>
    {
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase.","success");
    }
    const handleClClick=()=>
    {
        let newText='';
        setText(newText);
        props.showAlert("Cleared.","success");
    }
    const handleOnChnage=(event)=>
    {
        setText(event.target.value)
    }
    const handleExtra=()=>
    {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces.","success");
    }
    const handleCopy=()=>
    {
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard.","success");
    }
    
    const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3 " style={{color:props.mod==='light'?'black':'white'}}>
        <h3>{props.heading}</h3>
        <textarea
          className="form-control border border-primary rounded"
          id="mybox"
          rows="8" 
          value={text}
          onChange={handleOnChnage}
          style={{backgroundColor:props.mod==='light'?'white':'#3b4248',color:props.mod==='light'?'black':'white'}}
        ></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleUpClick} >UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleLoClick} >LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleExtra} >Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleCopy} >Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleClClick} >Clear Text</button>
        
      </div>
      <div className="container" style={{color:props.mod==='light'?'black':'white'}}>
        <h3>Summary Of Your Text</h3>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words , {text.length-text.split(" ").length+1} Characters</p>
        <p>{0.08*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Nothing To Preview"}</p>
      </div>
    </>
  );
}
