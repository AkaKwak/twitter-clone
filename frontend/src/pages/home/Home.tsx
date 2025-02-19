/**
 * Page d'accueil de l'application
 * Affiche la liste des tweets et permet d'en créer de nouveaux
 */
import { useEffect } from 'react';
import { useTweets } from '../../hooks/useTweets';

export default function Home() {
  const { tweets, loading, fetchTweets } = useTweets();

  useEffect(() => {
    fetchTweets();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Home</h1>
      {/* Liste des tweets */}
      <div>
        {tweets.map((tweet) => (
          <div key={tweet.id}>
            <p>{tweet.content}</p>
            <small>{new Date(tweet.timestamp).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
} 