/**
 * Page d'accueil de l'application
 * Affiche la liste des tweets et permet d'en créer de nouveaux
 */
import { useEffect, useState } from 'react';
import { Tweet } from '../services/tweets';
import { tweetService } from '../services/tweets';

export default function Home() {
  // État local pour stocker les tweets
  const [tweets, setTweets] = useState<Tweet[]>([]);

  // Effet pour charger les tweets au montage du composant
  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await tweetService.getAll();
        setTweets(response.data);
      } catch (error) {
        console.error('Failed to fetch tweets:', error);
        // TODO: Ajouter une gestion d'erreur plus élaborée
      }
    };

    fetchTweets();
  }, []);

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