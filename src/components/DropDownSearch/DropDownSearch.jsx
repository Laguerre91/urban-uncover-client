// import { Link } from 'react-router-dom'
// import './DropDownSearch.css'
// import { DropdownButton, Dropdown } from 'react-bootstrap'
// import axios from 'axios'
// import { useState } from 'react'

// const API_BASE_URL = "http://localhost:5005/activities"

// const [results, setResults] = useState([])

// const DropDownSearch = () => {
//     const handleQuerySearch = e => {
//         const { value } = e.target
//         axios
//             .get(`${API_BASE_URL}?categories_Like=${value}`)
//             .then(({ data }) => { setResults(data) })
//             .catch(err => console.log(err))
//     }




//     return (
//         <div className="DropDownSearch">
//             <DropdownButton id="dropdown-basic-button" title="Selecciona Categoria">
//                 {
//                     results.map(elm => {
//                         <Dropdown.Item href="#/action-1" onChange={handleQuerySearch}>{elm.categories}</Dropdown.Item>
//                     })
//                 }

//             </DropdownButton>
//         </div>
//     )
// }
// export default DropDownSearch