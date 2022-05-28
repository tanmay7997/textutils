import React, {useState} from 'react'

export default function Textform(props) {
const upClick = () => {
    //alert("Convert to upper case event.");
    //setText("You have clicked on uppercase conversion button");
    setText(text.toUpperCase());
    if(text!==''){
        props.showAlert("Converted to upper case","success");
    }
    else{
        props.showAlert("Enter text !!!","warning");
    }
}
const upChange = (event) => {
    //alert("Triggered on change of text.");
    const a = event.target.value;
    setText(a);
}
const lowClick = () => {
    //alert("Convert to upper case event.");
    //setText("You have clicked on lowercase conversion button");
    setText(text.toLowerCase());
    if(text!==''){props.showAlert("Converted to lower case","success");}
    else{props.showAlert("Enter text !!!","warning")}
}

const textCopy = () => {
    var text = document.getElementById('myBox');
    if(text.value!==''){
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard.","success");
    }
    else{
        props.showAlert("Enter text to be copied.","warning");
    }
}

const clearText = () => {
    if(text!==''){setText('');props.showAlert("Text cleared.","success");}
    else{props.showAlert("No text present.","warning");}
}
  const [text, setText] = useState('');
  //text = "New";
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={upChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-3" onClick={upClick}>Upper Case conversion</button>
        <button className="btn btn-primary mx-4" onClick={lowClick}>Lower Case conversion</button>
        <button className="btn btn-success" onClick={clearText}>Clear</button>
        <button className="btn btn-primary mx-4" onClick={textCopy}>Copy to clipboard</button>
    </div>
    </div>
    <div className="container my-4">
    <h3>Your text summary</h3>
    <p>{text.split(" ").length} words and {text.length} characters are present in this text.</p> 
    <p>Time to read {0.008 * text.split(" ").length}</p> 
    <p>Preview</p>
    <p>{text}</p> 
    </div>
    </>
  )
}