import UsersItem from "@/src/components/user-item";
import { getUsersById } from "@/src/lib/api";

export default async function UserDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const user = await getUsersById(id);

  return (
    <div>
      <UsersItem
        firstname={user.firstname}
        lastname={user.lastname}
        email={user.email}
        birthDate={user.birthDate}
        address={user.address}
        phone={user.phone}
        website={user.website}
        company={user.company}
      />
    </div>
  );
}
