import { useEffect, useState } from "react";
import type { TipoProdutoJ } from "../../types/types";
import { Link } from "react-router";

export default function Produtos() {
    //Modificar o título da página;
    document.title = "Produtos";

    //Criando o recipiente da lista de dados e tipando com o tipo de produto
    const[produtos,setProdutos] = useState<TipoProdutoJ[]>([]);

    useEffect( ()=>{
        //Simulando a requisição para o backend
        const carregarProdutos = async ()=>{

        try {

            const resposta = await fetch("http://localhost:3001/produtos");

            if (!resposta.ok){
                throw new Error(`Erro na listagem de produtos: ${resposta.status} - ${resposta.statusText}`)
            }

            const data:TipoProdutoJ[] = await resposta.json();
            console.log(data);
            setProdutos(data);


        } catch (error) {
            console.error(error);
        }

    }

    carregarProdutos();

    },[]);

         for (let index = 0; index < produtos.length; index++) {
            const element = produtos[index];
            console.log(element);
            
        }

    return (
        <main style={{ padding: '20px' }}>
            <h2>Produtos</h2>

            <table border={1} cellPadding={10} style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: '#2c3e50', color: '#ffffff' }}>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Descrição</th>
                        <th>Avatar</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map( (p)=>(
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td>{p.estoque}</td>
                            <td><img src={p.avatar} alt={p.nome} width={60} height={60} style={{ objectFit: 'cover' }}/></td>
                            <td><Link to={`/editar-produtos/${p.id}`}>Editar</Link></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={6}>Quantidade de produtos - {produtos.length}</td>
                    </tr>                    
                </tfoot>
            </table>

        </main>
    )
}
