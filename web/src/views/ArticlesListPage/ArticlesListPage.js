import React, { Component } from "react";
import { ArticleCardComponent } from "../../components/ArticleCardComponent/ArticleCardComponent";
import { articles } from '../../assets/articlesMock.json';

import './styles.scss';

class ArticlesListPage extends Component {

  getArticles() {
    const articlesContent = [];
    articles.forEach((article) => {
      articlesContent.push(
        <ArticleCardComponent
          title={article.title}
          slug={article.slug}
          image={article.image}
          description={article.description}
        />
      )
    })
    return articlesContent;
  }


  render() {
    return (
      <>
        <div className="bg-blueGray-100" id="articles-list-page">
          <div className="articles-container">
            {this.getArticles()}
            {/* <ArticleCardComponent/>
            <ArticleCardComponent/>
            <ArticleCardComponent/>
            <ArticleCardComponent/>
            <ArticleCardComponent/>
            <ArticleCardComponent/> */}
          </div>
        </div>
      </>
    );   
  }
}

export { ArticlesListPage };
