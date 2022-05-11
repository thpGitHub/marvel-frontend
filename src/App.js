import {useState, useEffect} from 'react'
import './App.css'
// ** Components **
import Header from './components/header'
import Home from './components/home'
// ** Service ***
import {fetchAllComics} from './services/thierry-api'

function App() {
  const [comics, setComics] = useState()

  useEffect(()=> {
    fetchAllComics().then(data => {
      console.log('data ===', data)
      setComics(data)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Home />

    <h1>Count : {comics?.count}</h1>
      
    </div>
  );
}

export default App
