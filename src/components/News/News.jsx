import { useState, useEffect } from "react"
import './News.css'

export default function News() {

    const[news,setNews] = useState(null);

    useEffect(()=>{
        fetch("https://api.worldnewsapi.com/search-news?text=earth+quake&language=en&earliest-publish-date=2024-10-20&api-key=d2c358ee52144476b54a0d74354ec1fb")
        .then((data)=> data.json())
        .then((data)=> setNews(data))
        .catch((error)=>console.log(error));
    },[])

    console.log(news);
    return (
        <div className="newsBox" >
            
            {news ? <img className="image" width={200} height={200} src={news.news[3].image} alt="news" /> : <></>}
            {news ? <p className="text">{news.news[3].text.slice(0,400)}...</p> : <></>}
            <div className="title">
            {news ? <h2>{news.news[3].title}</h2> : <></> }
            </div>
            
            
        </div>
    );
}