// src/dto/LoginResponseDTO.js

/**
 * Factory per la response del login.
 * @param {string} token - Il JWT generato dal backend
 * @param {string} message - Messaggio di conferma
 * @param {string} email - Email dell'utente
 * @returns {Object} LoginResponseDTO
 */
export const LoginResponseDTO = (token, message, email) => ({
  token,
  message,
  email
});
