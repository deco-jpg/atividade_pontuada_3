import './style.css';

import mae from '../assets/mae.jpg';
import pai from '../assets/pai.jpg';
import familia from '../assets/familia.jpg';

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h2>Obrigado por tudo ❤️</h2>

        <p>
          Esta página é uma homenagem às pessoas mais importantes da minha vida.
          Obrigado por cada conselho, cada ensinamento e cada demonstração de amor.
        </p>
      </section>

      <section id="mae" className="card-section">

        <img src={mae} alt="Minha mãe" />

        <div>
          <h2>Minha Mãe</h2>

          <p>
            Obrigado por todo carinho, dedicação e apoio.
            Seu amor, sua força e sua presença me inspiram todos os dias.
            Você sempre esteve ao meu lado nos momentos mais importantes
            da minha vida.
          </p>
        </div>

      </section>

      <section id="pai" className="card-section">

        <div>
          <h2>Meu Pai</h2>

          <p>
            Obrigado pelos ensinamentos, pela proteção e por sempre
            acreditar em mim. Seu exemplo de determinação e caráter
            me ajuda a enfrentar os desafios e buscar meus objetivos.
          </p>
        </div>

        <img src={pai} alt="Meu pai" />

      </section>
      <section id="galeria">

        <h2>Momentos Especiais 📸</h2>

        <div className="gallery">

          <img src={familia} alt="Família" />

          <img src={mae} alt="Minha mãe" />

          <img src={pai} alt="Meu pai" />

        </div>

      </section>

      <section className="mensagem">

        <h2>Mensagem Especial ❤️</h2>

        <p>
          Queridos pais, obrigado por cada esforço, conselho e
          demonstração de amor ao longo da minha vida.

          Vocês me ensinaram valores que levarei para sempre,
          me apoiaram nos momentos difíceis e comemoraram comigo
          cada conquista.

          Tudo o que sou hoje tem um pouco de cada um de vocês.

          Amo vocês e sou muito grato por tudo que fizeram por mim.
        </p>

      </section>

    </main>
  );
}

export default Home;