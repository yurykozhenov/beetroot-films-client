import axios from "axios";
import jwt_decode from "jwt-decode";

const apiUrl = "http://localhost:5000";

export async function login(email: string, password: string) {
  // await axios.post(`${apiUrl}/login`, { email, password });

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIyIiwibmFtZSI6IkpvaG4gRG9lIiwiaXNBZG1pbiI6dHJ1ZX0.A4jTDNFU1yKTH3WLG-LME5oMlqSGzOEbNBbraWR4_Dk";

  localStorage.setItem("token", token);
  console.log(jwt_decode(token));

  return token;
}

export async function register(user: unknown) {
  await axios.post(`${apiUrl}/users`, user);
}

export function logout() {}
