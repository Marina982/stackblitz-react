import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/firebaseConfig"; 

export default function Registra() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      navigation('/login'); 
    } catch (erro) {
      alert(`Erro ao cadastrar: ${erro.message}`); 
    }
  };

  return (
    <main>
      <form onSubmit={handleRegister}>
        <h2>Registrar</h2>
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
        <button type="submit">Registrar</button>
      </form>
    </main>
  );
}
