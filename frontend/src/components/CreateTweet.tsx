import { useState } from 'react';
import { useTweets } from '../hooks/useTweets';
import styles from './CreateTweet.module.css';

export function CreateTweet() {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { createTweet, fetchTweets } = useTweets();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await createTweet(content);
      setContent('');
      // Rafraîchir la liste après création
      await fetchTweets();
    } catch (error) {
      console.error('Failed to create tweet:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's happening?"
        maxLength={280}
        disabled={isSubmitting}
      />
      <button 
        className={styles.button}
        type="submit"
        disabled={!content.trim() || isSubmitting}
      >
        {isSubmitting ? 'Posting...' : 'Tweet'}
      </button>
    </form>
  );
} 