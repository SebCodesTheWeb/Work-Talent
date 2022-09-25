import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  router.push('/hub')

}


export default Home
 