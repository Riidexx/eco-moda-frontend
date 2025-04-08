import React from "react";

export default function ProductCard({ producto, onComprar }) {
  if (!producto) {
    return <div>Error: Producto no encontrado</div>;
  }

  const { nombre, descripcion, stock, id } = producto;

  if (!nombre || !descripcion || stock === undefined || id === undefined) {
    return <div>Error: Datos del producto incompletos</div>;
  }

  return (
    <div className="border p-4 rounded shadow w-64">
      <h2 className="text-xl font-bold mb-2">{nombre}</h2>
      <p>{descripcion}</p>
      <p className="mt-2 font-semibold">Stock: {stock}</p>
      <button
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
        onClick={() => onComprar(id)}
        disabled={stock <= 0}
      >
        Comprar
      </button>
    </div>
  );
}
