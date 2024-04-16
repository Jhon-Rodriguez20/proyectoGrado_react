import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ELIMINAROFERTA_DELETE_ENDPOINT } from "../../connections/helpers/endpoints";
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

function EliminarOfertaButton({ id, titulo }) {
    
    const estilo = {
        fontSize: '130%'
    };

    const navegar = useNavigate();

    const confirmarEliminacion = async () => {

        const result = await Swal.fire({
            title: `Eliminar oferta`,
            text: `¿Desea eliminar la oferta "${titulo}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc3545',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'No, cancelar',
        });

        if (result.isConfirmed) {
            await eliminarOferta();
        }
    }

    const eliminarOferta = async () => {

        await axios.delete(`${ELIMINAROFERTA_DELETE_ENDPOINT}/${id}`);
        navegar("/");
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Oferta eliminada con éxito.",
            text: "Eliminaste esta oferta de empleo.",
            showConfirmButton: false,
            timer: 1800
        });

    };

    return (
        <Button
            variant="danger"
            size="sm"
            className="text-white"
            onClick={confirmarEliminacion}
        >
            <MdDelete style={estilo} /> Eliminar
        </Button>
    );
}

export { EliminarOfertaButton }
