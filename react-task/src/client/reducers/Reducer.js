import { FETCH_USERS ,FETCH_COMMENTS, FETCH_POSTS} from '../actions/index';
const INTIAL_STATE = {
users:[],
posts:[],
comments:[]
}
export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return Object.assign({}, state, { users: action.payload })
      case FETCH_POSTS:
        return Object.assign({}, state, { posts: action.payload })
      case FETCH_COMMENTS:
        return Object.assign({}, state, { comments: action.payload })
    default:
      return state;
  }
};
