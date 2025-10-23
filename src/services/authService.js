import { LoginResponseDTO } from '../dto/LoginResponseDTO';
import { SignupResponseDTO } from '../dto/SignupResponseDTO';



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



export const signup = async (first_name, last_name, email, password) => {
  const res = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ first_name, last_name, email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Errore durante la registrazione");
  }

  // Usa la factory per creare un DTO coerente
  return SignupResponseDTO(data.email, data.name, data.role);
};
