import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetchProductos().then(setProductos);
  }, []);

  const handleCompra = async (id) => {
    await comprarProducto(id);
    const actualizados = await fetchProductos();
    setProductos(actualizados);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl text-green-600 font-bold mb-6">
        🌿 EcoModa funcionando
      </h1>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {productos.map((producto) => (
          <div key={producto.id} className="border p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold">{producto.nombre}</h2>
            <p className="text-gray-600 mb-2">{producto.descripcion}</p>
            <p className="font-bold">Stock: {producto.stock}</p>
            <button
              onClick={() => handleCompra(producto.id)}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
