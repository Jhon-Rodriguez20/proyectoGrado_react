import moment from "moment/moment";
import React, {useState} from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function CrearOfertaFormulario({errores, callback,
    oTitulo="", oDescripcion="", oIdArea="", oFechaExpiracion="",
    oDescripcionExperiencia="", oTiempoExperiencia="1", oCiudad="", oPais="", editable}) {
    
    const [titulo, setTitulo]= useState(oTitulo);
    const [descripcion, setDescripcion]= useState(oDescripcion);
    const [idArea, setIdArea]= useState(oIdArea);
    const [fechaExpiracion, setFechaExpiracion]= useState(oFechaExpiracion);
    const [descripcionExperiencia, setDescripcionExperiencia]= useState(oDescripcionExperiencia);
    const [tiempoExperiencia, setTiempoExperiencia]= useState(oTiempoExperiencia);
    const [ciudad, setCiudad]= useState(oCiudad);
    const [pais, setPais]= useState(oPais);

    const enviar = (e)=> {
        e.preventDefault();
        (!editable) ? callback({titulo, descripcion, idArea, fechaExpiracion, descripcionExperiencia, tiempoExperiencia}) : callback({ciudad, pais})    
    }

    return (
        <Form onSubmit={enviar}>
            {!editable &&
                <Row>
                    <Col md="6" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="titulo">
                            <Form.Label className="fw-semibold fs-5">Título</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese el título"
                                value={titulo}
                                onChange={e=>setTitulo(e.target.value)}
                                isInvalid={errores.titulo}
                                pattern="^[A-Za-z\u00C0-\u017F\s]+$"
                                required
                            >
                            </Form.Control>

                            <Form.Control.Feedback>
                                {errores.titulo}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md="6" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="idArea">
                            <Form.Label className="fw-semibold fs-5">Área</Form.Label>
                            <Form.Select
                                value={idArea}
                                onChange={e=> setIdArea(e.target.value)}
                                isInvalid={errores.idArea}
                                required
                            >
                                <option value="">Seleccione</option>
                                <option value="1">Salud</option>
                                <option value="2">Tecnología</option>
                                <option value="3">Atención al cliente</option>
                                <option value="4">Financiero</option>
                                <option value="5">Diseño gráfico</option>
                                <option value="6">Administrativo</option>
                                <option value="7">Otro</option>
                            </Form.Select>
            
                            <Form.Control.Feedback type="invalid">
                                {errores.idArea}
                            </Form.Control.Feedback>
                        </Form.Group>                       
                    </Col>
                </Row>    
            }
            {!editable &&
                <Row>
                    <Col md="12" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="descripcion">
                            <Form.Label className="fw-semibold fs-5">Descripción de empleo</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Ingrese la descripción del empleo"
                                value={descripcion}
                                onChange={e=>setDescripcion(e.target.value)}
                                isInvalid={errores.descripcion}
                                required
                            >
                            </Form.Control>

                            <Form.Control.Feedback>
                                {errores.descripcion}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md="12" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="descripcionExperiencia">
                            <Form.Label className="fw-semibold fs-5">Descripción de experiencia</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Ingrese una descripción de experiencia válida"
                                value={descripcionExperiencia}
                                onChange={e=>setDescripcionExperiencia(e.target.value)}
                                isInvalid={errores.descripcionExperiencia}
                                required
                            >
                            </Form.Control>

                            <Form.Control.Feedback>
                                {errores.descripcionExperiencia}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
            }
            {!editable &&
                <Row>
                    <Col md="6" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="tiempoExperiencia">
                            <Form.Label className="fw-semibold fs-5">Tiempo de experiencia en años</Form.Label>
                            <Form.Control
                                type="number"
                                min="1"
                                max="20"
                                value={tiempoExperiencia}
                                onChange={e=>setTiempoExperiencia(e.target.value)}
                                isInvalid={errores.tiempoExperiencia}
                                required
                            >
                            </Form.Control>

                            <Form.Control.Feedback>
                                {errores.tiempoExperiencia}
                            </Form.Control.Feedback>
                        </Form.Group>                        
                    </Col>

                    <Col md="6" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="fechaExpiracion">
                            <Form.Label className="fw-semibold fs-5 mx-4 ms-1">Fecha de expiración</Form.Label>
                            <Form.Control
                                type="date"
                                value={fechaExpiracion}
                                min={moment().format('YYYY-MM-DD')}
                                onChange={e=>setFechaExpiracion(e.target.value)}
                                isInvalid={errores.fechaExpiracion}
                                required
                            />

                            <Form.Control.Feedback type="invalid">
                                Ingrese una fecha válida que sea superior a la actual.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
            }
            {editable &&
                <Row>
                    <Col md="6" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="ciudad">
                            <Form.Label className="fw-semibold fs-5">Ciudad</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese la ciudad"
                                value={ciudad}
                                onChange={e=>setCiudad(e.target.value)}
                                isInvalid={errores.ciudad}
                                pattern="^[A-Za-z\u00C0-\u017F\s]+$"
                                required
                            >
                            </Form.Control>

                            <Form.Control.Feedback>
                                {errores.ciudad}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md="6" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="pais">
                            <Form.Label className="fw-semibold fs-5">País</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese la país"
                                value={pais}
                                onChange={e=>setPais(e.target.value)}
                                isInvalid={errores.pais}
                                pattern="^[A-Za-z\u00C0-\u017F\s]+$"
                                required
                            >
                            </Form.Control>

                            <Form.Control.Feedback>
                                {errores.pais}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
            }
            <div className="d-flex justify-content-center">
                <Button variant="danger" type="submit" className="mt-4">
                    {!editable ? "Crear " : "Editar "}
                    oferta
                </Button>
            </div>
        </Form>
    )
}

export {CrearOfertaFormulario}