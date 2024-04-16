import { useState, useEffect } from "react";
import { OfertaCard } from "../../components/oferta/OfertaCard";
import axios from "axios";
import { MISOFERTAS_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { Card, Col, Container, Row } from "react-bootstrap";
import { GridLoader } from "react-spinners";
import noFound from "../../assets/image/misOfertasNoEncontradas.png";

function MisOfertas() {

    const [ofertas, setOfertas]= useState([]);
    const [buscando, setBuscando]= useState(false);

    useEffect(() => {
        axios.get(MISOFERTAS_GET_ENDPOINT)
        .then(respuesta => {
            if (Array.isArray(respuesta.data)) {
                setOfertas(respuesta.data);
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
                    <h3 className="text-center mt-5 fw-bold text-uppercase">Mis ofertas</h3>
                    <Card.Body className="mt-5 text-center">
                        {buscando ? <GridLoader color={'#D0021B'} size={30}/> : (ofertas.length ===0 && <img className='mt-5 img-fluid text-center' src={noFound} alt=''/>)}
                        {ofertas.map(oferta => <OfertaCard key={oferta.idOferta} oferta={oferta} editable={true} mostrar={true}/>)}
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {MisOfertas}