import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Pagination } from 'semantic-ui-react';
import PageNav from './PageNav';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState();
  // const [pageState, setPageState] = useState({
  //   activePage: 1,
  //   // boundaryRange: 1,
  //   // siblingRange: 1,
  //   // showEllipsis: false,
  //   // showFirstAndLastNav: true,
  //   // showPreviousAndNextNav: true,
  //   totalPages: '',
  // });

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(res => {
        // console.log(res.data.info.pages);
        setCharacters(res.data.results);
        setPageCount(res.data.info.pages);
      })
      .catch(err => console.log(err));
  }, [page]);

  const prevPage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);

  // const handlePaginationChange = (e, { activePage }) => {
  //   console.log(pageState.activePage)
  //   setPageState({ activePage });
  // };

  return (
    <section className='ui bottom attached segment active'>
      {/* <Pagination
        activePage={pageState.activePage}
        boundaryRange={pageState.boundaryRange}
        siblingRange={pageState.siblingRange}
        onPageChange={handlePaginationChange}
        totalPages={pageState.pageCount}
        ellipsisItem={pageState.showEllipsis ? undefined: null}
        firstItem={pageState.showFirstAndLastNav ? undefined : null}
        lastItem={pageState.showFirstAndLastNav ? undefined : null}
        prevItem={pageState.showPreviousAndNextNav ? undefined : null}
        nextItem={pageState.showPreviousAndNextNav ? undefined : null}
      />     */}
      <PageNav
        page={page}
        pageCount={pageCount}
        prevPage={prevPage}
        nextPage={nextPage}
      />
      <div className='character-list grid-view'>
        {characters.map(character => {
          return <CharacterCard key={character.id} character={character}
         />;
        })}
      </div>
    </section>
  );
}
