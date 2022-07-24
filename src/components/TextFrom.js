import React,{useState} from 'react'

export default function TextFrom(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handlelowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handledeleteClick = ()=>{
        let newText =('');
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("");
  return (
      <>
<div className='container' style={{color:props.mode === 'dark'?'white':'#3d2626'}}>
    <h1>{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'#3d2626'}}id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary  mx-2' onClick={handlelowClick}>Convert to Lowercase</button>
<button className='btn btn-primary  mx-2' onClick={handledeleteClick}>Clear Text</button>
    </div>
    <div className="container" my-3 style={{color:props.mode === 'dark'?'white':'#3d2626'}}>
        <h1>Your Text Summry</h1>
<p>{text.split(" ").length} words and {text.length} character</p>
<p>{0.008 * text.split(" ").length } Minutes read</p>
<h1>Preview</h1>
<p>{text.length>0?text:"Enter Something in thr textbox above to preview it here"}</p>
    </div>
    </>
  )
}
