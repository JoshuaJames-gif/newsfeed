import React from 'react'

 const ArticleList = (props) => {
   console.log(props)
  return (
      <ul>
      {
        props.articles.map((article) => {
          return (
          <li key={article.title}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <h4>{article.author}</h4>
            <a href={article.link}>article link</a>
            <p>{article.created_at}</p>
          </li>
          )
        })}
     </ul>
  )
}

export default ArticleList;
