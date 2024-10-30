import UserInfo from "../../components/UserInfo/UserInfo"
import Notes from '../../components/Notes/Notes'
import Weather from "../../components/Weather/Weather"
import News from "../../components/News/News"
import Timer from '../../components/Timer/Timer'
import './Display.css';

import { useNavigate } from "react-router-dom"

export default function Display() {

    const navigate = useNavigate();

    const handleClick = () => {
         navigate("/browse")
    }

    return(
        <>
        <div style={{display:"flex" , flexDirection:"column" , paddingLeft:"2vw"}}>
            <div style={{display:"flex" , flexDirection:"row"}}>
        <div style={{display:"flex"  , padding:"3vh" , gap:"2vh" , flexDirection:"column"}} >
        <UserInfo />
        <Weather />
        </div>
        <div>
        <Notes />
        </div>
        </div>
        <div style={{paddingLeft:"1.5vw",paddingBottom:"2vh"}} >
        <Timer />
        </div>
        
        
        <div >
        <News />
        </div>
        </div>
        <button className="browse" onClick={handleClick}>Browse</button>
        
        </>
    )
}