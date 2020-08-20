import React from 'react';
import './App.css';
import  ArticleList  from './ArticleList'
import Header from './Header';



class App extends React.Component {

state = {
  isVisible: false,
   articles: [{
      title: "2020 Cohort",
      description: ". Nullam euismod sodales venenatis. Morbi ultrices.",
      author: "Josh",
      created_at: Date.now(),
      link: "https://www.bbc.co.uk/news/technology-53849920"
    },
    {
      title: "let me know when you’re ready",
      description: ". Nullam euismod sodales venenatis. Morbi ultrices.",
      author: "Josh",
      created_at: Date.now(),
      link: "https://www.bbc.co.uk/news/education-49249684"
    },
  ]
}

toggleVisibility = (clickEven) => {
  console.log('clicked')
  this.setState((currentState) =>{
    const newVisibility = !currentState.isVisible;
    return {...currentState, isVisible: newVisibility }
  })

}
  

  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.toggleVisibility}>Clicked</button>
          {this.state.isVisible ? <p>Hello</p> : null} 
        <ArticleList articles={this.state.articles} />
      </div>
    );

  }
}

export default App;
