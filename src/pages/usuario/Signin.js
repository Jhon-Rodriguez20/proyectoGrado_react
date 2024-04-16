import { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SigninFormulario } from '../../components/usuario/SigninFormulario';
import { autenticacion } from '../../connections/usuarioAcciones';
import Swal from "sweetalert2";

function Signin() {

    const [errores, setErrores]= useState({});
    const conectado = useSelector(estado=> estado.conectado);
    const navegar = useNavigate();
    const enviarAccion = useDispatch();

    useEffect(()=> {
        if(conectado) {
            navegar("/");
        }
    });

    const login=({email, password}) => {

        const error={};
        setErrores(error);

        enviarAccion(autenticacion({email, password}))
        .then(respuesta=> {
            navegar("/");
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
            Toast.fire({
                icon: 'success',
                title: 'Bienvenido, ' + email
            })
        })
        .catch(err=> {
            setErrores({ ingresar: "No se puede iniciar sesion con esas credenciales" });
        });

    }

    return (
        <Container>
            <Row className="justify-content-md-center mt-5 mb-4">
                <Col sm="12" md="8" lg="6">
                    <div className="py-2"></div>
                    <h3 className="text-center mt-5 mb-4 fw-bold fs-3 text-uppercase">Iniciar sesión</h3>
                    <Card.Body>
                        {errores.ingresar && <Alert variant="danger">{errores.ingresar}</Alert>}
                        <SigninFormulario errores={errores} callback={login}></SigninFormulario>
                        <div className="d-flex justify-content-center mt-4">
                            <Link to={'/signup'}>¿No tienes una cuenta? Registrate aquí</Link>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {Signin}