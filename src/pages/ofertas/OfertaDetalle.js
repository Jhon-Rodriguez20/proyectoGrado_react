import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import {OFERTADETALLE_GET_ENDPOINT} from '../../connections/helpers/endpoints';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Card, Col, Container, Row } from 'react-bootstrap';
import moment from "moment";

const OfertaDetalle = ()=> {

    const [ofertas, setOferta] = useState(null);
    const usuario = useSelector((estado) => estado.usuario);
    const {id} = useParams();
    const navegar = useNavigate();

    useEffect(()=> {
        axios.get(`${OFERTADETALLE_GET_ENDPOINT}/${id}`)
        .then(respuesta=> {
            setOferta(respuesta.data);
        }).catch(err=> {
            navegar(-1);
        })
    }, [id, navegar]);

    const fechaExpiracionPasada = ofertas && moment(ofertas.fechaExpiracion).isBefore(moment());
    const verificarUsuarioRol = usuario.rol === "1";

    return (
        <Container className="mt-5 mb-5">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <div className='py-2'></div>
                    <h3 className="text-center fw-bold mt-5 mb-5 fs-3 text-uppercase">Detalle oferta</h3>
                    {ofertas && (
                        <Card className="text-center">
                            <Card.Header className="">
                                Descripción del empleo
                            </Card.Header>
                            <Card.Body>
                                <Card.Title className="fs-3 fw-bold mb-4">
                                    {ofertas.titulo}
                                </Card.Title>
                                <Card.Text>
                                    Lugar: {ofertas.ciudad}, {ofertas.pais}
                                </Card.Text>
                                <Card.Text>
                                    Descripción del empleo: {ofertas.descripcion}
                                </Card.Text>
                                <Card.Text>
                                    ¿Qué buscamos en ti?  {ofertas.descripcionExperiencia}
                                </Card.Text>
                                <Card.Text>
                                    Experiencia necesaria: {ofertas.tiempoExperiencia === "1" ? `${ofertas.tiempoExperiencia} año` : `${ofertas.tiempoExperiencia} años`}
                                </Card.Text>
                                <Card.Text>
                                    {!fechaExpiracionPasada && !verificarUsuarioRol && (
                                        <Link className="ms-3 mb-3 d-flex justify-content-center" to={`/oferta/aplicar/${ofertas.idOferta}`}>
                                            Aplicar a oferta
                                        </Link>
                                    )}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                Creado por {ofertas.nombre}, {moment(ofertas.creado).fromNow()}
                            </Card.Footer>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export {OfertaDetalle}