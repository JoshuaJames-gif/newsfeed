import React from 'react'

class ArticleList extends React.Component {
  state = {
    isOpen: false,
  };
  toggleVisibility = (clickEvent) => {
    this.setState((currentState) => {
       const newVisibility = !currentState.isOpen;
       return { ...currentState,isOpen: newVisibility }
    })
  }

   render() {
     return (
         <ul>
         {
           this.props.articles.map((article) => {
             return (
             <li className="articles" key={article.title}>
               <h1 className="article_title"><a href={article.link} target="blank">{article.title}</a></h1>
               <p className="article_desc">{article.description}</p>
               <h4>{article.author}</h4>
               <a href={article.link} target="blank">{article.link}</a>
               <p>{article.created_at}</p>

               {this.state.isOpen ? <p> Close</p> : null} 
               <button className="btn" onClick={() => this.toggleVisibility()}>toggle</button>
             </li>
             )
           })}
        </ul>
     )
   }
}

export default ArticleList;

// toggleVisibility = (clickEven) => {
//   this.setState((currentState) => {
//     const newVisibility = !currentState.isVisible;
//     return {
//       ...currentState,
//       isVisible: newVisibility
//     }
//   })

// }
