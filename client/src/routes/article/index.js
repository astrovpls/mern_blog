import React, { useEffect } from 'react'
import { fetchArticleBySlug, deleteArticle } from '../../store/thunks'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import Style from './Article.module.css'
import Blogheader from '../../components/blogheader'
import ReactMarkdown from 'react-markdown'
import Skeleton from 'react-loading-skeleton'

const Article = () => {
  let history = useHistory()
  const { slug } = useParams()
  const { currentArticle, loading } = useSelector(state => state.articleReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchArticleBySlug(slug))
  }, [slug])

  const handleDeleteArticle = id => {
    if (window.confirm('Delete this article?')) {
      dispatch(deleteArticle(id, sessionStorage.token))
    }
  }

  const editDeleteArticle = id => {
    if (sessionStorage.token) {
      return (
        <div className={Style.buttons}>
          <button
            onClick={() => handleDeleteArticle(id)}
            className={Style.linkButton}
          >
            Delete
          </button>
          <button
            onClick={() => history.push(`/edit/${slug}`)}
            className={Style.linkButton}
          >
            Edit
          </button>
        </div>
      )
    }
  }

  const renderMarkdown = () => {
    if (loading) {
      return <Skeleton count={15} />
    } else {
      return (
        <ReactMarkdown
          className={Style.markdown}
          source={currentArticle.markdown}
        />
      )
    }
  }

  return (
    <div className={Style.article}>
      <div className={Style.controlHeader}>
        <Blogheader
          image={currentArticle.image}
          title={currentArticle.title}
          description={currentArticle.description}
          createdAt={currentArticle.createdAt}
        />
        {editDeleteArticle(currentArticle._id)}
      </div>
      <hr />
      {renderMarkdown()}
    </div>
  )
}

export default Article
