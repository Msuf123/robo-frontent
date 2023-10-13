import { useDispatch } from "react-redux"
import { changeState, loading } from "../../Store/reducer"
import { useState } from "react"

export default function Search(){
    const dispatch=useDispatch()
    const [value,setValue]=useState("")
    return(
        <div>
            
            <input placeholder="Eg..Dji" value={value} onChange={(e)=>{
                console.log(e.target.value)
             setValue(e.target.value)

            }}></input>
            <button onClick={async()=>{
               dispatch(loading());
               try {
                   const response = await fetch('https://robo-sqlinjection-backend-production.up.railway.app/', {
                       method: 'POST',
                       headers: { 'Content-Type': 'application/json' },
                       body: JSON.stringify({ name: value })
                   });
           
                   if (!response.ok) {
                       // Handle error if the response is not OK
                       console.error('Server responded with an error');
                       return;
                   }
           
                   const data = await response.json();
                   console.log(data);
                   dispatch(changeState(data));
               } catch (error) {
                   console.error('Error while fetching data:', error);
               }
            }}>&#x1F50D;</button>
            
        </div>
    )
}