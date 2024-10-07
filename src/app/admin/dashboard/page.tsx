import getUserInfo from "@/utils/getUserInfo";

async function AdminPage() {
  const userInfo = await getUserInfo();

  return (
    <div>
      {userInfo?.user?.name ? userInfo?.user?.name : userInfo?.user?.email}
    </div>
  );
}

export default AdminPage;
