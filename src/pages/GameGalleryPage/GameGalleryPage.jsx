import { Link } from "react-router-dom"

import { Container } from "react-bootstrap"
import { Button } from "react-bootstrap"
import GameList from "../../components/GameList/GameList"

import './GameGalleryPage.css'

const GameGalleryPage = () => {
    return (
        <div className="GameGalleryPage">
            <Container>
                <GameList />

            </Container>
            <Button as={Link} to={"/juegos/nuevo"}>Crear</Button>
        </div>
    )
}

export default GameGalleryPage