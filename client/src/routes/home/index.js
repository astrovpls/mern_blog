import React, { useEffect, useState } from 'react'
import { fetchArticles } from '../../store/thunks'
import { useDispatch, useSelector } from "react-redux";
import Style from './Home.module.css'
import axios from 'axios'
import Blogheader from '../../components/blogheader'
import { useHistory } from 'react-router-dom'

const Home = () => {
  let history = useHistory()
  const {articles, loading} = useSelector(state => state.articleReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles())
  }, [])

  const renderPost = () => {
    if (loading) {
      return <i className="gg-spinner-two"></i>
    } else {
      return articles.map(article => (
        <button
          key={article._id}
          className={Style.button}
          onClick={() => history.push(`/article/${article.slug}`)}
        >
          <Blogheader
            image={article.image}
            title={article.title}
            description={article.description}
            createdAt={article.createdAt}
          />
        </button>
      ))
    }
  }

  return <div className={Style.home}>{renderPost()}</div>
}

export default Home
