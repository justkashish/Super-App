export default function MovieChip({data,setSelected}) {

    const handleClick = () =>{
        setSelected((prev)=>prev.filter((item)=> item !== data));
    }
    return(
        <div style={{background: "#148A08" ,padding:"12px",borderRadius:"20px" ,width:"7vw",color:"white" }}>
            {data} &nbsp; &nbsp; &nbsp; <span style={{color: "#085C00"}} onClick={handleClick}>X</span> 

        </div>
    )
}