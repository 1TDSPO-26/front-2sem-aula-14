<<<<<<< HEAD
import Cabecalho from './components/Cabecalho'
import Conteudo from './components/Conteudo'
import Rodape from './components/Rodape'

export default function App() {
  return (
    <>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </>
  )
}
=======
import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";

export default function App() {
  return (
    <div>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </div>
  )
}
>>>>>>> feature/exemplo-pf0670
