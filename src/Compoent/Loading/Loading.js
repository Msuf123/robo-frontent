import { useEffect, useState } from "react"

export default function Loading(){
    const [loading,setLoaidng]=useState([{display:'none'},{display:'none'},{display:'none'}])
    let times=100;
    
    return(
        <div>
            <span>Loading<span style={loading[0]}>.</span><span style={loading[1]}>.</span><span style={loading[2]}>.</span></span>
        </div>
    )
}