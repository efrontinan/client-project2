import axios from "axios"
import { useContext, useState } from "react"

import { Card, Row, Col, Button, Offcanvas, Modal } from "react-bootstrap"
import { Trash3, Pencil, Star } from 'react-bootstrap-icons'

import EditReviewForm from "../EditReviewForm/EditReviewForm"
import StarRatingItem from "../StarRatingItem/StarRatingItem"

import { AuthContext } from "../../contexts/auth.context"
import { UserMessageContext } from "../../contexts/userMessage.context"

const API_URL = import.meta.env.VITE_APP_API_URL

const ReviewCard = ({ author, rating, description, id, fetchReviews, updateRating }) => {

    const { loggedAdmin } = useContext(AuthContext)
    const { createAlert } = useContext(UserMessageContext)

    const [showConfirmationModal, setShowConfirmationModal] = useState(false)
    const [showEditOffcanvas, setShowEditOffcanvas] = useState(false)


    const deleteReview = e => {
        e.preventDefault()
        axios
            .delete(`${API_URL}/reviews/${id}`)
            .then(() => {
                createAlert('Review eliminada')
                fetchReviews()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="ReviewCard">
            <Card className='p-custom text-pop-up-top'>
                <Card.Body className="m-2">
                    <Row>
                        <Col className="d-grid gap-3">

                            <Card.Title className="my-1">
                                <Row>
                                    <Col md="6" sm="3" className="h3 text-primary">
                                        {author}
                                    </Col>
                                    <Col md="6" sm="9" className="rating" >
                                        <StarRatingItem rating={rating} />
                                    </Col>
                                </Row>

                            </Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>

                        </Col>

                        <Col md="1" />

                        <Col md="1">
                            <div className="d-flex d-sm-grid gap-2">
                                {loggedAdmin && <Button onClick={() => setShowConfirmationModal(true)} variant="custom-secondary-outline"><Trash3 /></Button>}
                                <Button onClick={() => setShowEditOffcanvas(true)} variant="custom-secondary-outline"><Pencil /></Button>
                            </div>
                        </Col>

                    </Row>
                </Card.Body>

            </Card>

            <Offcanvas show={showEditOffcanvas}
                onHide={() => setShowEditOffcanvas(false)} placement="end" >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Editar review</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <EditReviewForm reviewId={id} setShowEditOffcanvas={setShowEditOffcanvas} fetchReviews={fetchReviews} updateRating={updateRating} />
                </Offcanvas.Body>
            </Offcanvas>

            <Modal show={showConfirmationModal} onHide={() => setShowConfirmationModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>¿Estas seguro?</Modal.Title>
                </Modal.Header>
                <Modal.Body> ¿Estás seguro de que quieres borrar esta review?</Modal.Body>
                <Modal.Footer>
                    <Button onClick={deleteReview} variant="custom-primary">Sí, eliminar</Button>
                    <Button onClick={() => setShowConfirmationModal(false)} variant="custom-secondary-outline">Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ReviewCard