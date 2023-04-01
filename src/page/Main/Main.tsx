import Header from '../../components/header/header'
import Menu from '../../components/menu/Menu'

import styles from './styles.module.scss'

interface IMain{
}
export const Main=()=>{
    return(
        <div className={styles.main}>
            <Header/>
            <div className={styles.content}>
            <Menu/>
            </div>
        </div>
    )

}

export default Main