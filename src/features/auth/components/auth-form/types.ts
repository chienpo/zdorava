export interface Error {
  error: {
    message: string;
  };
}

export interface AuthError {
  error?: {
    message: string | { [key: string]: string };
  };
}
