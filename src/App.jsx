import { useEffect } from 'react'
import Header from './Header'
import Main from './Main'

function App() {
  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(() => console.error('Error'))
  }, [])

  return (
    <div className='app'>
      <Header />

      <Main className='main'>
        <p>1/15</p>
        <p>Question</p>
      </Main>
    </div>
  )
}

export default App
