import { LoginResponseDTO } from '../dto/LoginResponseDTO';



const API_URL = "http://localhost:8080/user";

export const login = async (email, password) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Errore durante il login");
  }

  localStorage.setItem("jwtToken", data.token);

  // Usa la factory per creare un DTO coerente
  return LoginResponseDTO(data.token, data.message, data.email);
};




export const signup = async (name, surname, email, password) => {
  const res = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, surname, email, password }),
  });

  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.message || "Errore durante la registrazione");
  }

  return res.json();
};
