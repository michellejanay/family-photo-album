import './App.css'
import Header from './components/Header'
import Album from './components/Album'
import AppNav from './components/AppNav'

function App() {
  return (
    <div className="App">
      <AppNav />
      <Header />
      <Album />
    </div>
  )
}

export default App
