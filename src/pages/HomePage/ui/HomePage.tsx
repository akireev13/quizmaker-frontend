import styles from "./HomePage.module.scss";
import { NormalButton } from "@/shared/ui/Button";
export function HomePage() {
  return (
    <div className={styles.HomePage}>
      HomePage
      <NormalButton variant="outlined">Click me</NormalButton>
    </div>
  );
}
