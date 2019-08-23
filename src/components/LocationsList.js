import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageNav from './PageNav';
import LocationCard from './LocationCard';

export default function LocationsList() {
  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/?page=${page}`)
      .then(res => {
        // console.log(res.data.results);
        setLocations(res.data.results);
        setPageCount(res.data.info.pages);
      })
      .catch(err => console.log(err));
  }, [page]);

  const prevPage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);

  return (
    <section className='ui bottom attached segment active'>
      <PageNav
        page={page}
        pageCount={pageCount}
        prevPage={prevPage}
        nextPage={nextPage}
      />
      <div className='grid-view'>
        {locations.map(location => {
          return <LocationCard key={location.id} location={location} />;
        })}
      </div>
    </section>
  )
}
