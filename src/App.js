import { useEffect, useState } from "react";

function App() {
  const [lugares, setLugares] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/lugares")
      .then((res) => res.json())
      .then((data) => setLugares(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Dashboard de bares/eventos de Tucumán</h1>

      <p>Total cargados: {lugares.length}</p>

      {lugares.map((lugar) => (
        <div
          key={lugar.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{lugar.nombre}</h3>
          <p><strong>Ubicación:</strong> {lugar.ubicacion}</p>
          <p><strong>Categoría:</strong> {lugar.categoria}</p>
          <p><strong>Fuente:</strong> {lugar.fuente}</p>
          <p><strong>Activo:</strong> {lugar.activo ? "Sí" : "No"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;