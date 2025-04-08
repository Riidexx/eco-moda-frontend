// src/components/ProductCard.jsx
import React from "react";

export default function ProductCard({ producto, onComprar }) {
  return (
    <div className="border p-4 rounded shadow w-64">
      <h2 className="text-xl font-bold mb-2">{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p className="mt-2 font-semibold">Stock: {producto.stock}</p> {/* Mostrar el stock aquí */}
      <button
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
        onClick={() => onComprar(producto.id)}
        disabled={producto.stock <= 0}  // Deshabilitar el botón si el stock es 0
      >
        Comprar
      </button>
    </div>
  );
}
