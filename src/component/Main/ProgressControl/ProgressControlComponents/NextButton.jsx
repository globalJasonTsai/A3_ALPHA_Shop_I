//import
import styles from "../../Register/Register.module.scss"
import { ReactComponent as RightArrowIcon } from "../../../../assets/icons/rightArrow.svg";

//export
export default function NextButton({ onClick }) {
  return (
    <button
      value="next"
      className={`${styles.next} ${styles.cursorPoint}`}
      onClick={(e) => {
        onClick(e.target.value);
      }}
    >
      下一步
      <RightArrowIcon />
    </button>
  );
}
