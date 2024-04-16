import { Button, Card } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import { MdEdit } from 'react-icons/md';
import React from "react";

const UsuarioCard = ({usuario, editable})=> {

    const estilo = {
        fontSize: '130%'
    }

    return (
        <Card className="tarjeta">
            <Card.Header className="mi-card">.
                { editable ?
                    <div className="mb-1">
                        <Button variant="primary" size="sm" className="me-1"
                        as={NavLink} to={`/editardescripcion/${usuario.idUsuario}`}
                    >
                            <MdEdit style={estilo}/> Editar
                        </Button>
                    </div>
                    : ""
                }
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <Link className="d-flex justify-content-center fs-4 mb-4" to={`/usuario/${usuario.idUsuario}`}>
                        {usuario.nombre}
                    </Link>
                </Card.Title>
                <Card.Text>
                    Correo: {usuario.email}
                </Card.Text>
                <Card.Text>
                    Celular: {usuario.celular}
                </Card.Text>
                <Card.Text>
                    Descripción de experiencia laboral: {usuario.descripcionExperiencia}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export {UsuarioCard}