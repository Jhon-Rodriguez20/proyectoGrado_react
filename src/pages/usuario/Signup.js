import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { SIGNUP_POST_ENDPOINT } from '../../connections/helpers/endpoints';
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { SignupFormulario } from '../../components/usuario/SignupFormulario';
import Swal from "sweetalert2";

const Signup = ()=> {

    const [errores, setErrores] = useState({});
    const navegar = useNavigate();

    const registro = async({nombre, email, idArea, idRol, password}) => {

        const error={};
        setErrores(error);

        axios.post(SIGNUP_POST_ENDPOINT, {nombre, email, idArea, idRol, password},
            {headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}}
            ).then(response=> {
                console.log(response);
                navegar("/signin");
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Usuario creado.",
                    text: `Tu correo electrónico es "${email}"`,
                    showConfirmButton: false,
                    timer: 1300
                });
            }).catch(err=> {
                Swal.fire({
                    icon: 'error',
                    title: 'Error 404',
                    text: 'Algo salió mal con el envío de formularios. Por favor vuelve a intentarlo.'
                });
            })
    }

    return (
        <Container>
            <Row className="justify-content-md-center mt-5 mb-4">
                <Col sm="12" md="8" lg="6">
                    <div className="py-2"></div>
                    <h3 className="text-center mt-5 fw-bold fs-3 text-uppercase">Registro usuario</h3>
                    <Card.Body className='mt-4'>
                        {errores.crear && <Alert variant="danger">{errores.crear}</Alert>}
                        <SignupFormulario errores={errores} callback={registro}></SignupFormulario>
                        <div className="mt-4 text-center">
                            <Link to={'/signin'} className="text-center">¿Ya tienes una cuenta? Iniciar sesión aquí</Link>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {Signup}