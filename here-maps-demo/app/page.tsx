import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className={styles.title}>Here Maps Demo</h1>
        
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/globe.svg"
              alt="Globe icon"
              width={20}
              height={20}
            />
            View Map Demo
          </a>
          <a
            href="/restrictions.html"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            View Restrictions
          </a>
        </div>
        
        <p className={styles.description}>
          This is a Next.js project that serves static HTML files from the public directory.
        </p>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn Next.js
        </a>
        <a
          href="https://here.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Here Maps
        </a>
      </footer>
    </div>
  );
}
