/* eslint-disable react/prop-types */

import { useEffect } from 'react'

function Timer({ dispatch, secondsRemaining }) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: 'tick' })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [dispatch])

  return <div className='timer'>{secondsRemaining}</div>
}

export default Timer
