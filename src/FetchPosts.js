async function fetchPosts() {
  const headers = {
    "Access-Control-Allow-Origin": "http://localhost:3000"
  }
  const result = await fetch(
    `https://mvpblogapi.herokuapp.com/posts`,
    { headers }
  )
  // if the return from the API is not ok (400 or 500 error), throw the below error
  if (!result.ok) {
    throw new Error(`posts fetch not okay`)
  }
  const json = await result.json()
  return json
}

export default fetchPosts

// this API fetch retrieves Post.all, to display all blog posts in the /blog page.
