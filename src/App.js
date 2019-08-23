import React from "react";
import { Route } from 'react-router-dom';

import Header from "./components/Header.js";
import TabNav from "./components/TabNav.js";

import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import EpisodeList from './components/EpisodeList';

export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      {/* <CharacterList /> */}
      {/* <LocationsList /> */}
      <EpisodeList />
    </main>
  );
}
