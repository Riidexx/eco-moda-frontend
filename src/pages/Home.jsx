import React, { useEffect, useState } from "react";
import { fetchProductos, comprarProducto } from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [productos, setProductos] = useState([]);

  const loadProductos = async () => {
    const data = await fetchProductos();
    setProductos(data);
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
        {productos.map((p) => (
          <ProductCard key={p.id} producto={p} onComprar={handleCompra} />
        ))}
      </div>
    </div>
  );
}
