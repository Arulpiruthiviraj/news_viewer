import React from 'react';
const NewsItem =({article,onArticleSelect}) =>{
    return (
        <div className={"article-item item"} onClick={()=>onArticleSelect(article)}>
            <img className={"ui image"} src={article.urlToImage} alt={"Article Image"} width={"50px"} height={"50px"}/>
            <div className={"content"}>
                <div className={"header"}>
                    {article.title}
                </div>
            </div>
        </div>
    );
};
export default NewsItem;