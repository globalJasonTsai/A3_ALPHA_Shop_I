// import Header from "./component/Header/Header";
// import Main from "./component/Main/Main";
// import Footer from "./component/Footer/Footer";
import { Header, Main, Footer } from './component'
import "./styles/main.scss"

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Main />
      </div>
        <Footer />
    </div>
  );
}

export default App;
