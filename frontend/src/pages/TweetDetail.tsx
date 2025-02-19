import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Tweet } from '../services/tweets';
import { tweetService } from '../services/tweets';
import styles from './TweetDetail.module.css';

export default function TweetDetail() {
  const { id } = useParams();
  const [tweet, setTweet] = useState<Tweet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTweet = async () => {
      if (!id) return;
      
      setLoading(true);
      try {
        const response = await tweetService.getById(Number(id));
        // La réponse de Strapi inclut les données dans data.data
        setTweet(response.data.data);
      } catch (error) {
        console.error('Error fetching tweet:', error);
        setError('Failed to load tweet');
      } finally {
        setLoading(false);
      }
    };

    fetchTweet();
  }, [id]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!tweet) return <div className={styles.error}>Tweet not found</div>;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/" className={styles.backButton}>← Back</Link>
        <h1>Tweet</h1>
      </header>
      <div className={styles.tweet}>
        <p className={styles.content}>{tweet.attributes.content}</p>
        <small className={styles.timestamp}>
          {new Date(tweet.attributes.timestamp).toLocaleString()}
        </small>
      </div>
    </div>
  );
} 