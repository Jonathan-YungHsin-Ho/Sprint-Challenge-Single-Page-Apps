import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";

import CharacterList from './components/CharacterList'
import LocationsList from './components/LocationsList'

export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      {/* <CharacterList /> */}
      <LocationsList />
    </main>
  );
}
