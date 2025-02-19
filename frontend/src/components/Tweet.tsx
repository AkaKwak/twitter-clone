/**
 * Composant Tweet
 * Affiche un tweet individuel avec son contenu et sa date
 */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTweets } from '../hooks/useTweets';
import { Toast } from './Toast';
import styles from './Tweet.module.css';

interface TweetProps {
  id: number;
  content: string;
  timestamp: string;
  author: string;
}

export function Tweet({ id, content, timestamp, author }: TweetProps) {
  const { deleteTweet } = useTweets();
  const [isDeleting, setIsDeleting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!window.confirm('Voulez-vous vraiment supprimer ce tweet ?')) {
      return;
    }

    setIsDeleting(true);
    try {
      await deleteTweet(id);
      setToast({ message: 'Tweet supprimé avec succès', type: 'success' });
    } catch (error) {
      setToast({ message: 'Erreur lors de la suppression', type: 'error' });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Link to={`/tweet/${id}`} className={styles.tweet}>
      <div className={styles.header}>
        <span className={styles.author}>{author}</span>
        <span className={styles.timestamp}>
          {new Date(timestamp).toLocaleString()}
        </span>
      </div>
      <p className={styles.content}>{content}</p>
      <button 
        onClick={handleDelete}
        className={styles.deleteButton}
        disabled={isDeleting}
      >
        {isDeleting ? '...' : '🗑️'}
      </button>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </Link>
  );
} 