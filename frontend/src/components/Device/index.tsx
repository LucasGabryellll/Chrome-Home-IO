import { DeviceInfoProps } from "../../types/DeviceProps";
import { AlterStatus } from "../AlterStatus";
import { DeviceInfo } from "../DeviceInfo";
import { Image } from "../Image";

import styles from "./styles.module.css";

export function Device({ description, is_active }: DeviceInfoProps) {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image />
        
        <DeviceInfo
          description={description}
          is_active={is_active}
        />
      </div>

      <AlterStatus
        is_active={is_active}
      />
    </div>
  )
}