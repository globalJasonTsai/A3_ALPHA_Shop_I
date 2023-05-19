import { AppContextProvier } from 'context/AppContext'
import { Header, Main, Footer } from './components'
import "./styles/reset.scss";
import "./styles/base.scss";

function App () {
  return (
    <AppContextProvier>
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
    </AppContextProvier>
  )
}

export default App;

