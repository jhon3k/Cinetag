import styles from './NaoEncontrada.module.css';
import Ops from './Ops.png';

export default function NaoEncontrada() {
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <img src={Ops} alt='Menino enburado' />
            <p>O conteúdo que você procura não foi encontrado!</p>
        </section>
    )
}