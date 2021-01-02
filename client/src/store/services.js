import axios from 'axios'

const uri = 'http://localhost:4000/'

// const token = sessionStorage.token || null

// Get article by slug
export const getArticleBySlug = slug => axios.get(`${uri}api/post/${slug}`)
// Get all articles
export const getArticles = () => axios.get(`${uri}api/post`)
// Create article
export const createArticle = (article, token) =>
  axios.post(`${uri}api/new/post`, article, {
    headers: {
      Authorization: token,
    },
  })
// Update article
export const updateArticle = (id, article, token) =>
  axios.put(`${uri}api/update/${id}`, article, {
    headers: {
      Authorization: token,
    },
  })
// Delete article
export const deleteArticle = (id, token) =>
  axios.delete(`${uri}api/delete/${id}`, {
    headers: {
      Authorization: token,
    },
  })
// Login
export const login = loginForm =>
  axios
    .post(`${uri}api/user/login`, loginForm)
    .then(resp => sessionStorage.setItem('token', resp.data.token))
    .catch(console.log)
