import { useState } from "react";
import NeoButton from "../components/NeonButton";

export default function Dashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Atualizar backend", status: "Pendente" },
    { id: 2, title: "Criar UI neon", status: "Em Progresso" },
  ]);

  return (
    <div className="min-h-screen bg-darkBg px-6 py-8">
      <h1 className="text-4xl font-bold text-neonPink mb-8">
        Dashboard Cyberpunk
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="
              p-6 rounded-xl bg-cardBg border border-neonBlue/20 
              transition-all duration-300 hover:-translate-y-1
              hover:shadow-[0_0_25px_#00eaff]
            "
          >
            <h2 className="text-xl font-bold text-neonBlue">{task.title}</h2>
            <p className="text-neonPink mt-2">{task.status}</p>

            <button className="mt-4 underline text-sm text-neonPink hover:text-neonBlue transition">
              Ver mais
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 max-w-sm">
        <NeoButton onClick={() => alert("Adicionar Task")}>
          Nova Tarefa
        </NeoButton>
      </div>
    </div>
  );
}
