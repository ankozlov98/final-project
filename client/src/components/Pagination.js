import React from 'react'



const Pagination = ({pokemonsPerPage, totalPokemons, paginate}) => {
    
    
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil (totalPokemons/pokemonsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
         <nav>
            <div className="pagination">
                {pageNumbers.map(number => (
                    
                        <button key={number} onClick={() => paginate(number)}  href='!#' className="page-link page-item">
                            {number}
                        </button>
                    
                ))}
            </div>
        </nav>
    )
}

export default Pagination
