/**
 * Page d'accueil de l'application
 * Affiche la liste des tweets
 */
import { Link, useNavigate } from 'react-router-dom';
import { TweetList } from '../components/TweetList';
import { CreateTweet } from '../components/CreateTweet';
import { useTweets } from '../hooks/useTweets';
import styles from './Home.module.css';

export default function Home() {
  const { fetchTweets } = useTweets();
  const navigate = useNavigate();

  const handleTitleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    fetchTweets();
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/" className={styles.titleLink} onClick={handleTitleClick}>
          <h1 className={styles.title}>Twitter Clone</h1>
        </Link>
      </header>
      <main>
        <CreateTweet />
        <TweetList />
      </main>
    </div>
  );
} 