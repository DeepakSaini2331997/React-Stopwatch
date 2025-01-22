import React, { useState } from "react"
const Stopwatch=()=>{
    const [time,setTime] = useState({hrs:0,mins:0,secs:0,milsec:0})
    const [status,setStatus] = useState('')
    const start = ()=>{
        setStatus(setInterval(()=>{
            watch()
        }),10)
    }

    const stop = ()=>{
        clearInterval(status)
    }

    const restart = ()=>{
        clearInterval(status)
        setTime({hrs:0,mins:0,secs:0,milsec:0})
    }

    let updMilsec = time.milsec;
    let updSecs = time.secs;
    let updMins = time.mins;
    let updHrs = time.hrs

    const watch = ()=>{
        if(updMilsec===100){
            updSecs++
            updMilsec =0;
        }
        if(updSecs===60){
            updMins++
            updSecs = 0;
        }
        if(updMins===60){
            updHrs++
            updMins=0
        }
        updMilsec++
        return setTime({hrs:updHrs,mins:updMins,secs:updSecs,milsec:updMilsec})
    }
    return(
        <div style={{border:"1px solid black",textAlign:"center",padding:"20px",margin:"20px auto"}}>
            <b>
            {
                time.hrs+':'+time.mins+':'+time.secs+':'+time.milsec
            }
            </b>
            <div>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={restart}>Restart</button>
            </div>
        </div>
    )
}
export default Stopwatch;