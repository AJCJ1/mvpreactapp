import { Link } from "react-router-dom"

// this is the summary component which will display in the blog list overview

const Post = ({ id, title, content, description, references }) => {
  return (
    <Link to={`/blog/${id}`} className="post">
      <div className="image-container">
        {/* empty for now, will be the hero image */}
        {/* <img src={} alt={title} /> */}
        {/* this eventually needs to be first image link */}
        {/* could name correctly then interpolate with s3bucket/id */}
      </div>
      <div className="info">
        <h1>{title} - {description}</h1>
      </div>
    </Link>
  )
}

export default Post
