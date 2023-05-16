//import
import styles from "../../../Register.module.scss"
import { cardInfoOne } from "./cardInfoDatas";

//export
export default function NameCardNumInputs() {
  let Infos = cardInfoOne;

  return (
    <>
      {
        Infos.map((info) => {
        return (
          <li key={info.id}>
            <div class={`${styles.col} col col-12`}>
              <div class={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}>
                <div class={styles.inputLabel}>{info.type}</div>
                <input type="text" placeholder={info.placeHolder} />
              </div>
            </div>
          </li>
        );
        })
      }
    </>
  );
}
