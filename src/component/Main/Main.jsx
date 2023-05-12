//import
import Register from "./Register/Register";
import ProgressControl from "./ProgressControl/ProgressControl";
import Cart from "./Cart/Cart";

//export
export default function Main({ stepPage, onPage }) {
  return (
    <main class="site-main">
      <div class="main-container">
        <Register page={stepPage} />
        <Cart />
        <ProgressControl onChangePage={onPage} />
      </div>
    </main>
  );
}
