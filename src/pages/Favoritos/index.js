import Banner from 'Componetes/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'Componetes/Titulo';
import Card from 'Componetes/Card';
import { useFavoritoContext } from 'Contextos/Favoritos';

export default function Favoritos() {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}