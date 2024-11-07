import { DeviceInfoProps } from "../../types/DeviceProps";
import styles from "./styles.module.css";

export function DeviceInfo({ description, is_active }: DeviceInfoProps) {

  return (
    <div>
      <p className={styles.description}>{description}</p>

      <div className={styles['content-info']}>
        <div
          className={styles['icon-status']}
          style={{ backgroundColor: `${is_active ? '#21c560' : '#9e9e9e'}` }}
        />

        <p
          className={styles['description-status']}
          style={{ color: `${is_active ? '#21c560' : '#9e9e9e'}` }}
        >
          {is_active ? 'Ligado' : 'Desligado'}
        </p>
      </div>
    </div>
  )
}