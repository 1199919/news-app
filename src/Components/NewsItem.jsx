/* eslint-disable react/prop-types */
import image from '../assets/news img.jpg'

const NewsItem = ({title,description,url,src}) => {
  return (
<div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{width: "300px"}}>
  <img src={src?src:image} style={{height:"200px",width:"280px"}} className="card-img-top"  alt="..."/>
  <div className="card-body" >
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News is always delivered on this website in a moments time"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>

  )
}

export default NewsItem


