import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from '../components/Banner';

function Home() {
  const [searchResults, setSearchResults] = useState({});
  const apiKey = '116623bb7f334733a703dab0e78d401c';

  const randomSearch = async () => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`);
      const data = await response.data;
      setSearchResults(data);
      console.log(searchResults);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    randomSearch();
  }, []); 

  const imageUrl = searchResults.recipes?.[0]?.image;
  const title = searchResults.recipes?.[0]?.title;

  return (
    <>
      <Banner />
      <section className='pagesection'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="abouttext">
                <h3>{title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quasi omnis corrupti deserunt possimus, amet facilis vel numquam suscipit blanditiis! Aliquid, commodi? Est perspiciatis hic minus, doloremque accusamus eos exercitationem cumque, dolorum magnam ratione repudiandae autem quaerat nemo quisquam veritatis quo! Atque deleniti ad, quos iste quaerat inventore optio eum! Itaque cum vitae, doloremque non assumenda quo laborum deleniti cupiditate eligendi corrupti quod unde nobis odio nihil eaque possimus hic.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis culpa nostrum tempore ipsa? Laborum numquam fugit quidem voluptate totam.</p>
              </div>              
            </div>
            <div className="col-md-6">
              {imageUrl && <img src={imageUrl} alt="" />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
