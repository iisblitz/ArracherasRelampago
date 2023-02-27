import { firestore } from '../firebase'

function GalleryPage({ images }) {
  return (
    <div>
      {images.map(image => (
        <div key={image.id}>
          <img src={image.url} alt={image.title} />
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const imagesRef = firestore.collection('gallery')
  const snapshot = await imagesRef.get()
  const images = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  return { props: { images } }
}

export default GalleryPage
