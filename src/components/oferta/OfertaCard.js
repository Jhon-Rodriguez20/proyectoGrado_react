import { Button, Card, Badge } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import { EliminarOfertaButton } from "../../components/oferta/EliminarOfertaBoton";
import { MdEdit } from 'react-icons/md';
import moment from 'moment';
import React from "react";

const OfertaCard= ({oferta, editable, mostrar})=> {

    const estilo = {
        fontSize: '130%'
    }

    const fecha = new Date(oferta.fechaExpiracion);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fecha.toLocaleString('es-ES', options);

    const fechaExpirada = new Date() > fecha;

    return (
        <Card className="tarjeta mt-5 mb-4">
            <Card.Header className="mi-card mb-1">
                <Card.Text className="mt-3">
                    {fechaExpirada ? `Terminó en el día ${fechaFormateada}` : `Termina en el día ${fechaFormateada}`}
                </Card.Text>
                { editable ?
                <div className="mb-1 mt-1">
                    <Button variant="primary" size="sm" className="me-3 mb-2 mt-2"
                        as={NavLink} to={`/editaroferta/${oferta.idOferta}`}
                    >
                        <MdEdit style={estilo}/> Editar        
                    </Button>

                    <EliminarOfertaButton id={oferta.idOferta} titulo={oferta.titulo} />
                </div>
                : ""
                }
            </Card.Header>
            <Card.Body>
                <Card.Title className="mb-4">
                    <Link className="d-flex justify-content-center fs-2 mb-4" to={`/oferta/${oferta.idOferta}`}>
                        {oferta.titulo}
                    </Link>
                    
                    {fechaExpirada && (
                        <Badge bg="danger" className="ms-2">
                            Expirada
                        </Badge>
                    )}
                </Card.Title>
                <Card.Text>
                    Descripción: {oferta.descripcion}
                </Card.Text>
                <Card.Text>
                    Lugar: {oferta.ciudad}, {oferta.pais}
                </Card.Text>
                <Card.Text>
                    Tiempo de experiencia: {oferta.tiempoExperiencia === "1" ? `${oferta.tiempoExperiencia} año` : `${oferta.tiempoExperiencia} años`}
                </Card.Text>
                <Card.Text>
                    Lo que buscamos: {oferta.descripcionExperiencia}
                </Card.Text>
                <Card.Text>
                    { mostrar ?
                        <Link className="ms-2 mb-4" to={`/respuestasofertas/${oferta.idOferta}`}>
                            Ver los aplicantes
                        </Link>
                        : ""
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                Creado por {oferta.nombre}, {moment(oferta.creado).fromNow()}
            </Card.Footer>
        </Card>
    )
}

export {OfertaCard}