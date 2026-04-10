import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface Props {
  children: ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user: any;
  onLogout: () => void;
}

const AdminLayout = ({
  children,
  activeTab,
  setActiveTab,
  user,
  onLogout,
}: Props) => {
  return (
    <div className="min-h-screen flex">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={onLogout}
      />

      <main className="flex-grow bg-secondary/50 overflow-y-auto">
        <Header activeTab={activeTab} user={user} />

        <div className="p-8 max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;