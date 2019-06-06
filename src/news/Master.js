import React,{useState} from 'react';
import SearchBar from "./SearchBar";
import NewsApi, {NewsApiKey} from "../apis/NewsApi";
import NewsList from "./NewsList";
import NewsViewer from "./NewsViewer";

function Master() {
    const [searchResults, setSearchResults] = useState('');
    const [selectedArticle, setSelectedArticle] = useState(null);

    const onSearchSubmit=async term=>{
        const response= await NewsApi.get('',{
            params:{
                q:term,
                apiKey:NewsApiKey,
            }
        });
        setSearchResults(response.data.articles);
    };
    const onArticleSelect=article=>{
        setSelectedArticle(article)
    };

    return (
        <div className={"ui container"}>
            <SearchBar formSubmit={onSearchSubmit}/>
            <div className={"ui grid"}>
                <div className={"ui row"}>
                    <div className={"eleven wide column"}>
                        <NewsViewer selectedArticle={selectedArticle}/>
                    </div>
                    <div className={"five wide column"}>
                        <NewsList onArticleSelect={onArticleSelect}  Articles={searchResults}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Master;
