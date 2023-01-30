const fetchPost = async ({queryKey}) => {
  const id = queryKey[1]

  if (!id) return []

  const apiRes = await fetch(`https://mvpblogapi.herokuapp.com/posts/${id}`)

  if (!apiRes.ok) {
    throw new Error(`posts/${id} fetch not ok`)
  }

  return apiRes.json()
}

export default fetchPost
