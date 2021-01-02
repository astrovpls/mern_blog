import React, { useState, useEffect } from 'react'
import { fetchArticleBySlug, updateArticle, createArticle } from '../../store/thunks'
import { useDispatch, useSelector } from 'react-redux'
import Style from './NewArticle.module.css'
import { useHistory, useParams } from 'react-router-dom'

const NewArticle = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { currentArticle } = useSelector(state => state.articleReducer)
  const { slug } = useParams()
  const [editing, setEditing] = useState(false)
  const id = currentArticle._id
  const [editArticle, setArticle] = useState({
    image: '',
    title: '',
    description: '',
    markdown: '',
  })

  useEffect(() => {
    if (slug) {
      dispatch(fetchArticleBySlug(slug))
      setArticle(currentArticle)
      setEditing(true)
    }
  }, [slug])

  const handleInputChange = event => {
    const { name, value } = event.target
    setArticle({ ...editArticle, [name]: value })
  }

  const onSubmit = async event => {
    event.preventDefault()

    if (sessionStorage.token) {
      if (editing) {
        try {
          dispatch(updateArticle(id, editArticle, sessionStorage.token))
        } catch (err) {
          console.log({ error: err })
        }
      } else {
        try {
          dispatch(createArticle(editArticle, sessionStorage.token))
        } catch (err) {
          console.log({ error: err })
        }
      }
    }
  }

  return (
    <form className={Style.form} onSubmit={onSubmit}>
      <input
        type="text"
        required
        placeholder="Url image layout"
        name="image"
        value={editArticle.image}
        onChange={handleInputChange}
      />
      <input
        type="text"
        required
        placeholder="Title"
        name="title"
        value={editArticle.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        required
        placeholder="Description"
        name="description"
        value={editArticle.description}
        onChange={handleInputChange}
      />
      <textarea
        required
        placeholder="Markdown here"
        name="markdown"
        value={editArticle.markdown}
        onChange={handleInputChange}
      />
      <div>
        <button onClick={() => history.goBack()}>Back</button>
        <button type="submit">{editing ? 'Edit' : 'Create'}</button>
      </div>
    </form>
  )
}

export default NewArticle
