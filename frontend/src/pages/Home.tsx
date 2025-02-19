/**
 * Page d'accueil de l'application
 * Affiche la liste des tweets
 */
import { TweetList } from '../components/TweetList';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Twitter Clone</h1>
      </header>
      <main>
        <TweetList />
      </main>
    </div>
  );
} 