const BASE_URL = 'http://localhost:4000'; // Update with your Rails API base URL

const handleResponse = async (response: Response) => {
  console.log("Response", response);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors || 'Something went wrong');
  }
  return response.json();
};

export const signUp = async (email: string, password: string, passwordConfirmation: string) => {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      lounge_owner: {
        email,
        password,
        password_confirmation: passwordConfirmation,
      },
    }),
  });
  return handleResponse(response);
};

export const login = async (email: string, password: string) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      lounge_owner: {
        email,
        password,
      },
    }),
  });
  return handleResponse(response);
};

export const getCurrentLoungeOwner = async (token: string) => {
  const response = await fetch(`${BASE_URL}/lounge_owners/current_lounge_owner`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return handleResponse(response);
};

export const getLounges = async () => {
  const response = await fetch(`${BASE_URL}/lounges`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return handleResponse(response);
};