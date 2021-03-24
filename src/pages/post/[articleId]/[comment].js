import { useRouter } from 'next/router'
import Navigation from '../../../components/Navigation';

const Post = () => {
  const router = useRouter()
  console.log( 'router', router );
  const { pid, comment } = router.query

  return (
  <>
    <Navigation />
    <p>Post: {pid}</p>
    <p>Comment: {comment}</p>

  </>
  );
}

export default Post
