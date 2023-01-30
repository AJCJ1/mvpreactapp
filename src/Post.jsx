import { Link } from "react-router-dom"

// this is the summary component which will display in the blog list overview
const regex = /https:\/\/[\w-]+\.s3\.[\w-]+\.amazonaws\.com\/[\w-]+\.[\w-]+/g

const Post = ({ id, title, content, description, references }) => {

  const match = content.match(regex)
  const firstLink = match ? match[0] : null

  return (
    <Link to={`/blog/${id}`} className="post">
      <div className="image-container">
        <img alt={title} src={firstLink}></img>
      </div>
      <div className="info">
        <h1>{id}. {title} - {description}</h1>
        <p>{content.substring(0, 250)}... Read More 📖</p>
      </div>
    </Link>
  )
}

export default Post
export { regex }
