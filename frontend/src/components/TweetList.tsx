import { useEffect } from 'react';
import { Tweet } from './Tweet';
import { useTweets } from '../hooks/useTweets';
import styles from './TweetList.module.css';

export function TweetList() {
  const { tweets, loading, error, fetchTweets } = useTweets();

  useEffect(() => {
    fetchTweets();
  }, []);

  if (loading) return <div className={styles.loading}>Loading tweets...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!tweets || tweets.length === 0) return <div>Aucun tweet à afficher</div>;

  return (
    <div className={styles.list}>
      {tweets.map((tweet) => (
        <Tweet 
          key={tweet.id}
          id={tweet.id}
          content={tweet.content}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  );
} 