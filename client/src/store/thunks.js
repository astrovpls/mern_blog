import history from '../utils/history'

import {
  GET_ARTICLE_BY_SLUG,
  GET_ARTICLES,
  DELETE_ARTICLE,
  LOADING,
  ERROR,
} from './types'

import {
  getArticleBySlug,
  getArticles,
  deleteArticle as deleteArticleService,
  updateArticle as updateArticleService,
  createArticle as createArticleService,
  login as loginService,
} from './services'

export const fetchArticleBySlug = slug => async dispatch => {
  dispatch({
    type: LOADING,
  })
  try {
    const result = await getArticleBySlug(slug)
    dispatch({
      type: GET_ARTICLE_BY_SLUG,
      payload: result.data,
    })
  } catch (err) {
    console.log('Error: ' + err.message)
    dispatch({
      type: ERROR,
      payload: err.message,
    })
  }
}

export const fetchArticles = () => async dispatch => {
  dispatch({
    type: LOADING,
  })
  try {
    const result = await getArticles()
    await dispatch({
      type: GET_ARTICLES,
      payload: result.data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: ERROR,
      payload: err.message,
    })
  }
}

export const deleteArticle = (id, token) => async dispatch => {
  dispatch({
    type: LOADING,
  })
  try {
    await deleteArticleService(id, token)
    await dispatch({
      type: DELETE_ARTICLE,
      payload: id,
    })
    await history.push('/')
  } catch (err) {
    console.log(err)
    dispatch({
      type: ERROR,
      payload: err.message,
    })
  }
}

export const updateArticle = (id, article, token) => async dispatch => {
  try {
    await updateArticleService(id, article, token)
    await history.push(`/article/${article.slug}`)
  } catch (err) {
    console.log(err)
    dispatch({
      type: ERROR,
      payload: err.message,
    })
  }
}

export const createArticle = (article, token) => async dispatch => {
  try {
    await createArticleService(article, token)
    await history.push('/')
  } catch (err) {
    console.log(err)
    dispatch({
      type: ERROR,
      payload: err.message,
    })
  }
}

// Login thunk
export const login = form => async dispatch => {
  try {
    await loginService(form)
    if (sessionStorage.token) {
      await history.push('/')
    }
  } catch (err) {
    console.log(err)
    dispatch({
      type: ERROR,
      payload: err.message,
    })
  }
}
