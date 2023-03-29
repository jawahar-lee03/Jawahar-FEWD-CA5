import {useEffect, useState} from 'react';
import './index.css'
import axios from "axios";
import RenderBooks from './RenderBooks';
import { useRef } from 'react';
import Register from './Register';

function Main(props) {

    const searchBox = useRef()
    const [books,setBooks] = useState([])
    const [search,setSearch] = useState("")
    const [isSearch, searchState] = useState(false)
    const [showRegister, setShowRegister] = useState(false);

    const updateSearch = () => {
        setSearch(searchBox.current.value)
        searchState(true)
    }
    const handleClick = () => {
        setShowRegister(true);
      }

    useEffect(()=> {
        axios.get('https://reactnd-books-api.udacity.com/books', {
            headers: { 'Authorization': 'jawahar-lee' }
        }).then(fetchRes=> {
            setBooks(fetchRes.data.books)
        }).catch(error => {
            console.log("Error in fetching data:", error)
        })
    },[])

    if (showRegister) {
        return <Register/>;
      }

    return (
        <div>
            <div className='flexBox' id='header'>
                <h1 className='headerElement'>Kalvium Books</h1>
                <button id='registerButton' className='headerElement' onClick={handleClick}>{props.username ? props.username : "Register"}</button>
            </div>
            <div>
                <input ref={searchBox} type="text" id='inputBox' placeholder='Search books:'/>
                <button id='searchButton' onClick={updateSearch}>Search</button>
            </div>
            <RenderBooks books={books} isSearch={isSearch} search={search}/>
        </div>
    );
}

export default Main;