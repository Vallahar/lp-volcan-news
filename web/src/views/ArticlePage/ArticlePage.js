import React, { Component } from "react";
import './styles.scss';

class ArticlePage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.api.posts.read({slug: id})
      .then((post) => {
        this.setState({post: post});
      })
      .catch((err) => {
        console.error(err);
        this.setState({post: undefined});
      });
  }

    getArticleContent(post) {
        return (
            <div>
                <div class="article justify-center w-full md:w-2/5 mx-auto">
                    <div class="text-gray-800 text-6xl px-5 py-6 font-bold leading-none">
                        {post.title}
                    </div>
                    {post.feature_image && <>
                        <div class="article-image">
                            <img src={post.feature_image} alt="" />
                        </div>
                    </>}

                    {/* <div class="w-full text-gray-600 font-thin italic px-5 pt-3">
                        By <strong class="text-gray-700">Quint Forgey</strong><br />
                        07/17/2020 09: 57 AM EDT<br />
                        Updated: 07/17/2020 10: 33 AM EDT
                    </div> */}

                    <div class="article-text px-5 mt-12 mx-auto">
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { post } = this.state;
        return (
            <>
                <div className="bg-blueGray-100" id="article-page">
                    <div className="article-container">
                        {post ?
                            <div>{this.getArticleContent(post)}</div> :
                            <div className="not-found">Articulo no encontrado</div>
                        }
                    </div>
                </div>
            </>
        );
    }
}

export { ArticlePage };
