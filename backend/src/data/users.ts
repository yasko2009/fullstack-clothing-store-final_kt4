export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}

export const users: User[] = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123456",
    name: "Admin",
  },
];