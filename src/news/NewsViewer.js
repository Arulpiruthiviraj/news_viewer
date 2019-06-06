import React from 'react';

const NewsViewer=({selectedArticle})=> {
    if (!selectedArticle){
        return(
            <div>
                loading.....
            </div>
        )
    };
    return (

        <div>
            <div className={"ui segment"}>
                <div>
                    <object type="text/html" data={selectedArticle.url} width="800px" height="600px" >
                    </object>
                </div>
            </div>
        </div>
    );
};


export default NewsViewer;