

import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.scss';

const ArticleCardComponent = (
    {
        title,
        image,
        description,
        slug,
    }
) => {
    const history = useHistory();
    
    return (
        <div className="article-card-component px-4 py-4" id="article-card-component">
            <div class="bg-white mb-6 shadow-xl rounded-lg px-4 py-4">
                <div class="rounded-lg w-96">
                    {image && <img src={image} alt=""
                        class="w-full h-20 transition duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100" />}

                    <div class="px-10 py-6 mb-10 text-center">
                        {title && <div class="title mb-4 text-3xl font-bold uppercase">{title}</div>}
                        {description && <span class="text-sm">
                            {description}
                        </span>}
                    </div>
                    <button
                        class="button w-full h-16 text-lg font-extrabold transition duration-300 rounded-b-lg hover:bg-purple-700"
                        onClick={() => history.push(`/articulo/${slug}`)}
                    >
                        Ver más
                    </button>
                </div>
            </div>
        </div>
    )
}

export { ArticleCardComponent };
