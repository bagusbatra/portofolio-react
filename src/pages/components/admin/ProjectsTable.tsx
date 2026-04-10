import { Plus, Edit, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  onDelete: (id: number) => void;
}

const ProjectsTable = ({ onDelete }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="glass rounded-3xl overflow-hidden">
      {/* HEADER */}
      <div className="p-8 flex justify-between items-center border-b border-white/10">
        <h3 className="text-xl font-bold">Manage Projects</h3>

        <button
          onClick={() => navigate("/admin/projects/create")}
          className="px-4 py-2 bg-primary rounded-xl font-bold text-sm flex items-center gap-2"
        >
          <Plus size={18} />
          Add Project
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-white/5 text-white/50 text-xs font-bold uppercase tracking-widest">
            <tr>
              <th className="px-8 py-4">Project</th>
              <th className="px-8 py-4">Category</th>
              <th className="px-8 py-4">Year</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5">
            {[1, 2].map((i) => (
              <tr
                key={i}
                className="hover:bg-white/5 transition-colors"
              >
                {/* PROJECT */}
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg overflow-hidden">
                      <img
                        src="/images/elips.png"
                        alt="Project"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <span className="font-bold">
                      Project {i}
                    </span>
                  </div>
                </td>

                {/* CATEGORY */}
                <td className="px-8 py-6 text-white/50">
                  Web
                </td>

                {/* YEAR */}
                <td className="px-8 py-6 text-white/50">
                  2026
                </td>

                {/* STATUS */}
                <td className="px-8 py-6">
                  <span className="px-3 py-1 bg-green-500/20 text-green-500 text-[10px] font-bold uppercase rounded-full">
                    Published
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="px-8 py-6">
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        navigate(`/admin/projects/edit/${i}`)
                      }
                      className="p-2 text-white/50 hover:text-primary transition-colors"
                    >
                      <Edit size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(i)}
                      className="p-2 text-white/50 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ProjectsTable;