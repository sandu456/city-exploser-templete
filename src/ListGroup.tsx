import React from "react";
import "./ListGroup.css";

type City = {
  id: number;
  name: string;
  description: string;
};

type ListGroupProps = {
  cities: City[];
  selectedCityId: number | null;
  onCitySelect: (id: number) => void;
};

const ListGroup: React.FC<ListGroupProps> = ({ cities, selectedCityId, onCitySelect }) => {
  const showDescriptions=cities.length===1;
  return (
    <ul className="list-group">
      {cities.map((city) => (
        <li
          key={city.id}
          onClick={() => onCitySelect(city.id)}
          className={`list-group-item ${city.id === selectedCityId ? "selected" : ""}`}
        >
          <h3>{city.name}</h3>
          {showDescriptions && <p>{city.description}</p>}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
