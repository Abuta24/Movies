import React from 'react';
import './Filmebi.css';


interface Item {
  thumbnail: {
    regular: {
      small: string;
    };
  };
  year: number;
  category: string;
  rating: number;
  title: string;
}

interface FilmebiProps {
  title: string;
  items: Item[];
}

const Filmebi: React.FC<FilmebiProps> = ({ title, items }) => {
  const Movies = items.filter(item => item.category === "Movie");

  return (
    <div className="Filmebi">
      <h2 className="Filmebi-title">{title}</h2>
      <div className="Filmebi-items">
        {Movies.map((item, index) => (
          <div key={index} className="Filmebi-item">
            <div className="dato">
              <img className='photo' src={item.thumbnail.regular.small} alt={item.title} />
              <div className='rame2'>
                <div className='ramesrame2'>
                  <h1 className='year'>{item.year}</h1>
                  <div className='dot'></div>
                  <img className='iimg' src='assets/icon-nav-movies.svg' alt='Movies' />
                  <h1 className='categ'>{item.category}</h1>
                  <div className='dot'></div>
                  <h1 className='rating'>{item.rating}</h1>
                </div>
                <h1 className='tit'>{item.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filmebi;
