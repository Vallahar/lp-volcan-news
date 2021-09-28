import React, { Component } from "react";
import { ArticleCardComponent } from "../../components/ArticleCardComponent/ArticleCardComponent";

import './styles.scss';

class ArticlesListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.props.api.posts
      .browse({ limit: 5, include: 'tags,authors' })
      .then((posts) => {
        this.setState({posts: posts});
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getArticles() {
    const articlesContent = [];
    const { posts } = this.state;

    posts.forEach((post) => {
      articlesContent.push(
        <ArticleCardComponent
          title={post.title}
          slug={post.slug}
          image={post.feature_image}
          description={post.excerpt}
        />
      );
    });

    return articlesContent;
  }


  render() {
    return (
      <>
        <div className="bg-blueGray-100" id="articles-list-page">
          <div className="articles-container">
            {this.getArticles()}
          </div>
        </div>
      </>
    );
  }
}

export { ArticlesListPage };
