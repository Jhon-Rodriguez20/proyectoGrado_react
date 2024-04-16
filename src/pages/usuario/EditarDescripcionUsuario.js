import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ACTUALIZARDESCRIPCIONUSUARIO_PUT_ENDPOINT, USUARIODETALLE_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { SignupFormulario } from "../../components/usuario/SignupFormulario";
import { Alert, Container, Row, Col, Card } from "react-bootstrap";
import Swal from "sweetalert2";

function ActualizarDescripcion() {

    const {id}= useParams();
    const [errores, setErrores]= useState({});
    const [usuario, setUsuario]= useState(null);
    const navegar = useNavigate();

    useEffect(()=> {
        axios.get(`${USUARIODETALLE_GET_ENDPOINT}/${id}`
        ).then(respuesta=> {
            setUsuario(respuesta.data);
        }).catch(error=> {
            navegar("/")
        })
    }, [id, navegar]);

    const actualizar = async({celular, descripcionExperiencia, urlLinkedin, urlCv})=> {

        const error={};
        setErrores(error);

        axios.put(`${ACTUALIZARDESCRIPCIONUSUARIO_PUT_ENDPOINT}/${usuario.idUsuario}`, {celular, descripcionExperiencia, urlLinkedin, urlCv},
            ).then(respuesta=> {
                navegar(`/usuario/${usuario.idUsuario}`);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Usuario editado con éxito.",
                    showConfirmButton: false,
                    timer: 2000
                });
            })
            .catch(err=> {
                Swal.fire({
                    icon: 'error',
                    title: 'Error 404',
                    text: 'Algo salió mal con el envío de formularios. Por favor vuelve a intentarlo.',
                });
            })
        console.log()
    }

    return (
        <Container className="mt-5 mb-4">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <div className='py-2'></div>
                    <h3 className="mt-5 text-center fw-bold text-uppercase">Actualizar datos personales</h3>
                    <Card.Body>
                        {errores.update && <Alert variant="danger">{errores.update}</Alert>}

                        { usuario && 
                            <SignupFormulario
                                errores={errores}
                                callback={actualizar}
                                uCelular={usuario.celular}
                                uDescripcionExperiencia={usuario.descripcionExperiencia}
                                uUrlLinkedin={usuario.urlLinkedin}
                                uUrlCv={usuario.urlCv}
                                editable={true}
                            ></SignupFormulario>
                        }
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {ActualizarDescripcion}