import React from 'react';

const ArticleCard = ({title, description, link, created_at, author}) => {
  // const handleClick = (event) => {

  // }

  return (
    <section>
      <li className="articles" key={title}>
        <h1 className="article_title"><a href={link} target="blank">{title}</a></h1>
        <p className="article_desc">{description}</p>
        <h4>{author}</h4>
        <a href={link} target="blank">{link}</a>
        <p>{created_at}</p>

        {this.state.isOpen ? <p> Close</p> : null}
        <button className="btn" onClick={() => this.toggleVisibility()}>toggle</button>
        </li>
    </section>
  );
};

export default ArticleCard;