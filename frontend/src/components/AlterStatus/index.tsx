import { DeviceInfoProps } from "../../types/DeviceProps";

import styles from "./styles.module.css";

export function AlterStatus({ is_active }: Pick<DeviceInfoProps, "is_active">) {

  const handleToggle = async () => {
    
    console.log("teste");
  };

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={is_active}
        onChange={handleToggle}
      />
      <span className={`${styles.slider} ${styles.round}`}>
      </span>
    </label>
  )
}