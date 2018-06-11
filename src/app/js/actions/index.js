import axios from 'axios';
import Config from '../configuration';
import { FETCH_MOCK_COMMENTS, FETCH_REDDIT_ARTICLES, FETCH_CURRENT_ARTICLE } from './types';

const {
  redditArticlesURL, redditSingleArticleURL, mockCommentsURL, articlesAmmount,
} = Config;

export const fetchMockComments = () => async (dispatch) => {
  // TODO: Add error handling.
  const res = await axios.get(mockCommentsURL);

  dispatch({
    type: FETCH_MOCK_COMMENTS,
    payload: res,
  });
};

export const fetchRedditArticles = (limit = articlesAmmount, after = null, before = null) =>
  async (dispatch) => {
    try {
      const res = await axios.get(redditArticlesURL, {
        params: {
          limit,
          after,
          before,
        },
      });
      dispatch({
        type: FETCH_REDDIT_ARTICLES,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };

export const fetchCurrentReddit = (redditID = null) =>
  async (dispatch) => {
    try {
      const res = await axios.get(`${redditSingleArticleURL}${redditID}.json`);
      dispatch({
        type: FETCH_CURRENT_ARTICLE,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };
