import Logo from '../Logo/Logo';
import Navegação from '../Navegação/Navegação';
import styles from './Topo.module.css';
function Topo() {
    return ( 
    <header className={styles.topo}>
        <Logo/>
        <Navegação />
            
    </header> 
      );
}
export default Topo;