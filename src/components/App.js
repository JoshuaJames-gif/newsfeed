import React from 'react';
import './App.css';
import  ArticleList  from './ArticleList'
import Header from './Header';



function App () {
  return (
    <div className="App">
      <Header />
      <ArticleList />
    </div>
  );
}

export default App;
