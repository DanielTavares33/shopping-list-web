import api from "@/services/api";

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

async function register(data: RegisterRequest): Promise<RegisterResponse> {
  const response = await api.post<{ data: RegisterResponse }>("/auth/register", data);
  return response.data.data;
}

export { register };
export type { RegisterRequest, RegisterResponse };
