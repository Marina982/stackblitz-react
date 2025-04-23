import { useState } from 'react'
import { auth } from './Config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";
import {SignJWT} from 'jose'
import './Components/Login.css'

export default function App (){
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate()

  const autenticarComFirebase = async (event) =>{
    event.preventDefault();
    try{
    await signInWithEmailAndPassword(auth, email, senha)

      const secretKey = new TextEncoder().encode('minha chave secreta')

      const token = await new SignJWT({user: 'admin'})
      .setProtectedHeader({alg: 'HS256'})
      .setIssuedAt()
      .setExpirationTime('1h')
      .sign(secretKey)

      localStorage.setItem('token', token);
      navigate('/');

    alert('logado com sucesso!')

    } catch(err){
      alert('erro no processo ' + err)
    }
  }

  return(
    <>
    <main>
      <form onSubmit={autenticarComFirebase}>
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          name="e-mail"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Senha:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />
        <button type="submit">Fazer Login</button>
        <Link to="/Registrar" className='Link'>
        <p>Não tenho conta</p>
      </Link>
      </form>
    </main>
    </>
  )
}