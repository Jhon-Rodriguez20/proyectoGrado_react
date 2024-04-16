import { useState, useEffect } from "react";
import { RespuestaCard } from "../../components/oferta/RespuestaCard";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";
import { MISRESPUESTASOFERTAS_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { GridLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import noFound from "../../assets/image/misRespuestasNoEncontradas.jpeg";

function MisRespuestasOfertas() {

    const {id} = useParams();
    const [respuestas, setRespuestas]= useState([]);
    const [buscando, setBuscando]= useState(false);

    useEffect(() => {
        axios.get(`${MISRESPUESTASOFERTAS_GET_ENDPOINT}/${id}`)
        .then(respuesta => {
            if (Array.isArray(respuesta.data)) {
                setRespuestas(respuesta.data);
            }
            setBuscando(false);
        }).catch(e => {
            console.error(e);
            setBuscando(false);
        });
    }, [id]);

    return (
        <Container className="mt-5 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <div className='py-2'></div>
                    <h3 className="text-center mt-5 fw-bold text-uppercase">Respuestas de oferta</h3>
                    <Card.Body className="mt-5 text-center">
                        {buscando ? <GridLoader color={'#D0021B'} size={30}/> : (respuestas.length ===0 && <img className='mt-5 img-fluid text-center' src={noFound} alt=''/>)}
                        {respuestas.map(respuesta => <RespuestaCard key={respuesta.idRespuesta} respuesta={respuesta}/>)}
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {MisRespuestasOfertas}