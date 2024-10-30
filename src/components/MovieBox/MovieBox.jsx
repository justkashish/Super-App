export default function MovieBox({data,selected,setSelected}) {

    const isSelected = selected.includes(data.id);
    const handleClick = () =>{
        if(selected.includes(data.id)) {
            setSelected((prev)=>prev.filter((item)=> item !== data.id))
        }else {
            setSelected((prev) =>{
                return [...prev , data.id];
            });
        }
        
    }

    return (
        <div onClick={handleClick} style={{background:data.color, color:"white" ,width:"170px" , height:"185px"  ,borderRadius:"20px",fontSize:"20px" , padding:"5%" ,border:isSelected? "5px solid green":"" }}>
           <p>{data.id}</p> 
           <div style={{height:"150px"}}>
           {data.image}
           </div>
           
        </div>
    );
        
}