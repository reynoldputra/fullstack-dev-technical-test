import { Register } from "@/modules/auth/auth.type";

const UserInfo = ({ user }: { user: Register }) => {
  return (
    <>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Hello, {user.name}
      </h2>
      <table className="w-full mt-6">
        <tbody>
          <tr className="m-0 p-0 even:bg-muted">
            <td className="border font-semibold px-4 py-2 text-left">Name</td>
            <td className="border px-4 py-2 text-left">{user.name}</td>
          </tr>
          <tr className="m-0 p-0 even:bg-muted">
            <td className="border font-semibold px-4 py-2 text-left">
              Username
            </td>
            <td className="border px-4 py-2 text-left">{user.username}</td>
          </tr>
          <tr className="m-0 p-0 even:bg-muted">
            <td className="border font-semibold px-4 py-2 text-left">Email</td>
            <td className="border px-4 py-2 text-left">{user.email}</td>
          </tr>
          <tr className="m-0 p-0 even:bg-muted">
            <td className="border font-semibold px-4 py-2 text-left">
              Phone Number
            </td>
            <td className="border px-4 py-2 text-left">{user.no_telp}</td>
          </tr>
          <tr className="m-0 p-0 even:bg-muted">
            <td className="border font-semibold px-4 py-2 text-left">Gender</td>
            <td className="border px-4 py-2 text-left capitalize">
              {user.gender}
            </td>
          </tr>
          <tr className="m-0 p-0 even:bg-muted">
            <td className="border font-semibold px-4 py-2 text-left">Role</td>
            <td className="border px-4 py-2 text-left capitalize">
              {user.user_type}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default UserInfo;
