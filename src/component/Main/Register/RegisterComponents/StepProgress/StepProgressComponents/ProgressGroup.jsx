import {phases} from "./PhasesData"
import styles from "../../../Register.module.scss"
import { ReactComponent as PgCompleteIcon } from "../../../../../../assets/icons/pg_complete.svg";

export default function ProgressGroup() {
  let phaseInfos = phases;
  return (
    <>
      {phaseInfos.map((info) => {
        return (
          <li key={info.number}>
            <span className={styles.progressGroup} data-phase={info.dataPhase}>
              <span className={styles.progressIcon}>
                <span className={styles.text}>{info.number}</span>
                <PgCompleteIcon
                  className={`${styles.icon} ${styles.cursorPoint}`}
                />
              </span>
              <span className={styles.progressLabel}>{info.type}</span>
            </span>
            {info.dataOrder ? (
              <span
                className={styles.progressBar}
                data-order={info.dataOrder}
              ></span>
            ) : (
              ""
            )}
          </ li>
        );
      })}
    </>
  );
}