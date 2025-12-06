import { useEffect, useState } from "react";
import api from "../services/api";
import NeoButton from "../components/NeoButton";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [tempData, setTempData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) window.location.href = "/"; // Redireciona para a raiz (Login)
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const res = await api.get("/api/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error("Erro ao carregar tarefas", err);
    }
  };

  // Alterar Status ao Clicar
  const toggleStatus = async (task) => {
    const newStatus = task.status === "COMPLETED" ? "PENDING" : "COMPLETED";
    try {
      await api.put(`/api/tasks/${task.id}`, {
        title: task.title,
        description: task.description,
        status: newStatus,
        dueDate: task.dueDate
      });
      loadTasks();
    } catch (err) {
      console.error("Erro ao mudar status", err);
    }
  };

  const handleEdit = (task) => {
    setEditingId(task.id);
    setTitle(task.title);
    setTempData({
      description: task.description,
      status: task.status,
      dueDate: task.dueDate
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setTitle("");
    setTempData(null);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      if (editingId) {
        await api.put(`/api/tasks/${editingId}`, {
          title,
          description: tempData?.description || "", 
          status: tempData?.status || "PENDING", 
          dueDate: tempData?.dueDate || null
        });
        setEditingId(null);
        setTempData(null);
      } else {
        await api.post("/api/tasks", {
          title,
          description: "", 
          status: "PENDING",
          dueDate: null
        });
      }
      setTitle("");
      loadTasks();
    } catch (err) {
      console.error("Erro ao salvar", err);
      alert("Erro ao salvar tarefa.");
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/api/tasks/${id}`);
      loadTasks();
    } catch (err) {
      console.error("Erro ao deletar", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen text-white p-10 bg-darkBg">
      <div className="flex justify-between items-center mb-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-cyber-neon">Minhas Tarefas</h1>
        <NeoButton label="Sair" onClick={logout} style={{ width: 'auto', padding: '0.5rem 1.5rem' }} />
      </div>

      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSave} className="flex gap-3 mb-8">
          <input
            className="input-dark p-3 rounded-lg flex-1 bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-cyanNeon transition-colors"
            placeholder={editingId ? "Editando tarefa..." : "Nova tarefa..."}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex gap-2">
            <div className="w-32">
              <NeoButton label={editingId ? "Salvar" : "Adicionar"} type="submit" />
            </div>
            {editingId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="px-4 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded transition"
              >
                ✕
              </button>
            )}
          </div>
        </form>

        <div className="space-y-4">
          {tasks.map((t) => (
            <div
              key={t.id}
              className={`neon-card p-4 rounded-lg flex justify-between items-center bg-cardBg border shadow-[0_0_10px_rgba(56,189,248,0.1)] transition-all
                ${t.status === 'COMPLETED' ? 'border-green-500/30 opacity-75' : 'border-cyanNeon/30'}`}
            >
              <div>
                <p className={`text-lg font-semibold ${t.status === 'COMPLETED' ? 'line-through text-slate-400' : 'text-white'}`}>
                  {t.title}
                </p>
                
                <span 
                  onClick={() => toggleStatus(t)}
                  title="Clique para alterar o status"
                  className={`text-xs px-2 py-1 rounded mt-1 inline-block font-bold cursor-pointer select-none transition hover:scale-105
                    ${t.status === 'COMPLETED' ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 
                      t.status === 'IN_PROGRESS' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' : 
                      'bg-slate-800 text-slate-400 border border-slate-600 hover:bg-slate-700'}`}
                >
                  {t.status === 'COMPLETED' ? 'CONCLUÍDA ✅' : 
                   t.status === 'IN_PROGRESS' ? 'EM ANDAMENTO 🚧' : 'PENDENTE ⏳'}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(t)}
                  className="px-3 py-1.5 bg-yellow-500/10 hover:bg-yellow-500/30 text-yellow-500 border border-yellow-500/50 transition rounded text-sm"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteTask(t.id)}
                  className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/30 text-red-500 border border-red-500/50 transition rounded text-sm"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}

          {tasks.length === 0 && (
            <div className="text-center py-10 opacity-50">
              <p className="text-xl">Nenhuma tarefa encontrada.</p>
              <p className="text-sm mt-2">Adicione uma nova tarefa acima para começar.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
