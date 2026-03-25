// import de biblioteca externa, instaladas via npm
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import "./App.css";
// import de componentes 
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import ListaProdutos from './paginas/ListaProdutos/ListaProduto';

const roteador = createBrowserRouter([
 {
   path:"" ,
   element: <PaginaInicial/>,
 },
 {
        path: 'lista-produtos',
        element: <ListaProdutos />,
 },
 {
  path: 'lista-produtos',
        element: <ListaProdutos />,
 }
 {
    path:"*" ,
   element: <h3>Página não encontrada !!!</h3>
 }
]);


function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={roteador} />
      <Rodape /> 
    </>
  );
}

export default App;
