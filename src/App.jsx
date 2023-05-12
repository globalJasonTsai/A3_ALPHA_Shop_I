// import Header from "./component/Header/Header";
// import Main from "./component/Main/Main";
// import Footer from "./component/Footer/Footer";
import "./App.css";
import { Header, Main, Footer } from './component'
import "./styles/main.scss"
import { useState } from "react";

let initialStepPage = 1;

function App() {
  const [stepPage, setStepPage] = useState(initialStepPage);

  function handleChangePage(buttonValue) {
    let currentStepPage = stepPage;

    if (buttonValue === "next") {
      currentStepPage = currentStepPage + 1;
    } else if (buttonValue === "prev") {
      currentStepPage = currentStepPage - 1;
    }

    setStepPage(currentStepPage);
  }

  return (
    <div className="App">
      <Header />
      <Main stepPage={stepPage} onPage={handleChangePage} />
      <Footer />
    </div>
  );
}

//export
export default App;
