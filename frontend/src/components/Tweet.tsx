/**
 * Composant Tweet
 * Affiche un tweet individuel avec son contenu et sa date
 */
import styles from './Tweet.module.css';

interface TweetProps {
  content: string;
  timestamp: string;
}

export function Tweet({ content, timestamp }: TweetProps) {
  return (
    <div className={styles.tweet}>
      <p className={styles.content}>{content}</p>
      <small className={styles.timestamp}>
        {new Date(timestamp).toLocaleString()}
      </small>
    </div>
  );
} 