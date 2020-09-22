import axios from 'axios';
export const FETCH_USERS = 'fetch_users';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_COMMENTS = 'fetch_comments';

export const callApi = source => async dispatch => {
  let url;
  if(!source){
    url = 'https://jsonplaceholder.typicode.com/users';
    const res = await axios.get(url);
    dispatch({
      type: FETCH_USERS,
      payload: res.data
    });
  }
   else {
    url = `https://jsonplaceholder.typicode.com/posts?userId=${source}`;
    const res = await axios.get(url);
    dispatch({
      type: FETCH_POSTS,
      payload: res.data
    });
  }
 
};

export const fetchCommnets  = source => async dispatch => {
   let  url = `https://jsonplaceholder.typicode.com/comments?postId=${source}`
  const res = await axios.get(url);
  dispatch({
    type: FETCH_COMMENTS,
    payload: res.data
  });
}
