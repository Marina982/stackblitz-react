import { useState } from 'react';
import './Login.css';

export default function Login() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const login = async (event) => {
    event.preventDefault();
    try {
      const resp = await fetch('http://localhost:5173/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email}),
      });

      if (!resp.ok) {
        throw new Error('Erro na requisição');
      }

      alert('Login realizado com sucesso!');
    } catch (err) {
      alert('Erro ao registrar login');
    }
  };

  return (
    <main>
      <form onSubmit={login}>
        <input
          type="text"
          value={nome}
          placeholder="Nome"
          onChange={(event) => setNome(event.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
