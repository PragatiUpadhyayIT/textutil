import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("Enter your text")
    const HandleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const HandleLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const HandleClear = () => {
        let newText =(' ');
        setText(newText)
    }
    const HandleRemoveSpaces = () => {
       let newtext = text.split(/[ ]+/);
       setText(newtext.join(" "));
    }
    const HandleCopy = () => {
       let text= document.getElementById('myBox')
       text.select();
       navigator.clipboard.writeText(text.value);
    }
    const Handlechange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
        <div className='container'>
            <h2 className='mt-3'>{props.Heading}</h2>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                <textarea className="form-control" id="myBox" onChange={Handlechange} value={text} rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={HandleUpclick}>Convert To Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={HandleLoclick}>Convert To Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={HandleClear}>Clear Text</button>
            <button className='btn btn-primary mx-2' onClick={HandleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={HandleRemoveSpaces}>Remove Spaces</button>
        </div>
        <div className="container my-2">
            <h1>Your text Summary</h1>
            <p>Character {text.split(" ").length} and Words {text.length}</p>
            <p> Time to Read the Following text {0.008* text.split(" ").length} Min</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
