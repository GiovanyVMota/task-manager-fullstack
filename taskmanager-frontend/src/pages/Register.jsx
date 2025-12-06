import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api"; // Usa a instância configurada
import NeoButton from "../components/NeoButton";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // Agora usa 'api.post' e o caminho relativo
      await api.post("/api/auth/register", {
        name,
        email,
        password,
      });

      alert("Conta criada com sucesso!");
      navigate("/login");
    } catch (err) {
      console.error(err.response || err);
      const msg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Erro ao criar conta";
      alert(msg);
    }
  }

  return (
    <div className="min-h-screen w-full bg-darkBg text-white flex items-center justify-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-md w-full mx-4">
        <div className="absolute -inset-1 bg-gradient-to-b from-cyanNeon/40 via-purpleNeon/40 to-transparent blur-2xl opacity-60" />
        <div className="relative bg-gradient-to-br from-[#050b18] to-[#020617] rounded-3xl border border-cyanNeon/40 shadow-[0_0_40px_rgba(56,189,248,0.5)] p-10">
          <h1 className="text-3xl font-bold text-center mb-2">Criar Conta</h1>
          <p className="text-center text-slate-300 mb-8">
            Entre no sistema cibernético
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Nome</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl bg-slate-100 text-black px-4 py-2.5 border border-slate-400 focus:outline-none focus:ring-2 focus:ring-cyanNeon focus:border-cyanNeon placeholder:text-slate-500"
                placeholder="Seu nome"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl bg-slate-100 text-black px-4 py-2.5 border border-slate-400 focus:outline-none focus:ring-2 focus:ring-cyanNeon focus:border-cyanNeon placeholder:text-slate-500"
                placeholder="voce@exemplo.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl bg-slate-100 text-black px-4 py-2.5 border border-slate-400 focus:outline-none focus:ring-2 focus:ring-cyanNeon focus:border-cyanNeon placeholder:text-slate-500"
                placeholder="••••••••"
                required
              />
            </div>

            <NeoButton type="submit" className="w-full mt-4">
              Cadastrar
            </NeoButton>
          </form>

          <p className="mt-6 text-center text-slate-300 text-sm">
            Já tem conta?{" "}
            <Link
              to="/login"
              className="text-cyanNeon hover:text-purpleNeon transition-colors"
            >
              Entrar agora
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}