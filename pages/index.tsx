import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <h3>hello world</h3>
        </div>
    )
}

export default Home
