import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    github: "",
    demo: "",
  });
// saya maunya tetap ada admin panel dan headernya
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("DATA PROJECT:", form);

    // TODO: kirim ke backend / simpan state

    // redirect ke halaman admin
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-2xl mx-auto bg-slate-800 p-6 rounded-2xl shadow-lg">
        
        <h1 className="text-2xl font-bold mb-6">Create Project</h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* TITLE */}
          <div>
            <label className="block mb-1 text-sm">Project Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-slate-700 outline-none"
              placeholder="Enter project title"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block mb-1 text-sm">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-slate-700 outline-none"
              placeholder="Enter description"
            />
          </div>

          {/* IMAGE URL */}
          <div>
            <label className="block mb-1 text-sm">Image URL</label>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 outline-none"
              placeholder="https://..."
            />
          </div>

          {/* GITHUB */}
          <div>
            <label className="block mb-1 text-sm">GitHub Link</label>
            <input
              type="text"
              name="github"
              value={form.github}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 outline-none"
              placeholder="https://github.com/..."
            />
          </div>

          {/* DEMO */}
          <div>
            <label className="block mb-1 text-sm">Demo Link</label>
            <input
              type="text"
              name="demo"
              value={form.demo}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 outline-none"
              placeholder="https://..."
            />
          </div>

          {/* BUTTON */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="px-5 py-2 bg-indigo-500 rounded-lg font-semibold hover:bg-indigo-600"
            >
              Save Project
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin")}
              className="px-5 py-2 bg-gray-500 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateProject;