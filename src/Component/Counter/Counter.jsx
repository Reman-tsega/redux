import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterAction } from '../Store/CounterSrore'
 
function Counter() {
    const count = useSelector((state)=>state.counter.counter)
    const show = useSelector((state)=>state.counter.show)

    const dispatch = useDispatch()
    // // const [showCounter, setShowCounter] = useState(false)

    const toggleHandler = useCallback(()=>{
        // dispatch({type:"toggle"})
        dispatch(counterAction.toggle())
        // setShowCounter((prev)=>!prev)
    },[])

    useEffect(()=>{
        toggleHandler()
    },[toggleHandler])

  console.log(count)
  return (
    <div>
        <label>count is :</label>
        {show && <h2>{count}</h2> }
        <br/>
        <button onClick={()=>dispatch(counterAction.decriment())}>-</button>
        <button onClick={()=>dispatch(counterAction.incriment())}>+</button>
      
        <button onClick={()=>dispatch(counterAction.incrimentBy6(6))}>+6</button>
        <br/>
        <button onClick={toggleHandler}>toggle counter</button>
    </div>
  )
}

export default Counter