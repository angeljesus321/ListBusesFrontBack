import React, { useState, useEffect } from 'react';
import { getBuses, getBusById } from '../services/BusServices';
import Pagination from './Pagination';

const BusList = () => {
  // Estados para almacenar los datos
    const [buses, setBuses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
  // Estados para la paginación
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [pageSize] = useState(5);
    
  // Cargar los datos al montar el componente y cuando cambie la página
    useEffect(() => {
    const fetchBuses = async () => {
        try {
        setLoading(true);
        const data = await getBuses(currentPage, pageSize);
        setBuses(data.content); // Spring Boot devuelve los items en la propiedad 'content'
        setTotalPages(data.totalPages);
        setLoading(false);
        } catch (error) {
        setError("Error al cargar los buses. Por favor, intenta nuevamente.");
        setLoading(false);
        }
    };

    fetchBuses();
    }, [currentPage, pageSize]);

  // Función para manejar el cambio de página
    const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    };

  // Función para mostrar detalles de un bus
    const handleViewDetails = async (id) => {
    try {
        const busDetails = await getBusById(id);
            alert(`Detalles del Bus #${id}:\n
            Número: ${busDetails.numeroBus}\n
            Placa: ${busDetails.placa}\n
            Marca: ${busDetails.marca ? busDetails.marca.nombre : 'N/A'}\n
            Características: ${busDetails.caracteristicas}\n
            Estado: ${busDetails.activo ? 'Activo' : 'Inactivo'}\n
            Fecha de creación: ${new Date(busDetails.fechaCreacion).toLocaleString()}`);
    } catch (error) {
        alert('Error al cargar los detalles del bus');
    }
    };

    if (loading) return <div className="text-center mt-5"><h3>Cargando...</h3></div>;
    
    if (error) return <div className="alert alert-danger mt-3" role="alert">{error}</div>;

    return (
    <div className="container mt-4">
        <h2 className="mb-4">Lista de Buses</h2>
        
        {buses.length === 0 ? (
        <p>No hay buses disponibles.</p>
        ) : (
        <>
            <table className="table table-striped table-hover">
            <thead className="thead-dark">
                <tr>
                <th>ID</th>
                <th>Número</th>
                <th>Placa</th>
                <th>Marca</th>
                <th>Estado</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {buses.map(bus => (
                <tr key={bus.id}>
                    <td>{bus.id}</td>
                    <td>{bus.numeroBus}</td>
                    <td>{bus.placa}</td>
                    <td>{bus.marca ? bus.marca.nombre : 'N/A'}</td>
                    <td>
                    <span className={`badge ${bus.activo ? 'bg-success' : 'bg-danger'}`}>
                        {bus.activo ? 'Activo' : 'Inactivo'}
                    </span>
                    </td>
                    <td>
                    <button 
                        className="btn btn-info btn-sm"
                        onClick={() => handleViewDetails(bus.id)}
                    >
                        Ver detalles
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
                
            <div className="d-flex justify-content-center">
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange} 
            />
            </div>
        </>
        )}
    </div>
    );
};

export default BusList;