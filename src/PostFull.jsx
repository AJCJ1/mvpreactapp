import { Link } from "react-router-dom"
import fetchPost from "./FetchPost"
import { useQuery } from '@tanstack/react-query'
import  { useParams } from "react-router-dom"
import { regex } from "./Post"

const PostFull = () => {

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

  const imageURLs = [...post.content.matchAll(regex)]
  console.log(imageURLs)
  const imgregexp = /\[img:https:\/\/imagestoragemvp.s3.eu-west-2.amazonaws.com\/[^\]]*\]/g;
  const finalContent = post.content.replace(imgregexp, "")

return (

  <div>
    <h1>{post.title}</h1>
    <h2>{post.description}</h2>
    <p>{finalContent}</p>

  <h3>
    <Link to="/blog">Go Back 🎠</Link>
  </h3>


  </div>
)


}
export default PostFull
