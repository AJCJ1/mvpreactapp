const fetchPost = async ({ queryKey }) => {
  // access first item in query key array
  const id = queryKey[1];

  if (!id) return [];

  const headers = {
    "Access-Control-Allow-Origin": "http://localhost:3000",
  };
  const result = await fetch(`https://mvpblogapi.herokuapp.com/posts/${id}`, {
    headers,
  });

  if (!result.ok) {
    throw new Error(`posts/${id} fetch not ok`);
  }

  return result.json();
};

export default fetchPost;
