import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/header.css';

function Search() {
    return (
        <form className="me-3" role="search">
            <div className="form-control d-flex align-items-center div_form ">
                <input className="p-1" type="search" placeholder="Buscar" aria-label="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search text-black" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </div>
        </form>
    )
}
export default Search