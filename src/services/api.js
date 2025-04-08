const API_BASE = import.meta.env.VITE_API_URL;

export async function fetchProductos() {
  try {
    const res = await fetch(`${API_BASE}/productos/`);
    if (!res.ok) {
      throw new Error("Error al obtener productos");
    }
    const data = await res.json();
    console.log(data); // Verificar los productos en la consola
    return data;
  } catch (error) {
    console.error("Error en fetchProductos:", error);
    return [];
  }
}

export async function comprarProducto(id) {
  const res = await fetch(`${API_BASE}/reducir_stock/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ producto_id: id }),
  });
  return await res.json();
}
