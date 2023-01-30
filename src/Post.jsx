import { Link } from "react-router-dom"

const Post = ({ id, title, content, description, references }) => {
  let hero = ""

  return (
    <Link to={`/blog/${id}`} className="post">
      <div className="image-container">
        <img src={hero} alt={title} />
      </div>
      <div className="info">
        <h1>{title} - {description}</h1>
      </div>
      <div className="content">
        <p>{content}</p>
        <p>{references}</p>
      </div>
    </Link>
  )
}

export default Post
