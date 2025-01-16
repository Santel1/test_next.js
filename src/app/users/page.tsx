import List from "@/src/components/list";
import { getUsers, Users } from "../../lib/api";
import NavItem from "@/src/components/nav-item";

export default async function UsersPage() {
  const users = await getUsers();
  return (
    <div>
      <h1 className="text-5xl">Users</h1>
      <div className="p-[20px] border rounded-xl">
        <List className="flex gap-4 overflow-x-auto scroll-container">
          {users.map((user: Users) => (
            <NavItem
              key={user.id}
              variant="users"
              pathname={`/users/${user.id}`}
            >
              {`${user.firstname} ${user.lastname}`}
            </NavItem>
          ))}
        </List>
      </div>
    </div>
  );
}
