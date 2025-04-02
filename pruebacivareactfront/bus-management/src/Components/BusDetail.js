import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBusById } from '../services/BusServices';

const BusDetail = () => {
    const { id } = useParams();
    const [bus, setBus] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchBusDetails = async () => {
        try {
        setLoading(true);
        const data = await getBusById(id);
        setBus(data);
        setLoading(false);
        } catch (error) {
        setError("Error al cargar los detalles del bus");
        setLoading(false);
        }
    };

    fetchBusDetails();
    }, [id]);

    if (loading) return <div className="text-center mt-5"><h3>Cargando...</h3></div>;
    
    if (error) return <div className="alert alert-danger mt-3" role="alert">{error}</div>;
    
    if (!bus) return <div className="alert alert-warning mt-3" role="alert">Bus no encontrado</div>;

    return (
    <div className="container mt-4">
        <h2 className="mb-4">Detalles del Bus</h2>
        <div className="card">
        <div className="card-header">
            Bus #{bus.id} - {bus.numeroBus}
        </div>
        <div className="card-body">
            <h5 className="card-title">{bus.marca ? bus.marca.nombre : 'N/A'} - {bus.placa}</h5>
            <p className="card-text">
            <strong>Características:</strong> {bus.caracteristicas}
            </p>
            <p className="card-text">
            <strong>Estado:</strong>{' '}
            <span className={`badge ${bus.activo ? 'bg-success' : 'bg-danger'}`}>
                {bus.activo ? 'Activo' : 'Inactivo'}
            </span>
            </p>
            <p className="card-text">
            <strong>Fecha de Creación:</strong> {new Date(bus.fechaCreacion).toLocaleString()}
            </p>
            <Link to="/" className="btn btn-primary">
            Volver a la lista
            </Link>
        </div>
        </div>
    </div>
    );
};

export default BusDetail;