import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';

export default function CabecalhoLink({ url, children }) {
    return (
        <Link to={url} className={styles.link}>
            { children }
        </Link>
    )
}