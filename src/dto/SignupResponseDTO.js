// src/dto/SignupResponseDTO.js

/**
 * Factory per la response del signup.
 * @param {string} email - Email dell'utente
 * @param {string} first_name - Nome dell'utente
 * @param {string} last_name - Cognome dell'utente
 * @returns {Object} SignupResponseDTO
 */
export const SignupResponseDTO = (email, first_name, last_name) => ({
  email,
  first_name,
  last_name
  //role
});
