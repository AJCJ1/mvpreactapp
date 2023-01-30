import Post from './post'

// here i'm destructuring, i'm expecting that one of the props will be 'posts'
// So i'm taking just that one out, because this component lists the posts
// then i map the posts, if there are any, and create the mapped html.

const Results = ({ posts }) => {
  return(
    <div className="search">
      {!posts.length ? (
        <h1>No posts Found</h1>
      ) : (
        posts.map(post => (
          <Post
            title={post.title}
            description={post.description}
            id={post.id}
            key={post.id}/>
        ))
      )
    }
    </div>
  )
}

export default Results
