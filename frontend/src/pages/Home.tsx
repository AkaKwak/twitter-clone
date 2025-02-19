/**
 * Page d'accueil de l'application
 * Affiche la liste des tweets
 */
import { Link, useNavigate } from 'react-router-dom';
import { TweetList } from '../components/TweetList';
import { CreateTweet } from '../components/CreateTweet';
import { useTweets } from '../hooks/useTweets';
import { useAuth } from '../hooks/useAuth';
import styles from './Home.module.css';

export default function Home() {
  const { fetchTweets } = useTweets();
  const { user, logout, isAuthenticated } = useAuth();
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
        <div className={styles.headerRight}>
          {isAuthenticated ? (
            <>
              <span className={styles.username}>{user?.username}</span>
              <button onClick={logout} className={styles.logoutButton}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className={styles.loginButton}>
              Login
            </Link>
          )}
        </div>
      </header>
      <main>
        {isAuthenticated && <CreateTweet />}
        <TweetList />
      </main>
    </div>
  );
} 