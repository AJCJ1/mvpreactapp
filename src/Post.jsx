import { Link } from "react-router-dom";
import { URLRegexp } from "./Regexp_Constants";

// summary component which will display in the blog list overview

const Post = ({ id, title, content, description, references }) => {
  const match = content.match(URLRegexp);
  const firstLink = match ? match[0] : null;

  return (
    <Link to={`/blog/${id}`} className="post">
      <div className="image-container">
        <img alt={title} src={firstLink}></img>
      </div>
      <div className="info">
        <h1>
          {id}. {title} - {description}
        </h1>
        <p>{content.substring(0, 250)}... Read More 📖</p>
      </div>
    </Link>
  );
};

export default Post;
