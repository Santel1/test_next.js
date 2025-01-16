export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Users {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  birthDate: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Posts {
  id: string;
  slug: string;
  url: string;
  title: string;
  content: string;
  image: string;
  thumbnail: string;
  status: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  userId: string;
}

const PROJECT_TOKEN = process.env.NEXT_PUBLIC_PROJECT_TOKEN;

export const buildUrl = (...paths: string[]) =>
  `https://${PROJECT_TOKEN}/${paths.join("/")}`;

export const stringifyQueryParams = (params: Record<string, string>) =>
  new URLSearchParams(params).toString();

export const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return (await res.json()) as T;
};

export const getUsers = (init?: RequestInit) => {
  return sendRequest<Users[]>(buildUrl("users"), init);
};

export const getPosts = (init?: RequestInit) => {
  return sendRequest<Posts[]>(buildUrl("posts"), init);
};

export const getUsersById = (id: string, init?: RequestInit) => {
  return sendRequest<Users>(buildUrl("users", id), init);
};
