import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Lucas Projects</h1>
      <div className={styles.buttonContainer}>
        <a href="https://pooppuncher.vercel.app">
          <Image src="/poop.png" alt="Pooppuncher" width={450} height={225} />
        </a>
        <a href="https://deskpet.org">
          <Image src="/deskpets.png" alt="Deskpets" width={400} height={225} />
        </a>
        <a href="https://ispyai.com">
          <Image src="/ispyai.png" alt="iSpyAi" width={400} height={225} />
        </a>
      </div>
    </div>
  )
}
