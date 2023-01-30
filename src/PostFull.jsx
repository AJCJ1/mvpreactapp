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

  const imgregexp = /\[img:https:\/\/imagestoragemvp.s3.eu-west-2.amazonaws.com\/[^\]]*\]/g;
  const nameRegex = /([\w\d_-]*)\.?[^\\/]*$/i

  let prevPosition = 0
  let filteredContent = []
  let textArray = []
  let imageNames = []

  for (let i=0; i < imageURLs.length; i++) {
    // index -5 because link starts after [img:
    // cuts text at each image breakpoint, pushes into textArray
    textArray.push(post.content.substring(prevPosition,
                                          (imageURLs[i].index - 5)).replace(imgregexp, ""))
    prevPosition = imageURLs[i].index - 5
    // take each image, make array imageNames hold name of image
    imageNames = imageURLs.map((link) => {
      return link = link[0].match(nameRegex)
    })
    // takes each item turns into HTML with corresponding image.
    // alt equal to the file name in URL
    filteredContent.push(
      <>
        <p className="text-main">{textArray[i]}</p>
        <img src={imageURLs[i] ? imageURLs[i] : null } alt={imageNames[i][1]}></img>
      </>
    );
  }
  // const finalContent = post.content.replace(imgregexp, "")


return (
  <div>
    { filteredContent }
    <h3>
      <Link to="/blog">Go Back 🎠</Link>
    </h3>
  </div>
)


}
export default PostFull
