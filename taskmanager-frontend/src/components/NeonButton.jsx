import NeonButton from "./NeonButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-5xl font-bold text-cyber-neon animate-glitch">
        Task Manager 2077
      </h1>

      <p className="text-cyber-blue opacity-80 text-lg">
        Organize suas tarefas na velocidade da luz ⚡
      </p>

      <div className="flex gap-4">
        <NeonButton>Entrar</NeonButton>
        <NeonButton>Criar Conta</NeonButton>
      </div>
    </div>
  );
}
