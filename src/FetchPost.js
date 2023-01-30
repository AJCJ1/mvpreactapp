// const fetchPost = async ({queryKey}) => {
//   // access first item in query key array
//   const id = queryKey[0]

//   if (!id) return []

//   const apiRes = await fetch(`https://mvpblogapi.herokuapp.com/posts/${id}`)

//   if (!apiRes.ok) {
//     throw new Error(`posts/${id} fetch not ok`)
//   }

//   return apiRes.json()
// }

// export default fetchPost
