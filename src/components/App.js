import React from 'react';
import './App.css';
import  ArticleList  from './ArticleList'
import Header from './Header';



class App extends React.Component {

state = {
  isVisible: false,
   articles: [{
      title: "Creation timelines for the standard",
      description: "Nullam euismod sodales venenatis. Morbi ultrices.",
      author: "Josh",
      created_at: Date.now(),
      link: "https://www.bbc.co.uk/news/technology-53849920"
    },
    {
      title: "Let me know when you’re ready",
      description: "Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.",
      author: "Kojo",
      created_at: Date.now(),
      link: "https://www.bbc.co.uk/news/education-49249684"
    },
  ]
}

  render() {
    return (
      <div className="App">
        <Header />
        <ArticleList articles={this.state.articles} />
      </div>
    );

  }
}

export default App;
