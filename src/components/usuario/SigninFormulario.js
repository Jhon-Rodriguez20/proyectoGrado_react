import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaUser, FaLock } from 'react-icons/fa';

function SigninFormulario({errores, callback}) {

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const enviarFormulario = (e) => {
        e.preventDefault();
        callback({email, password});
    }

    const estilo = {
        fontSize: '150%',
        color: '#dc3545'
    }

    return (
        <Form onSubmit={enviarFormulario}>
            <InputGroup className="my-3 mt-4" controlId="email">
                <InputGroup.Text><FaUser style={estilo}/></InputGroup.Text>
                <Form.Control
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={e=> setEmail(e.target.value)}
                isInvalid={errores.email}
                required
                >
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                    {errores.email}
                </Form.Control.Feedback>
            </InputGroup>

            <InputGroup className="my-3 mt-4" controlId="password">
                <InputGroup.Text><FaLock style={estilo}/></InputGroup.Text>
                <Form.Control
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={e=> setPassword(e.target.value)}
                isInvalid={errores.password}
                required
                >
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                    {errores.password}
                </Form.Control.Feedback>
            </InputGroup>

            <div className="d-flex justify-content-center">
                <Button type="submit" variant="danger" className="mt-4">
                    Iniciar sesión
                </Button>
            </div>
        </Form>
    )
}

export {SigninFormulario}