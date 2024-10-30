import MovieList from "../../components/MovieList/MovieList";
import MovieRow from "../../components/MovieList/MovieRow";
import "./Browse.css";
export default function Browse() {
    return(
        <>
        <h1 style={{ color: "#72DB73" , fontFamily: "single day, cursive" , fontWeight: 400, fontSize: "50px" }} >Super app</h1>
        <img src="./src/assets/dp.png" alt="dp" style={{ position: "absolute" , top : '2%', right :"2%"}} />
        <div style={{paddingLeft:"5%"}}>
        <p style={{fontWeight: 400, fontSize: "25px"}}>Entertainment according to your choice</p>
        <MovieList />
        <button className="select">Select Again</button>
        
        </div>
        </>
    )
}