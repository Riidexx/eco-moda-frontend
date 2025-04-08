const API_BASE = "http://localhost:8000"; // cámbialo cuando despleguemos

export async function fetchProductos() {
  const res = await fetch(`${API_BASE}/productos`);
  return await res.json();
}

export async function comprarProducto(id) {
  const res = await fetch(`${API_BASE}/reducir_stock`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ producto_id: id }),
  });
  return await res.json();
}
