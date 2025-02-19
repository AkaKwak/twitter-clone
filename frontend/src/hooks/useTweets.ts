/**
 * Hook personnalisé pour gérer les tweets avec Jotai
 */
import { useAtom } from 'jotai';
import { tweetsAtom } from '../store/atoms';
import { tweetService } from '../services/tweets';

export function useTweets() {
  const [tweetsState, setTweetsState] = useAtom(tweetsAtom);

  const fetchTweets = async () => {
    console.log('Fetching tweets...');
    setTweetsState(state => ({ ...state, loading: true, error: null }));
    try {
      const tweets = await tweetService.getAll();
      setTweetsState({
        items: tweets,
        loading: false,
        error: null
      });
    } catch (error) {
      console.error('Failed to fetch tweets:', error);
      setTweetsState(state => ({
        ...state,
        loading: false,
        error: 'Failed to fetch tweets'
      }));
    }
  };

  const createTweet = async (content: string) => {
    setTweetsState(state => ({ ...state, loading: true, error: null }));
    try {
      const response = await tweetService.create(content);
      setTweetsState(state => ({
        items: [response.data, ...state.items],
        loading: false,
        error: null
      }));
    } catch (error) {
      setTweetsState(state => ({
        ...state,
        loading: false,
        error: 'Failed to create tweet'
      }));
    }
  };

  const deleteTweet = async (id: number) => {
    try {
      await tweetService.delete(id);
      setTweetsState(state => ({
        ...state,
        items: state.items.filter(tweet => tweet.id !== id)
      }));
    } catch (error) {
      console.error('Error deleting tweet:', error);
      throw error;
    }
  };

  return {
    tweets: tweetsState.items,
    loading: tweetsState.loading,
    error: tweetsState.error,
    fetchTweets,
    createTweet,
    deleteTweet
  };
} 