import { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { UsuarioCard } from "../../components/usuario/UsuarioCard";
import { MIDESCRIPCION_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { GridLoader } from "react-spinners";

function MiDescripcion() {

    const [usuarios, setUsuarios]= useState([]);
    const [buscando, setBuscando]= useState(false);

    useEffect(() => {
        axios.get(MIDESCRIPCION_GET_ENDPOINT)
        .then(respuesta => {
            if (Array.isArray(respuesta.data)) {
                setUsuarios(respuesta.data);
            }
            setBuscando(false);
        }).catch(e => {
            console.error(e);
            setBuscando(false);
        });
    }, []);

    return (
        <Container className="mt-5 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <div className='py-2'></div>
                    <h3 className="text-center mt-5 fw-bold text-uppercase">Mi Descripción</h3>
                    <Card.Body className="mt-5 text-center">
                        {buscando ? <GridLoader color={'#D0021B'} size={30}/> : (usuarios.length === 0 && <GridLoader color={'#D0021B'} size={30}/>)}
                        {usuarios.map(usuario => <UsuarioCard key={usuario.idUsuario} usuario={usuario} editable={true} />)}
                    </Card.Body>
                </Col>
            </Row>
        </Container>              
    )
}

export {MiDescripcion}