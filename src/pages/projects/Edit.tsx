import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProject = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // ambil id dari URL

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    github: "",
    demo: "",
  });

  // 🔥 SIMULASI FETCH DATA (nanti ganti API)
  useEffect(() => {
    // contoh dummy data
    const fakeData = {
      title: "Portfolio Website",
      description: "Website portfolio pribadi",
      image: "https://via.placeholder.com/300",
      github: "https://github.com/user/project",
      demo: "https://demo.com",
    };

    setForm(fakeData);
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("UPDATE PROJECT ID:", id);
    console.log("DATA:", form);

    // TODO: kirim ke backend (PUT/PATCH)

    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-2xl mx-auto bg-slate-800 p-6 rounded-2xl shadow-lg">
        
        <h1 className="text-2xl font-bold mb-6">Edit Project</h1>

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
            />
          </div>

          {/* IMAGE */}
          <div>
            <label className="block mb-1 text-sm">Image URL</label>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 outline-none"
            />
          </div>

          {/* PREVIEW IMAGE */}
          {form.image && (
            <img
              src={form.image}
              alt="preview"
              className="w-full h-40 object-cover rounded-lg"
            />
          )}

          {/* GITHUB */}
          <div>
            <label className="block mb-1 text-sm">GitHub Link</label>
            <input
              type="text"
              name="github"
              value={form.github}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 outline-none"
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
            />
          </div>

          {/* BUTTON */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="px-5 py-2 bg-indigo-500 rounded-lg font-semibold hover:bg-indigo-600"
            >
              Update Project
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

export default EditProject;