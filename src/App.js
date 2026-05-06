import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [lugares, setLugares] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/lugares")
      .then((res) => res.json())
      .then((data) => setLugares(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="app-container">
      <div className="header">
        <h1>Explora Tucumán</h1>
        <p>Dashboard de bares, restaurantes y eventos de la provincia</p>
        <div className="stats-badge">Total descubiertos: {lugares.length}</div>
      </div>

      <div className="grid-container">
        {lugares.map((lugar) => (
          <div key={lugar.id} className="card">
            <h3>{lugar.nombre}</h3>
            
            <div className="card-content">
              <div className="info-row">
                <strong>Ubicación</strong>
                <span>{lugar.ubicacion}</span>
              </div>
              <div className="info-row">
                <strong>Categoría</strong>
                <span className="category-tag">{lugar.categoria}</span>
              </div>
              <div className="info-row">
                <strong>Fuente</strong>
                <span>{lugar.fuente}</span>
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <span className={`status-badge ${lugar.activo ? 'status-active' : 'status-inactive'}`}>
                {lugar.activo ? "● Abierto / Activo" : "○ Inactivo"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;