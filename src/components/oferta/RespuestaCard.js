import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const RespuestaCard = ({respuesta})=> {

    const fecha = new Date(respuesta.fechaAplicado);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fecha.toLocaleString('es-ES', options);

    return (
        <Card className="tarjeta mt-4 mb-4">
            <Card.Header className="fw-semibold">
                Aplicó para {respuesta.titulo}
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <Link className="d-flex justify-content-center fs-2 mt-3 mb-4" to={`/usuario/${respuesta.idUsuario}`}>
                        {respuesta.nombre}
                    </Link>
                </Card.Title>
                <Card.Text>
                    Correo: {respuesta.email}
                </Card.Text>
                <Card.Text>
                    Celular: {respuesta.celular}
                </Card.Text>
                <Card.Text>
                    Descripcion de experiencia de la persona: {respuesta.experienciaDescripcion}
                </Card.Text>
                <Card.Text>
                    Tiempo de experiencia en el cargo: {respuesta.experienciaTiempo}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                Aplicó en el día {fechaFormateada}
            </Card.Footer>
        </Card>
    )
}

export {RespuestaCard}