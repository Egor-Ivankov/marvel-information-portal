import { Link } from "react-router-dom";

export default function SingleComicLayout ({data}) {

    const { title, 
            description, 
            pageCount, 
            thumbnail, 
            language, 
            price } = data;

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} />
            <div className="single-comic-text">
                <h2>{title}</h2>
                <p className="description">{description}</p>
                <p className="pages">Pages: {pageCount}</p>
                <p className="languages">Languages: {language}</p>
                <div className="price">Price: {price}</div>
            </div>
            <Link to="/comics" className="link">Back to all</Link>
        </div>
    )
}