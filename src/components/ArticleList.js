import React from 'react';
import ArticleCard from './ArticleCard'

class ArticleList extends React.Component {
  
  state = {
    articles: {
      "Creation timelines for the standard": {
      title: "Creation timelines for the standard",
      description: "Nullam euismod sodales venenatis.Morbi ultrices.",
      author: "Josh",
      created_at: '20 August 2020',
      link: "https://www.bbc.co.uk/news/technology-53849920",
      isOpen: false,
    },
    
      "Let me know when you’re ready": {
        title: "Let me know when you’re ready",
      description: "Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.",
      author: "Kojo",
      created_at: '21 August 2020',
      link: "https://www.bbc.co.uk/news/education-49249684",
      isOpen: false,
    },
    }
  }
  toggleVisibility = (clickEvent) => {    
      this.setState((currentState) => {
         const newVisibility = !currentState.isOpen;
         console.log(currentState.article)
      return { ...currentState.articles, isOpen: newVisibility }
     })  
  }
      render() {
       const articleArray = Object.entries(this.state.articles)
    
     return (
       <main>
         {articleArray.map(([articleName, article]) => {

          return <ArticleCard key={articleName} {...article } toggleVisibility={this.toggleVisibility}/>

         })}
       </main>
     )
   }
}


export default ArticleList;
