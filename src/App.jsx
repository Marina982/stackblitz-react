import { useState } from 'react';
import './Components/Login.css';
import { auth } from './Config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function App() {
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const autenticarComFirebase = async (evento) => {
    evento.preventDefault();
    try {
        await signInWithEmailAndPassword(auth, email, senha);
        alert("Logado com sucesso");
    } catch (err) {
        alert("Erro no processo", err);
    }
  };

  return (
    <main>
      <form onSubmit={autenticarComFirebase}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          value={senha}
          placeholder="Senha"
          onChange={(event) => setSenha(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
