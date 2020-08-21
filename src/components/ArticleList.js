import React from 'react';
import ArticleCard from './ArticleCard'

class ArticleList extends React.Component {
  
  state = {
    isOpen: false,
    articles: 
    {
      title: "Creation timelines for the standard",
      description: "Nullam euismod sodales venenatis.Morbi ultrices.",
      author: "Josh",
      created_at: '20 August 2020',
      link: "https://www.bbc.co.uk/news/technology-53849920"
    },
    {
      title: "Let me know when you’re ready",
      description: "Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.",
      author: "Kojo",
      created_at: '21 August 2020',
      link: "https://www.bbc.co.uk/news/education-49249684"
    },
    
  };
  // toggleVisibility = (clickEvent) => {
    //   this.setState((currentState) => {
      
      //      const newVisibility = !currentState.isOpen;
      //      return { ...currentState,isOpen: newVisibility }
      //   })
      // }
      
      render() {
       const   articleArray = Object.entries(this.state.articles)
       console.log(articleArray)

       
     return (
        <ArticleCard />
     )
   }
}

export default ArticleList;
