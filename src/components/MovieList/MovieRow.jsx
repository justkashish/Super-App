import { useEffect } from "react";
import { useState } from "react"

export default function MovieRow11({genre}) {

const[movies,setMovies] = useState([]);

useEffect(()=>{
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTY2MmQ2MTI5YmNkNjNjZTA0M2JkNGVhY2I5N2QxMiIsIm5iZiI6MTczMDMwNjA3NC40NTMyMzM3LCJzdWIiOiI2NzFhMjkzNmIzZDVjYmI'
  
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => setMovies(json.results))
  .catch(err => console.error(err));

},[]);

console.log(movies);
    return (
        <div>
           <p style={{fontSize:"22px",fontWeight:500 , color:"#878787"}}>{genre.name}</p> 
           <div style={{display:"flex"  ,gap:"20%"   }}>
                {movies.map((movies , index)=>{
                    return index >= 4 ?(
                         <></>) : (
                        <div key={index} style={{display:"flex"  }}>
                            <div style={{objectFit:"cover"  }}>
                          <img src={`https://image.tmdb.org/t/p/w200${movies.backdrop_path}`} alt={movies.title} />
                        </div> 
                        </div>
                        
                       );
                })}
           </div>
        </div>
    )
}