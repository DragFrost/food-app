import { React, useState } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import dish1 from '../assets/images/dish1.jpg';
import dish2 from '../assets/images/dish2.jpg';
import dish3 from '../assets/images/dish3.jpg';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

function Banner() {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    function searchRecipe() {
        // const apiKey = 'c800ef6037fb419d8b7cc8f89f6da629';
        const apiKey = '116623bb7f334733a703dab0e78d401c';
        const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';



        $.ajax({
            url: apiUrl,
            method: 'GET',
            data: {
                apiKey: apiKey,
                addRecipeInformation: true,
                query: searchInput,

                // Add more parameters as needed
            },
            success: function (response) {
                // Handle the API response
                setSearchResults(response.results);
            },
            error: function (error) {
                console.log(apiKey);
                console.error('Error fetching data:', error);
            },
        });

        if (searchInput === '') {
            setSearchInput('');
            setSearchResults([]);
            console.log('clear');

        }
    }



    return (
        <>
            <div className="header_search pb-5">
                <div className="container">
                    <div className="input-group">
                        <input
                            className="form-control border-end-0 border rounded-pill"
                            type="search"
                            placeholder="Search"
                            id="example-search-input"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        // onKeyDown={searchRecipe}
                        />
                        <span className="input-group-append">
                            <button
                                className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5"
                                type="button" onClick={searchRecipe}
                            >
                                <i className="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="container">
                <ul id='results'>
                    {searchResults.map((results) => (
                        <li key={results.id}>
                            <img src={results.image} alt="" />
                            <Link to={`/food/${results.id}`}>{results.title}</Link>                            
                        </li>
                    ))}
                </ul>
            </div>
            <MDBCarousel showControls dark fade>
                <MDBCarouselItem itemId={1}>
                    <img src={dish1} className='d-block w-100' alt='...' />
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2}>
                    <img src={dish2} className='d-block w-100' alt='...' />
                </MDBCarouselItem>
                <MDBCarouselItem itemId={3}>
                    <img src={dish3} className='d-block w-100' alt='...' />
                </MDBCarouselItem>
            </MDBCarousel>
        </>
    );
}

export default Banner