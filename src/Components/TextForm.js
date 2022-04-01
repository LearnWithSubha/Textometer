import React, {useState} from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState("write here");
    const handleUpper = ()=>{
        console.log("handleUpper Clicked")
        let newText=Text.toUpperCase()
        setText(newText)
    }
    const handleLower = ()=>{
        console.log("handleLower Clicked")
        let newText=Text.toLowerCase()
        setText(newText)
    }
    const handleClearText = ()=>{
        console.log("ClearText Clicked")
        setText("")
    }
    const handletextExtract =()=>{
        const regex = /[0-9/A-Z/a-z/ /]/g;

        const letters = Text.match(regex);
        const res1 = letters.join('');
        setText(res1)
    };
    const handleNumExtract =()=>{
        const regex = /[0-9/ /]/g;

        const digits = Text.match(regex);
        const res = digits.join('');
        setText(res)
    };
    const capitalFirstLetter = ()=>{
        let words = Text.split(" ")
       let uppercaseword = ' '
        words.forEach(element => {
           uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
        });
        setText(uppercaseword)
    }
    const revTextByChar = ()=>{
        let words = Text.split("").reverse().join("")
       
        setText(words)
    }
    const revTextByWord = ()=>{
        let words = Text.split(" ").reverse().join(" ")
       
        setText(words)
    }
    const copyText = ()=>{
        let text = document.getElementById("myTextBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        
    }
    const sentenceCase = ()=>{
        let sentence = Text.split(/\r\n|\r|\n/)
        let uppercase = ' '
        sentence.forEach(element => {
            uppercase += element.charAt(0).toUpperCase() + element.slice(1) + " "
         });
         setText(uppercase)

    }
    const wordCount=()=>{
        if(Text.length<=0){
            return 0;
        }
        else if(Text.charAt(Text.length-1)===" "){
            return Text.split(" ").length-1;
        }
        else{
            return Text.split(" ").filter((element)=>{return element.length!==0}).length;
        }
    }
    const sentenceCount=()=>{
        if(Text.length<=0){
            return 0;
        }
        else if(Text.charAt(Text.length-1)==="." 
        || Text.charAt(Text.length-1)==="?" 
        || Text.charAt(Text.length-1)==="!"){
            return Text.split(/[.?!]\s|[.?!]/).length-1;
        }
        else{
            return Text.split(/[.?!]\s|[.?!]/).length;
        }
    }
    const paragraphCount=()=>{
        if(Text.length<=0){
            return 0;
        }
        else if(Text.charAt(Text.length-1)==="\r" 
        || Text.charAt(Text.length-1)==="\n" 
        || Text.charAt(Text.length-1)==="\r\n"){
            return Text.split(/\r\n|\r|\n/).length-1;
        }
        else{
            return Text.split(/\r\n|\r|\n/).length;
        }
    }

    const handleOnChange = (event)=>{
        console.log("handleOnChange triggered")
        setText(event.target.value)
        
    }
    console.log(props.mode)
  return (
      <>
        <h1 style={{color: props.mode==='light'?'black':'white'}}>{props.boxhead}</h1>
        <div>
            <textarea className="form-control" style={{background: props.mode==='light'?'black':'gray', color: 'white'}} value={Text} onChange={handleOnChange} id="myTextBox" rows="10"></textarea>
        </div>
        <button type="button" disabled={Text.length===0} className="btn btn-primary mx-2 my-2" style={{color: props.mode==='light'?'black':'white'}} onClick={handleUpper}>Convert to UPPERCASE</button>
        <button type="button" disabled={Text.length===0} className="btn btn-primary mx-2 my-2" style={{color: props.mode==='light'?'black':'white'}} onClick={handleLower}>Convert to lowercase</button>
        <button type="button" disabled={Text.length===0} className="btn btn-primary mx-2 my-2" style={{color: props.mode==='light'?'black':'white'}} onClick={handleClearText}>clear Text</button>
        <button type="button" disabled={Text.length===0} className="btn btn-primary mx-2 my-2" style={{color: props.mode==='light'?'black':'white'}} onClick={handletextExtract}>Remove symbols</button>
        <button type="button" disabled={Text.length===0} className="btn btn-primary mx-2 my-2" style={{color: props.mode==='light'?'black':'white'}} onClick={handleNumExtract}>Extract Numbers</button>
        <button type="button" disabled={Text.length===0} className="btn btn-primary mx-2 my-2" style={{color: props.mode==='light'?'black':'white'}} onClick={capitalFirstLetter}>Caps First</button>
        <button type="button" disabled={Text.length===0} className="btn btn-primary mx-2 my-2" style={{color: props.mode==='light'?'black':'white'}} onClick={revTextByChar}>ReverseTextByChar</button>
        <button type="button" disabled={Text.length===0} className="btn btn-primary mx-2 my-2" style={{color: props.mode==='light'?'black':'white'}} onClick={revTextByWord}>ReverseTextByWord</button>
        <button type="button" disabled={Text.length===0} className="btn btn-primary mx-2 my-2" style={{color: props.mode==='light'?'black':'white'}} onClick={sentenceCase}>sentenceCase</button>
        <button type="button" disabled={Text.length===0} className="btn btn-primary mx-2 my-2" style={{color: props.mode==='light'?'black':'white'}} onClick={copyText}>Copy</button>
        
        <div className="container my-2">
            <h3 style={{color: props.mode==='light'?'black':'white'}}>Your text summery</h3>
            <p style={{color: props.mode==='light'?'black':'white'}}>
                Words: <b>{wordCount()}</b><br/> 
                Characters: <b>{Text.length}</b><br/>
                Sentences: <b>{sentenceCount()}</b><br/>
                Paragraph: <b>{paragraphCount()}</b><br/>
                Requires <b>{0.008 * wordCount()}</b> munites to read.
            </p>
        </div>

      </>
  )
}
