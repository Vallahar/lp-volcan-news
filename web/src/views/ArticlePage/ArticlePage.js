import React, { Component } from "react";
import './styles.scss';
import { articles } from '../../assets/articlesMock.json';


class ArticlePage extends Component {

    getArticleContent(article) {
        return (
            <div>

                <div class="article justify-center w-full md:w-2/5 mx-auto">
                    <div class="text-gray-800 text-6xl px-5 py-6 font-bold leading-none">
                        {article.title}
                    </div>
                    {article.image && <>
                        <div class="article-image">
                            <img src={article.image} alt="" />
                        </div>
                        {article.imageTitle && <div class="text-gray-600 text-normal mx-5">
                            <p class="border-b py-3">{article.imageTitle}</p>
                        </div>}
                    </>}

                    {/* <div class="w-full text-gray-600 font-thin italic px-5 pt-3">
                        By <strong class="text-gray-700">Quint Forgey</strong><br />
                        07/17/2020 09: 57 AM EDT<br />
                        Updated: 07/17/2020 10: 33 AM EDT
                    </div> */}

                    <div class="article-text px-5 mx-auto">
                        {article.text}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { id } = this.props.match.params;
        const selectedArticle = articles.find((article) => article.slug === id);
        return (
            <>
                <div className="bg-blueGray-100" id="article-page">
                    <div className="article-container">
                        {selectedArticle ?
                            <div>{this.getArticleContent(selectedArticle)}</div> :
                            <div className="not-found">Articulo no encontrado</div>
                        }
                    </div>
                </div>
            </>
        );
    }
}

export { ArticlePage };
