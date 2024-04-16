import { useState } from "react";
import { Alert, Container, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { APLICAROFERTA_POST_ENDPOINT } from "../../connections/helpers/endpoints";
import { CrearRespuestaFormulario } from "../../components/oferta/AplicarOfertaFormulario";
import Swal from "sweetalert2";

function CrearRespuesta() {

    const [errores, setErrores]= useState({});
    const navegar = useNavigate();

    const crear = async({idOferta, experienciaDescripcion, experienciaTiempo})=> {

        const errores={};
        setErrores(errores);

        axios.post(APLICAROFERTA_POST_ENDPOINT, {idOferta, experienciaDescripcion, experienciaTiempo}
            ).then(response=> {
                navegar("/");
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "¡Oferta aplicada!",
                    text: "Aplicaste a esta oferta de empleo.",
                    showConfirmButton: false,
                    timer: 1800
                });
            })
            .catch(error=> {
                Swal.fire({
                    icon: 'error',
                    title: 'Error 404',
                    text: 'Algo salió mal con el envío de formularios. Por favor vuelve a intentarlo.',
                });
            })
    }

    return (
        <Container>
            <Row className="justify-content-md-center mt-5 mb-4">
                <Col sm="12" md="8" lg="6">
                    <div className='py-2'></div>
                    <h3 className="text-center mt-5 fw-bold fs-3 text-uppercase">Aplicar a oferta</h3>
                    <Card.Body>
                        {errores.new && <Alert variant="danger">{errores.new}</Alert>}

                        <CrearRespuestaFormulario errores={errores} callback={crear}></CrearRespuestaFormulario>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {CrearRespuesta}