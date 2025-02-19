/**
 * Hook personnalisé pour gérer les tweets avec Jotai
 */
import { useAtom } from 'jotai';
import { tweetsAtom, loadingAtom } from '../store/atoms';
import { tweetService } from '../services/tweets';

export function useTweets() {
  const [tweets, setTweets] = useAtom(tweetsAtom);
  const [loading, setLoading] = useAtom(loadingAtom);

  const fetchTweets = async () => {
    console.log('Fetching tweets...');
    setLoading(true);
    try {
      const response = await tweetService.getAll();
      console.log('API Response:', response);
      setTweets(response.data);
    } catch (error) {
      console.error('Failed to fetch tweets:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    tweets,
    loading,
    fetchTweets
  };
} 