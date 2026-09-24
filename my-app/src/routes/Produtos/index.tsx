import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import type { TipoProduto } from '../../types/types';

export default function Produtos() {
  document.title = "Produtos";
  const [produtos, setProdutos] = useState<TipoProduto[]>([]);

  useEffect(() => {
    setProdutos(listaProdutos);
  }, []);

  return (
    <main style={{ padding: '20px' }}>
      <h1>Painel de Produtos</h1>
      <table border={1} cellPadding={10} style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#2c3e50', color: '#ffffff' }}>
            <th>Foto</th>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((item) => (
            <tr key={item.id}>
              <td><img src={item.avatar} alt={item.nome} width={60} height={60} style={{ objectFit: 'cover' }} /></td>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>R$ {item.preco.toFixed(2)}</td>
              <td>
                <Link to={`/editar-produtos/${item.id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}