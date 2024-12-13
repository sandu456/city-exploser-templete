import React, { useState } from "react";
import ListGroup from "./ListGroup";
import "./App.css";

type City = {
  id: number;
  name: string;
  description: string;
};

const App: React.FC = () => {
  const [cities, setCities] = useState<City[]>([
    { id: 1, name: "Colombo", description: "Commercial capital of Sri Lanka" },
    { id: 2, name: "Kandy", description: "The city of the sacred tooth relic" },
    { id: 3, name: "Galle", description: "Famous for its fort and beaches" },
    { id: 4, name: "Jaffna", description: "Known for its cultural heritage" },
  ]);
  const [selectedCityId, setSelectedCityId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [newCityName, setNewCityName] = useState<string>("");
  const [newCityDescription, setNewCityDescription] = useState<string>("");

  const handleCitySelect = (id: number) => {
    setSelectedCityId(id);
  };

  const handleAddCity = () => {
    if (newCityName && newCityDescription) {
      const newCity: City = {
        id: cities.length + 1,
        name: newCityName,
        description: newCityDescription,
      };
      setCities([...cities, newCity]);
      setNewCityName("");
      setNewCityDescription("");
    }
  };

  const handleReset = () => {
    setSelectedCityId(null);
  };

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>City Explorer</h1>
      <input
        type="text"
        placeholder="Search for a city"
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <h3>Available Cities</h3>
      <ListGroup
        cities={filteredCities}
        selectedCityId={selectedCityId}
        onCitySelect={handleCitySelect}
      />
      
      <div className="add-city-form">
      <h2>Add a New City</h2>
     
        <input
          type="text"
          placeholder="City Name"
          value={newCityName}
          onChange={(e) => setNewCityName(e.target.value)}
        />
        <input
          type="text"
          placeholder="City Description"
          value={newCityDescription}
          onChange={(e) => setNewCityDescription(e.target.value)}
        />
        <button onClick={handleAddCity} className="add-city-button">
          Add City
        </button>
        <button onClick={handleReset} className="reset-button">
          Reset City Selection
        </button>
      </div>
    </div>
  );
};

export default App;
