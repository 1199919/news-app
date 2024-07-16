import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";

//${import.meta.env.VITE_API_KEY}

const NewsBoard = ({category}) => {

  const [article,setArticle] = useState([]);

  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=cd18484a3a834cf08776ab4c6ade607e`;
    fetch(url).then(res=>res.json()).then(data=>setArticle(data.articles))
  },[category]);

  console.log(article);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {article.map((news,index)=>{
          return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    

    </div>
  )
}

export default NewsBoard
