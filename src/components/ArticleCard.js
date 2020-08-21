import React from 'react';

const ArticleCard = ({title, description, link, created_at, author, isOpen}) => {
  // const handleToggleClick = (event) => {

  // }

  return (
    <section>
      <li className="articles" key={title}>
        <h1 className="article_title">{title}</h1>
        

        {isOpen ? 
        <div>
          <p className="article_desc">description: {description}</p>
          <h4>{author}</h4>
          <a href={link} target="blank">{link}</a>
          <p>{created_at}</p>
        </div>
          : null} 

      <button className="btn" onClick={() => this.toggleVisibility()}>toggle</button>
      </li>
    </section>
  );
};

export default ArticleCard;