import UserPrivateComponent from "@/utils/UserPrivateComponent";

function UserLayout({ children }: { children: React.ReactNode }) {
  return <UserPrivateComponent>{children}</UserPrivateComponent>;
}

export default UserLayout;
