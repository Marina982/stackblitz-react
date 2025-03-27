import { useState } from 'react';
import './Login.css';

export default function Login() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCPF] = useState('');

  const login = async (event) => {
    event.preventDefault();
    try {
      const resp = await fetch('http://localhost:5173/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, idade, cpf }),
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
        <input
          type="number"
          value={idade}
          placeholder="Idade"
          onChange={(event) => setIdade(event.target.value)}
        />
        <input
          type="text"
          value={cpf}
          placeholder="CPF"
          onChange={(event) => setCPF(event.target.value)}
        />
        <button type="submit">Realizar Login</button>
      </form>
    </main>
  );
}
