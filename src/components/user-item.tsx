import React from "react";
import { Address, Company } from "../lib/api";

export interface UserItemProps {
  firstname: string;
  lastname: string;
  email: string;
  birthDate: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export default function UserItem({
  firstname,
  lastname,
  email,
  address,
  phone,
  company,
  website,
}: UserItemProps) {
  const { street, city } = address;
  const { name } = company;
  return (
    <div className="p-4 border border-[#e5e5e5] rounded-lg w-[350px]">
      <div className="mt-4">
        <h1>{`${firstname} ${lastname}`}</h1>
        <p>
          Email: <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          Phone: <a href={`tel:${phone}`}>{phone}</a>
        </p>
        <p>
          Website:
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            {website}
          </a>
        </p>
        <p>
          Address: {street}, {city}
        </p>
        <p>Company: {name}</p>
      </div>
    </div>
  );
}