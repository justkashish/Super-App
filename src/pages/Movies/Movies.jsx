import MovieBox from "../../components/MovieBox/MovieBox"
import action from "../../assets/action.png"
import drama from "../../assets/drama.png"
import fantasy from "../../assets/fantasy.png"
import fiction from "../../assets/fiction.png"
import music from "../../assets/music.png"
import romance from "../../assets/romance.png"
import thriller from "../../assets/thriller.png"
import horror from "../../assets/horror.png"
import western from "../../assets/western.png"
import { useState } from "react"
import MovieChip from "../../components/MovieBox/MovieChip"
import './Movies.css'
import { GoAlert } from "react-icons/go";
import { useNavigate } from "react-router-dom"

const genres = [
    {
        id:"Action",
        color: "#FF5209",
        image: <img style={{width:"168px",height:"120px"}} src={action} />
    },
    {
        id:"Drama",
        color: "#D7A4FF",
        image: <img style={{width:"168px",height:"120px"}} src={drama} />
    },
    {
        id:"Romance",
        color: "#148A08",
        image: <img style={{width:"168px",height:"120px"}} src={romance} />
    },
    {
        id:"Thriller",
        color: "#84C2FF",
        image: <img style={{width:"168px",height:"120px"}} src={thriller} />
    },
    {
        id:"Western",
        color: "#902500",
        image: <img style={{width:"168px",height:"120px"}} src={western} />
    },
    {
        id:"Horror",
        color: "#7358FF",
        image: <img style={{width:"168px",height:"120px"}} src={horror} />
    },
    {
        id:"Fantasy",
        color: "#FF4ADE",
        image: <img style={{width:"168px",height:"120px"}} src={fantasy} />
    },
    {
        id:"Music",
        color: "#E61E32",
        image: <img style={{width:"168px",height:"120px"}} src={music} />
    },
    {
        id:"Fiction",
        color: "#6CD061",
        image: <img style={{width:"168px",height:"120px"}} src={fiction} />
    }
    
]

export default function Movies() {

    const[selected,setSelected] = useState([]);
    const navigate = useNavigate();

    
    const handleClick = () =>{
        if(selected.length<3){
         return;
        } else {
            localStorage.setItem("movies",JSON.stringify(selected));
         return navigate('/display');
        }
     }

    
    return(
        <>
        <div className="page2" style={{display:"flex"}}>
            <div className="first-part">
                 <h1>Super app</h1>
                 <p>Choose your entertainment category</p>
                 <div className="movie-chip" style={{display:"flex",flexWrap:"wrap",marginTop:"12px",marginBottom:"12px",gap:"12px"}}>
         {selected.map((item)=>{
            return <MovieChip key={item} data={item} selected={selected} setSelected={setSelected}/>
         })}
         </div>
         {selected.length<3 ? <p style={{color:"red",fontSize:"25px",display:"flex"}}><GoAlert /> &nbsp; Minimum 3 categories required</p> : <></>}
        
  </div>
            <div className="second-part">
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"2vw"}}>
                  {genres.map((genres)=>{
                 return <MovieBox key={genres} data={genres} selected={selected} setSelected={setSelected}/>
                 })}
           </div>
           <button className='button' onClick={handleClick} >Next Page</button>
           
         </div>
         </div>
        </>
    )
}