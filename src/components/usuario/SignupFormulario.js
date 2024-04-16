import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const SignupFormulario = ({errores, callback,
    uNombre="", uEmail="", uIdArea="", uIdRol="2", uPassword="", uCelular="", uDescripcionExperiencia="",
    uUrlLinkedin="", uUrlCv="", editable})=> {

    const [nombre, setNombre]= useState(uNombre);
    const [email, setEmail]= useState(uEmail);
    const [idArea, setIdArea]= useState(uIdArea);
    const [idRol, setIdRol]= useState(uIdRol);
    const [password, setPassword]= useState(uPassword);
    const [celular, setCelular]= useState(uCelular);
    const [descripcionExperiencia, setDescripcionExperiencia]= useState(uDescripcionExperiencia);
    const [urlLinkedin, setUrlLinkedin]= useState(uUrlLinkedin);
    const [urlCv, setUrlCv]= useState(uUrlCv);
    const [pdf, setPdfBytes] = useState(null);

    const handleFileChange = (e)=> {
        const file = e.target.files[0];
        if(file && file.type === 'application/pdf') {
            setUrlCv(file);
            convertirPDFToBytes(file);

        } else {
            setUrlCv(null);
            setPdfBytes(null);
        }
    }    

    const convertirPDFToBytes = async (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
    
            reader.onload = (event) => {
                const arrayBuffer = event.target.result;
                const uint8Array = new Uint8Array(arrayBuffer);
                console.log(uint8Array);
                setPdfBytes(uint8Array);
                resolve(uint8Array);
            }
    
            reader.onerror = (error) => {
                reject(error);
            }
    
            reader.readAsArrayBuffer(file);
        });
    }
            

    const enviarFormulario = (e) => {
        e.preventDefault();
        (!editable) ? callback({nombre, email, idArea, idRol, password}) : callback({celular, descripcionExperiencia, urlLinkedin, urlCv});
    }    

    return (
        <Form onSubmit={enviarFormulario} encType="multipart/form-data">
            {!editable &&
                <Form.Group className="mt-3 mb-3" controlId="nombre">
                    <Form.Label className="fw-semibold fs-5">Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su nombre completo"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        isInvalid={errores.nombre}
                        pattern="^[A-Za-z\u00C0-\u017F\s]+$"
                        required
                    />
                
                    <Form.Control.Feedback type="invalid">
                        {errores.nombre}
                    </Form.Control.Feedback>
                </Form.Group>
            }
            {!editable &&
                <Form.Group className="mt-3 mb-3" controlId="email">
                    <Form.Label className="fw-semibold fs-5">Correo electrónico</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingrese su correo"
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                        isInvalid={errores.email}
                        required 
                    />

                    <Form.Control.Feedback type="invalid">
                        {errores.email}
                    </Form.Control.Feedback>
                </Form.Group>
            }
            {!editable &&
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
            }
            {!editable &&
                <Form.Group className="formularioOculto mt-3 mb-3" controlId="idRol">
                    <Form.Label className="fw-semibold fs-5">Rol</Form.Label>
                    <Form.Control
                        type="text"
                        value={idRol}
                        onChange={e=> setIdRol(e.target.value)}
                        isInvalid={errores.idRol}
                        required
                    >
                    </Form.Control>

                    <Form.Control.Feedback type="invalid">
                        {errores.idRol}
                    </Form.Control.Feedback>
                </Form.Group>
            }
            {!editable &&
                <Form.Group className="mt-3 mb-3" controlId="password">
                    <Form.Label className="fw-semibold fs-5">Contraseña</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña"
                    value={password}
                    onChange={e=> setPassword(e.target.value)}
                    isInvalid={errores.password}
                    minLength="6"
                    maxlength="8"
                    required />

                    <Form.Control.Feedback type="invalid">
                        {errores.password}
                    </Form.Control.Feedback>
                </Form.Group>
            }
            {editable &&
                <Row className="mt-4">
                    <Col md="12" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="descripcionExperiencia">
                            <Form.Label className="fw-semibold fs-5">Experiencia laboral</Form.Label>
                            <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Ingrese su experiencia experiencia laboral"
                            value={descripcionExperiencia}
                            onChange={e=> setDescripcionExperiencia(e.target.value)}
                            isInvalid={errores.descripcionExperiencia}
                            required />

                            <Form.Control.Feedback type="invalid">
                                {errores.descripcionExperiencia}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
            }
            {editable &&
                <Row>
                    <Col md="6" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="celular">
                            <Form.Label className="fw-semibold fs-5">Celular</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Ingrese su celular"
                            value={celular}
                            onChange={e=> setCelular(e.target.value)}
                            isInvalid={errores.celular}
                            pattern="[0-9]+"
                            required />

                            <Form.Control.Feedback type="invalid">
                                {errores.celular}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md="6" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="urlLinkedin">
                            <Form.Label className="fw-semibold fs-5">Linkedin *opcional*</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Ingrese la url"
                            value={urlLinkedin}
                            onChange={e=> setUrlLinkedin(e.target.value)}
                            isInvalid={errores.urlLinkedin}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errores.urlLinkedin}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
            }
            {editable &&
                <Row>
                    <Col md="12" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="urlCv">
                            <Form.Label className="fw-semibold fs-5">Hoja de vida *opcional*</Form.Label>
                            <Form.Control
                            type="file"
                            accept=".pdf"
                            name="urlCv"
                            onChange={handleFileChange}
                            isInvalid={errores.urlCv}
                            />                            

                            <Form.Control.Feedback type="invalid">
                                {errores.urlCv}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
            }
            <div className="d-flex justify-content-center">
                <Button type="submit" variant="danger" className="mt-4">
                    {!editable ? "Crear usuario" : "Actualizar descripción"}
                </Button>
            </div>
        </Form>
    )
}

export {SignupFormulario}