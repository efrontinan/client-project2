import { Routes, Route } from "react-router-dom"

import GameGalleryPage from "./../pages/GameGalleryPage/GameGalleryPage"
import HomePage from "./../pages/HomePage/HomePage"
import GameDetailsPage from "./../pages/GameDetailsPage/GameDetailsPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import EventsGalleryPage from "../pages/EventsGalleryPage/EventsGalleryPage"
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage"
import ContactPage from "../pages/ContactPage/ContactPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import AdminPage from "../pages/AdminPage/AdminPage"

const AppRoutes = () => {
    return (
        <div className="AppRoutes">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/juegos" element={<GameGalleryPage />} />
                <Route path="/juegos/detalles/:gameId" element={<GameDetailsPage />} />
                <Route path="/planes" element={<EventsGalleryPage />} />
                <Route path="/sobre-nosotros" element={<AboutUsPage />} />
                <Route path="/contacto" element={<ContactPage />} />
                <Route path="/iniciar-sesion" element={<LoginPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    )
}

export default AppRoutes