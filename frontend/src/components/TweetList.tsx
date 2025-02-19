import { useEffect } from 'react';
import { Tweet } from './Tweet';
import { useTweets } from '../hooks/useTweets';
import styles from './TweetList.module.css';

export function TweetList() {
  const { tweets, loading, error, fetchTweets } = useTweets();

  useEffect(() => {
    console.log('TweetList mounted'); // Log de debug
    fetchTweets();
  }, []);

  if (loading) {
    console.log('Loading...'); // Log de debug
    return <div className={styles.loading}>Loading tweets...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  console.log('Rendering tweets:', tweets); // Log de debug
  return (
    <div className={styles.list}>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </div>
  );
} 