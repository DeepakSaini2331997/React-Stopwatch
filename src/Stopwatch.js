import React, { useState } from "react"
const Stopwatch=()=>{
    const [time,setTime] = useState({hrs:0,mins:0,secs:0,milsec:0})
    return(
        <div style={{border:"1px solid black",textAlign:"center",padding:"20px",margin:"20px auto"}}>
            {
                time.hrs+':'+time.mins+':'+time.secs+':'+time.milsec
            }
            <div>
                <button>Start</button>
                <button>Stop</button>
                <button>Restart</button>
            </div>
        </div>
    )
}
export default Stopwatch;