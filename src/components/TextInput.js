import React, { useState } from 'react'
import './text.css'


export default function TextInput(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text converted To uppercase","Success")
    }
    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text converted To lowercase","Success")

    }
    const handleClearText=()=>{
        setText("")
        props.showAlert("text Cleared","Success")

    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied","Success")

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("extra spaces removed from text","Success")

    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const[text,setText] = useState("");
    return (
        
        <> 
        <div className = "container ">
            
            <div className="mb-2">
                <h1>{props.heading}</h1>
                <label htmlFor="myBox" className="form-label my-2"></label>
                <textarea className="form-control" id="myBox" rows="8" value={text} style={{backgroundColor: props.mode==='dark'? 'grey': 'white'}} onChange={handleOnChange} placeholder="Enter Your Text"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>Convert To Upper Case</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert To Lower Case</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>



        </div>
        <div style={{}} className="container my-2">
            <h2>Your text Summary</h2>
            <p className="mx-1 summary">characters = {text.length-[ ]}</p>
            <p className="mx-1  summary">words = {text.length===0?0:text.split(" ").length}</p>
            <p className="mx-1  summary">Sentences = {text.length===0?0:text.split(".").length}</p>
            <p className="mx-1  summary">Paragraphs = {text.length===0?0:text.split("\n").length}</p>
            <p className="mx-1  summary">Time to read  this text ={text.length===0?0:text.split(" ").length/125} minutes </p>
            <h2>Preview</h2>
            <p>{text.length===0?"Nothing to preview":text}</p>
        </div>

        </>
    )
}
