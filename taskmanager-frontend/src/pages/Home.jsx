import { Link } from "react-router-dom";
import NeoButton from "../components/NeoButton";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center text-center px-6">
      <div className="neon-card p-12 rounded-xl max-w-lg">
        <h1 className="text-4xl font-bold mb-4">
          TaskManager Cyber
        </h1>
        <p className="text-gray-300 mb-8">
          Organize, gerencie e domine suas tarefas em um ambiente futurista.
        </p>

        <div className="flex flex-col gap-4">
          <Link to="/login">
            <NeoButton label="Entrar" />
          </Link>

          <Link to="/register">
            <NeoButton label="Criar Conta" />
          </Link>
        </div>
      </div>
    </div>
  );
}
