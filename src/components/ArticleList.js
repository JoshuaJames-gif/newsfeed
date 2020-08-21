import React from 'react';
import ArticleCard from './ArticleCard'

class ArticleList extends React.Component {
  
  state = {
    articles: {
      "Airbnb bans all house parties worldwide": {
        title: "Airbnb bans all house parties worldwide",
        description: "Airbnb has banned house parties as part of its efforts to comply with limits on gatherings in the wake of the coronavirus pandemic.",
      author: "N/A",
      created_at: '20 August 2020',
      link: "https://www.bbc.co.uk/news/technology-53849920",
      isOpen: false,
    },
    
      "10 charts on what happens after GCSEs": {
        title: "10 charts on what happens after GCSEs",
        description: "This year's exam results season has been like no other, but for the hundreds of thousands of students receiving their GCSE results, they will still have to decide what to do next.",
      author: "Ben Butcher",
      created_at: '20 August 2020',
      link: "https://www.bbc.co.uk/news/education-49249684",
      isOpen: false,
    },
    }
  }
  toggleVisibility = (clickEvent) => {  
    // console.log(clickEvent.target['title'])  
    //   this.setState((currentState) => {
    //      const newVisibility = !currentState.isOpen;
    //      console.log(currentState.articles)
    //     return { ...currentState.articles[clickEvent.target['title']], isOpen: newVisibility }
    //  })  
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
