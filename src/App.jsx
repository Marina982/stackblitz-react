import { useState } from 'react';
import './Components/Login.css';
import { auth } from './Config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { SignJWT } from 'jose';
import Home from './Home';


export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();

  const autenticarComFirebase = async (evento) => {
    evento.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      alert("Logado com sucesso");

      const secretKey = new TextEncoder().encode('MinhaChaveSecreta');

      const token = await new SignJWT({ user: 'admin' })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(secretKey);

      localStorage.setItem('token', token);

      navigate('/');
      alert('Logado com sucesso');
    } catch (err) {
      alert(`Erro no processo: ${err.message}`);
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
        <Link to="/Registrar">
          <p>Não tenho conta</p>
        </Link>
      </form>
    </main>
  );
}
