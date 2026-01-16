import api from "@/services/api";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

async function login(data: LoginRequest): Promise<LoginResponse> {
  const response = await api.post<{ data: LoginResponse }>("/auth/login", data);
  return response.data.data;
}

export { login };
export type { LoginRequest, LoginResponse };
