import React from 'react';
import NewsItem from "./NewsItem";

const NewsList =({Articles,onArticleSelect})=> {
    const renderedResults=Articles.length > 0 ?(
        Articles.map((Article,index)=>{
            return <NewsItem
                key={index}
                onArticleSelect={onArticleSelect}
                article={Article}/>
        })):(
        <p>No Record</p>
    );
    return (
        <div className={"ui relaxed divided list"} >
            {renderedResults}
        </div>
    );
};
export default NewsList;