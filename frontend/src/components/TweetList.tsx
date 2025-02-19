import { useEffect } from 'react';
import { Tweet } from './Tweet';
import { useTweets } from '../hooks/useTweets';

export function TweetList() {
  const { tweets, loading, fetchTweets } = useTweets();

  useEffect(() => {
    console.log('TweetList mounted'); // Log de debug
    fetchTweets();
  }, []);

  if (loading) {
    console.log('Loading...'); // Log de debug
    return <div>Loading...</div>;
  }

  console.log('Rendering tweets:', tweets); // Log de debug
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </div>
  );
} 