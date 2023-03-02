import { firestore } from '../firebase'

function BlogPage({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>By {post.author}</p>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const postsRef = firestore.collection('posts')
  const snapshot = await postsRef.get()
  const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  return { props: { posts } }
}

export default BlogPage
