import { Device } from "../../components";
import styles from "./styles.module.css";

export function Home() {

  return (
    <div className={styles.container}>
      <p className={styles.header}>DISPOSITIVOS DISPONÍVEIS</p>

      <div className={styles['content-devices']}>
        <Device 
          description={"Notebook"}
          is_active={true}
        />

        <Device 
          description={"Ventilador"}
          is_active={false}
        />
      </div>
    </div>
  )
}