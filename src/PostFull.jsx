import { Link } from "react-router-dom"
import fetchPost from "./FetchPost"
import { useQuery } from '@tanstack/react-query'
import  { useParams, useNavigate } from "react-router-dom"

const PostFull = () => {

  const navigate = useNavigate()
  const { id } = useParams()
  const result = useQuery(["post", id], fetchPost)

  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🎠</h2>
      </div>
    )
  }

  const post = result.data.post

return (

  <div>
    <h1>{post.title}</h1>
    <h2>{post.description}</h2>
    <p>{post.content}</p>

  <h3>
    <Link to="/blog">Go Back 🎠</Link>
  </h3>


  </div>
)


}
export default PostFull
