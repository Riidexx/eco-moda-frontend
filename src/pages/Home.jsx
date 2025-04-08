import React, { useEffect, useState } from "react";
import { fetchProductos, comprarProducto } from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [productos, setProductos] = useState([]);

  const loadProductos = async () => {
    try {
      const data = await fetchProductos();
      setProductos(data);
    } catch (error) {
      console.error("Error al cargar productos:", error);
      setProductos([]);
    }
  };

  const handleCompra = async (id) => {
    await comprarProducto(id);
    await loadProductos(); // refrescar stock
    alert("¡Compra realizada con éxito!");
  };

  useEffect(() => {
    loadProductos();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">EcoModa - Tienda Online</h1>
      <div className="flex flex-wrap gap-6">
        {productos.length === 0 ? (
          <p>No hay productos disponibles</p>
        ) : (
          productos.map((p) => (
            <ProductCard key={p.id} producto={{ ...p, stock: 10 }} onComprar={handleCompra} />
          ))
        )}
      </div>
    </div>
  );
}
