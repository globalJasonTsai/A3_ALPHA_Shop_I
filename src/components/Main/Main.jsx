import Register from "./register/Register";
import CartContainer from "./Cart/Cart";
import ProgressControlContainer from "./progressControl/ProgressControlContainer";
import styles from "components/Main/main.module.scss";
import { useState } from "react";

const Main = () => {
  const [step, setStep] = useState(1);
  const [shippingPrice, setShippingPrice] = useState(0);

  const handleShippingPrice = (e) => {
    setShippingPrice(parseInt(e.currentTarget.dataset.price));
  };

  const handleStep = (step) => {
    if (step < 4) {
      setStep(step);
    }
  };

  return (
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        <Register step={step} onHandleShippingPrice={handleShippingPrice} />
        <CartContainer shippingPrice={shippingPrice} />
        <ProgressControlContainer
          step={step}
          onHandleNextStep={() => handleStep(step + 1)}
          onHandlePrevStep={() => handleStep(step - 1)}
        />
      </div>
    </main>
  );
};

export default Main;
