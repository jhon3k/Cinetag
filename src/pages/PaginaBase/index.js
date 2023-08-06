import Cabecalho from "Componetes/Cabecalho";
import Container from "Componetes/Container";
import Rodape from "Componetes/Rodape";
import FavoritosProvider from "Contextos/Favoritos";
import { Outlet } from "react-router-dom";

export default function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />

        </main>
    )
}