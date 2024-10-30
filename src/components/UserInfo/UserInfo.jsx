
export default function Userinfo() {

    const info =JSON.parse(localStorage.getItem("userInfo")) ;
    const movies = JSON.parse(localStorage.getItem("movies"));
    return (
        
        <div style={{background:"#5746EA",width:"30vw",padding:"10px",color:"white", display:"flex" , borderRadius:"20px" , gap:"20px" }} >
            <img src="./src/assets/profile.png" />
            <div>
             <p style={{fontSize:"15px"}}>{info.name}</p>
            <p style={{fontSize:"15px"}}>{info.email}</p>
            <p style={{fontSize:"20px" , fontWeight:"bold"}}>{info.username}</p>
            <div style={{display:"flex" ,flexWrap:"wrap" , gap:"10px"}}>
            {movies.map((item)=>{
                return <div style={{background:"#9F94FF",borderRadius:"12px" , marginBottom : " 8px" , padding: " 6px" , textAlign : "center" , width:"7vw" }} key={item}>{item}</div>
            })}
            </div>

</div>
        </div>
    )
}