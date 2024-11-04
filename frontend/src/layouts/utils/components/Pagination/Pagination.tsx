import React from "react";
import './Pagination.css'

export const Pagination: React.FC<{
    carsPerPage: number,
    totalElements: number,
    handleChangeCurrentPage: (page: number) => void;
}> = (props) => {

    const paginationNumbers = [];
  
    for (let i = 1; i <= Math.ceil(props.totalElements / props.carsPerPage); i++) {
        paginationNumbers.push(i);
    }
  
    return (
        <div>  
            <ul className="pagination">
                {paginationNumbers.map((pageNumber) => (
                    <li key={pageNumber} onClick={() => props.handleChangeCurrentPage(pageNumber)} className="page_numbers">{pageNumber}</li>
                ))}
            </ul>
        </div>
    );
};
  