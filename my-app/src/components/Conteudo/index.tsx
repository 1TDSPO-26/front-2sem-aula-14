<<<<<<< HEAD
import imgQuadrado from "../../img/quadrado.png"; 

export default function Conteudo() {
    return (
        <main>
            <section>
            <h2>Conteúdo Aleatório</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, similique magnam vel alias natus qui quibusdam? Molestiae architecto quam labore minima minus voluptate nihil facere eaque, praesentium, blanditiis nisi mollitia nostrum placeat beatae omnis aliquid cum unde repellendus deleniti quia recusandae est quas? Fuga facere illo rerum et culpa nemo.</p>
            </section>
            <section>
                <h2>Imagem com referência externa</h2>
                <figure>
                    <img
                        src="https://placehold.co/600x400/FF0000/FFFFFF/png" alt="Imagem ilustrativa do conteúdo" width={200} />
                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>

            <section>
                <h2>Imagem com referência interna</h2>
                <figure>
                    <img
                        src={imgQuadrado} alt="Imagem ilustrativa do conteúdo" width={200}/>
                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>

            <section>
                <h2>Imagem com referência estática</h2>
                <figure>
                    <img
                        src="/quadrado2.png" alt="Imagem ilustrativa do conteúdo" width={200} />
                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>

        </main>
    )
}
=======
import { useState } from "react";
import imgQuadrado from "../../img/quadrado.png";
import Lampada from "../Lampada";

export default function Conteudo() {

  let comum:number = 0;

  function incrementaComum(){
    comum = comum + 1;
    console.log("Valor de comum:",comum);
  }

  const[estado,setEstado] = useState<number>(0);

  function incrementaEstado(){
    
    setEstado((anterior)=> anterior + 1 );
    console.log("Valor do estado:",estado);
  }

  document.title = "Valor do Estado : " + estado.toString();

  return (
    <main>
      <Lampada/>
      <div>
        <button onClick={incrementaComum}>Aumenta Comum - {comum}</button>
      </div>
      <div>
        <button onClick={incrementaEstado}>Aumenta Estado - {estado}</button>
      </div>
      <section>
        <h2>Conteúdo aleatório</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nisi voluptatum accusamus facere quod. Esse tempore beatae hic earum fuga odio sint et ea consectetur a? Vero quis voluptatem consequatur.</p>
      </section>

      <section>
        <h2>Imagem com referência externa</h2>
        <figure>
          <img src="https://placehold.co/600x400/FF0000/FFFFFF/png" alt="Imagem ilustrativa do conteúdo" width={200} />
          <figcaption>
            Imagem utilizada para representar o conteúdo da aplicação.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Imagem com referência interna</h2>
        <figure>
          <img src={imgQuadrado} alt="Imagem ilustrativa do conteúdo" width={200}/>
          <figcaption>
            Imagem utilizada para representar o conteúdo da aplicação.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Imagem com referência estática</h2>
        <figure>
          <img src="/quadrado-2.png" alt="Imagem ilustrativa do conteúdo" width={200} />
          <figcaption>
            Imagem utilizada para representar o conteúdo da aplicação.
          </figcaption>
        </figure>
      </section>

    </main>
  )
}
>>>>>>> feature/exemplo-pf0670
