import { useState } from "react"

export default function notes(){
    
    const[notes,setNotes] = useState( localStorage.getItem("notes") ?? "");

    const handleChange = (e) =>{
        setNotes(e.target.value);
        localStorage.setItem("notes",e.target.value)

    }
    return(
        <div style={{backgroundColor:"#F1C75B" , width:"25vw" , color:"black" ,paddingLeft:"1vh"  , borderRadius:"20px"}} >
            <h2>All Notes</h2>
            <textarea onChange={handleChange} value={notes} style={{backgroundColor:"#F1C75B" , color:"black" ,padding:"2%", width:"23vw" , maxWidth:"23vw" ,height:"50vh" , maxHeight:"50vh", border:"none" , borderRadius:"25px"}} >Write Your notes here..</textarea>
        </div>
    )
}