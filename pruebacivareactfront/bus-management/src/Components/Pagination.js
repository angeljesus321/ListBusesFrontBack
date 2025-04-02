import React from 'react';
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Crear un array con los números de página
    const pageNumbers = [];
    for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i);
    }
    return (
    <nav>
        <ul className="pagination">
        {/* Botón Anterior */}
        <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
            <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 0}
            >
            Anterior
            </button>
        </li>
        {/* Números de página */}
        {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button
                className="page-link"
                onClick={() => onPageChange(number)}
            >
                {number + 1}
            </button>
            </li>
        ))}
        {/* Botón Siguiente */}
        <li className={`page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}`}>
            <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            >
            Siguiente
            </button>
        </li>
        </ul>
    </nav>
    );
};
export default Pagination;