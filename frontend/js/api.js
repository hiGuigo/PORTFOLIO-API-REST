export async function fetchData(route) {
  const response = await fetch(`http://localhost:3000${route}`);
  return response.json();
}
