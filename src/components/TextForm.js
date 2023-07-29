import React, { useState } from 'react'

export default function TextForm(props) {

    // convert to upper case
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Coverted to uppercase", "success")
    }

    // convert to lower case
    const handleLoClick = () => {
        console.log("Lowercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Coverted to lowercase", "success")
    }
    // Clear the text
    const handleClearClick = () => {
        let newtext = '';
        setText(newtext)
        props.showAlert("Text is cleared", "success")  // dismissing alert
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }

    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();
        props.showAlert("Text is copied", "success")   // dismissing alert
    }
    const [text, setText] = useState('');
    // text = "new text";  //wrong way to change text
    // setText("new text");  //correct way to change text

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert to lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy text</button>
            </div>

            <div className="container my-2 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                {/* To calculate text and characters */}
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview"}</p>
            </div>
        </>
    )
}
