import React from 'react';
import logo from '../assets/image/FescLogo.jpg';
import { FaFacebook, FaYoutube, FaWeebly, FaInstagram, FaPhone, FaLocationArrow } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer= ()=> {

    const EstiloIcono = {
        backgroundColor: 'white',
        color: 'red',
        padding: '10%',
        borderRadius: '50%',
        fontSize: '250%'
    }

    return (
        <div className="Footer">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-6 col-lg-5 col-12 ft-1">
                        <img className='img-fluid text-center d-flex justify-content-between' src={logo} alt=""/>
                        <p>
                            Institución de Educación Superior de carácter Tecnológico de derecho privado, de utilidad común y sin ánimo de lucro, redefinida mediante Resolución del MEN 747 del 19 de febrero de 2009, para ofertar programas Técnicos, Tecnológicos, Profesionales y Especializaciones.
                        </p>
                        <p>Su oferta académica se desarrolla en el Departamento Norte de Santander,  específicamente en los municipios de San José de Cúcuta y en la Provincia de Ocaña</p>
                        <div className='d-flex flex-wrap justify-content-center mt-3'>
                            <a href="https://www.facebook.com/Fesc.edusuperior?mibextid=ZbWKwL" className="icono btn btn-floating btn-lg mx-3 mb-4">
                                <FaFacebook style={EstiloIcono}/>
                            </a>
                            <a href="https://youtube.com/@TuTeleFESC?si=Zyadk4EdMu9_2fk5" className="icono btn btn-floating btn-lg mx-3 mb-4">
                                <FaYoutube style={EstiloIcono}/>
                            </a>
                            <a href="https://www.instagram.com/fesc.edusuperior/" className="icono btn btn-floating btn-lg mx-3 mb-4">
                                <FaInstagram style={EstiloIcono}/>
                            </a>
                            <a href="https://www.fesc.edu.co/portal/" className="icono btn btn-floating btn-lg mx-3 mb-4">
                                <FaWeebly style={EstiloIcono}/>
                            </a>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 col-12 ft-2 mt-5'>
                        <h3 className='text-white fs-4 mt-4 fs-1'>Programas</h3>
                        <hr className='text-white fw-bold'/>
                        <ul>
                            <li className='nav-item mt-3'>
                                <a className='text-white' href="https://www.fesc.edu.co/portal/">Pregrado</a>
                            </li>
                            <li className='nav-item'>
                                <a className='text-white' href="https://www.fesc.edu.co/portal/index.php/programas-academicos/posgrado/especializaciones/administracion-de-la-salud">Posgrado</a>
                            </li>
                            <li className='nav-item'>
                                <a className='text-white' href="https://www.fesc.edu.co/portal/index.php/programas-academicos/programas-extension-sede-ocana">Programas extensión sede Ocaña</a>
                            </li>
                            <li className='nav-item'>
                                <a className='text-white' href="https://www.fesc.edu.co/portal/index.php/programas-academicos/diplomados-de-grados#slider-6">Diplomados</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-6 col-lg-4 col-12 mt-5'>
                        <h3 className='text-white fs-4 mt-4 fs-1'>Contacto</h3>
                        <hr className='text-white fw-bold'/>
                        <p className='text-white mt-4'><FaPhone size={25} className='mx-3'/>+57 312 3541578</p>
                        <p className='text-white'><MdEmail size={25} className='mx-3'/>servicios_generales@fesc.edu.co</p>
                        <p className='text-white'><FaLocationArrow size={25} className='mx-3'/>Av.5 #15-27, Centro, Cúcuta, Norte de Santander</p>
                    </div>
                </div>
            </div>
            <hr className='text-white fw-bold'/>
            <div className="text-center">
                <p className="text-white">Desarrollado por: <span className='fw-semibold'>Jhon Alexander Rodríguez Zapata</span></p>
                <p className="text-white">© 2023: Todos los derechos</p>
            </div>
        </div>
    )
}

export {Footer}