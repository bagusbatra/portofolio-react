import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import AdminLayout from "./components/admin/AdminLayout";
import DashboardContent from "./components/admin/DashboardContent";
import ProjectsTable from "./components/admin/ProjectsTable";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [user, setUser] = useState<any>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleDelete = (id: number) => {
    Swal.fire({
      title: "Hapus Project?",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Delete project:", id);
      }
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardContent />;

      case "projects":
        return <ProjectsTable onDelete={handleDelete} />;

      default:
        return (
          <div className="text-center py-20 text-white/30">
            Feature coming soon...
          </div>
        );
    }
  };

  return (
    <AdminLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      user={user}
      onLogout={handleLogout}
    >
      {renderContent()}
    </AdminLayout>
  );
};

export default Admin;