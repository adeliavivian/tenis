import { useState } from 'react'
import './App.css'
import airmaxExcee from './assets/airmax-excee.avif'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header></header>
        <section className="produtos">

          {/* Card 1- */}
          <div className="card">
            <img src={airmaxExcee} alt="" />
            <h2>Tênis Nike Air Max Excee Feminino</h2>
            <p className="desc">Inspirado no Nike Air Max 90, o Nike Air Max Excee celebra um clássico com um visual repaginado. O design de linhas alongadas e proporções distorcidas na parte de cima elevam um ícone a um espaço moderno.</p>
            <p className="classificacao"> ★ ★ ★ ★ ★(999)</p>
            <p className="preco">R$ 474,99</p>
            <p className="off">4%</p>
          </div>
        </section>
        <section className="destaque"></section>
        <footer></footer>
      </main>
    </>
  )
}

export default App
