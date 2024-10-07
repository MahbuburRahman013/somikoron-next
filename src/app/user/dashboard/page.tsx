import getUserInfo from "@/utils/getUserInfo";
import LogoutButton from "@/utils/Logout";

async function UserPage() {
  const userInfo = await getUserInfo();
  console.log(userInfo);

  return (
    <div className="flex justify-center items-center gap-6 flex-col min-h-screen text-xl">
      Welcome{" "}
      {userInfo?.user?.name == "undefined"
        ? userInfo?.user?.email
        : userInfo?.user?.name}{" "}
      !!
      <div>
        <LogoutButton />
      </div>
    </div>
  );
}

export default UserPage;
