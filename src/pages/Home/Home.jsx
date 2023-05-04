import {Input, Text} from "@nextui-org/react"
import styles from "./Home.module.css"
const Home = ( )=>{
    return (  <div className={styles.login}>
        <div className={styles.heroImg}>
          {/* <img
            src='https://res.cloudinary.com/dj80e8qqp/image/upload/v1668620919/657417-867137095_m1i39p.jpg'
            alt='Headphone img'
          /> */}
          imagen
        </div>
        <div className={styles.form}>
          <div>
            <Text h1>Hifility</Text>
            <Text h3>Inicia sesión</Text>
          </div>
        </div>
      </div>)
}
export default Home 
