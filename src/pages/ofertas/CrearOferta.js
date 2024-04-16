import { useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CREAROFERTA_POST_ENDPOINT } from "../../connections/helpers/endpoints";
import {CrearOfertaFormulario} from "../../components/oferta/CrearOfertaFormulario";
import Swal from "sweetalert2";

function CrearOferta() {

    const [errores, setErrores]= useState({});
    const navegar= useNavigate();

    const crear= async ({titulo, descripcion, idArea, fechaExpiracion, descripcionExperiencia, tiempoExperiencia}) => {

        const errores={};
        setErrores(errores);

        axios.post(CREAROFERTA_POST_ENDPOINT, {titulo, descripcion, idArea, fechaExpiracion, descripcionExperiencia, tiempoExperiencia}
            ).then(response=>{
                navegar(`/oferta/${response.data.idOferta}`);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Oferta creada con éxito.",
                    text: "Creaste esta oferta de empleo.",
                    showConfirmButton: false,
                    timer: 1800
                });
            })
            .catch(error=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Error 404',
                    text: 'Algo salió mal con el envío de formularios. Por favor vuelve a intentarlo.',
                })
            })
    }

    return (
        <Container>
            <Row className="justify-content-md-center mt-5 mb-4">
                <Col sm="12" md="10" lg="6">
                    <div className='py-2'></div>
                    <h3 className="text-center mt-5 fw-bold fs-3 text-uppercase">Crear oferta</h3>
                    <Card.Body className='mt-4'>
                        {errores.new && <Alert variant="danger">{errores.new}</Alert>}

                        <CrearOfertaFormulario errores={errores} callback={crear} editable={false}/>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {CrearOferta}