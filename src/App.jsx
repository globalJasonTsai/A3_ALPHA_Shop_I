import './reset.css'
import './base.scss'
import icons from './component/icons/icons.svg'
// ---
import { Header, Main, Footer } from './component'
// ---
function App () {
  return (
    <div className='App'>
      <Header icons={icons} />
      <Main icons={icons} />
      <Footer icons={icons} />
    </div>
  )
}

export default App
