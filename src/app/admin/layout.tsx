import AdminPrivateComponent from "@/utils/AdminPrivateComponent";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminPrivateComponent>{children}</AdminPrivateComponent>;
}

export default AdminLayout;
