import {
  GET_ARTICLE_BY_SLUG,
  GET_ARTICLES,
  DELETE_ARTICLE,
  LOADING,
  ERROR,
} from '../types'

// Initial state.
const INITIAL_STATE = {
  articles: [],
  currentArticle: {},
  loading: false, //Store of loading status.
  error: '', //Store errors.
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        loading: false,
      }
    case GET_ARTICLE_BY_SLUG:
      return {
        ...state,
        currentArticle: action.payload,
        loading: false,
      }
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(article => article._id !== action.payload),
        loading: false,
      }
    case LOADING:
      return {
        ...state,
        loading: true,
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}
