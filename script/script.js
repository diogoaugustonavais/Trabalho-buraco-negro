// ==========================================
// 1. BASE DE DADOS (REAIS E MITOLÓGICOS)
// ==========================================
const buracosNegros = [
  {
    nome: "Sagittarius A*",
    tipo: "Supermassivo (Real)",
    ano: "1974 (Descoberto)",
    massa: "4 milhões de massas solares",
    distancia: "26.000 anos-luz",
    imagem: "https://d2pn8kiwq2w21t.cloudfront.net/original_images/sgra_blackhole_eht.png",
    descricao: "O buraco negro supermassivo localizado bem no centro da nossa galáxia, a Via Láctea."
  },
  {
    nome: "M87*",
    tipo: "Supermassivo (Real)",
    ano: "2019 (Primeira imagem capturada)",
    massa: "6,5 bilhões de massas solares",
    distancia: "55 milhões de anos-luz",
    imagem: "https://cdn.sci.news/images/enlarge10/image_11828e-M87-PRIMO-Image.jpg",
    descricao: "Famoso mundialmente por ser o primeiro buraco negro a ter sua sombra fotografada na história."
  },
  {
    nome: "TON 618",
    tipo: "Hipermassivo / Quasar (Real)",
    ano: "1957 (Descoberto)",
    massa: "66 bilhões de massas solares",
    distancia: "10,4 bilhões de anos-luz",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Ton618.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
    descricao: "Um dos maiores e mais luminosos buracos negros hipermassivos já descobertos no universo."
  },
  {
    nome: "Cygnus X-1",
    tipo: "Estelar (Real)",
    ano: "1964 (Descoberto)",
    massa: "21 massas solares",
    distancia: "6.070 anos-luz",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/a/af/Cygnus_X-1.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
    descricao: "Foi o primeiro buraco negro estelar a ser amplamente confirmado e aceito pela comunidade científica."
  },
  {
    nome: "Centaurus A",
    tipo: "Supermassivo / Núcleo Ativo (Real)",
    ano: "1847 (Galáxia descoberta / Buraco negro mapeado depois)",
    massa: "55 milhões de massas solares",
    distancia: "13 milhões de anos-luz",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Centaurus_A.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
    descricao: "Possui jatos relativísticos gigantescos que se estendem por centenas de milhares de anos-luz no espaço."
  },
  {
    nome: "O Portal de Event Horizon",
    tipo: "Singularidade Artificial (Ficção / Filme Event Horizon)",
    ano: "1997 (Lançamento do Filme)",
    massa: "Desconhecida / Dimensional",
    distancia: "Nossa galáxia (Nave experimental)",
    imagem: "https://www.correiobraziliense.com.br/cbradar/wp-content/uploads/2025/09/buraco-negro_1758571983843.jpg",
    descricao: "Uma singularidade criada artificialmente por uma espaçonave para dobrar o espaço-tempo, abrindo um portal para uma dimensão caótica."
  },
  {
    nome: "O Devorador de Mundos",
    tipo: "Entidade Ancestral (Mitologia Cósmica)",
    ano: "Origem Antiga / Lenda",
    massa: "Incalculável / Infinita",
    distancia: "Além do nosso universo visível",
    imagem: "https://hypescience.com/wp-content/uploads/2024/11/buraco-negro-devorando-materia-40x-mais-do-que-o-limite-1.jpg",
    descricao: "Uma lenda cósmica que representa o fim de todas as eras, engolindo galáxias inteiras no folclore estelar."
  },
  {
    nome: "Gargantua",
    tipo: "Supermassivo (Ficção / Interstellar)",
    ano: "2014 (Lançamento do Filme)",
    massa: "100 milhões de massas solares",
    distancia: "10 bilhões de anos-luz (Sistema fictício)",
    imagem: "https://cdn.universoracionalista.org/wp-content/uploads/2020/07/gargantua-interestellar.jpg",
    descricao: "O icônico buraco negro rotativo do filme Interstellar, famoso por seu gigantesco disco de acreção."
  }
];

const inputBusca = document.getElementById('vote-number');
const containerPrevia = document.getElementById('vote-preview');
const formBusca = document.getElementById('vote-form');
const listaCandidatos = document.getElementById('candidate-list');
const listaCadastradosCompleta = document.getElementById('lista-cadastrados-completa');

const mensagemInicialHTML = `
  <div class="mensagem-previa">
    <span class="icone-previa" aria-hidden="true">◉</span>
    <p>Digite o nome de um buraco negro e clique em "Ver Informações".</p>
  </div>
`;

// Função de busca ao clicar no botão
function buscarBuracoNegro(termo) {
  const termoFormatado = termo.trim().toLowerCase();
  
  if (termoFormatado === '') {
    containerPrevia.innerHTML = mensagemInicialHTML;
    return;
  }

  const encontrado = buracosNegros.find(item => 
    item.nome.toLowerCase().includes(termoFormatado)
  );

  if (encontrado) {
    containerPrevia.innerHTML = `
      <div class="previa-candidato">
        <img src="${encontrado.imagem}" alt="${encontrado.nome}">
        <div>
          <h4>${encontrado.nome}</h4>
          <span class="numero-candidato">${encontrado.tipo}</span>
          <p class="descricao-candidato"><strong>Ano / Origem:</strong> ${encontrado.ano}</p>
          <p class="descricao-candidato"><strong>Massa:</strong> ${encontrado.massa}</p>
          <p class="descricao-candidato"><strong>Distância:</strong> ${encontrado.distancia}</p>
          <p class="descricao-candidato" style="margin-top: 5px;">${encontrado.descricao}</p>
        </div>
      </div>
    `;
  } else {
    containerPrevia.innerHTML = `
      <div class="mensagem-erro" style="padding: 10px; color: #ff6b6b; text-align: center;">
        <p>Nenhum buraco negro encontrado com o nome "${termo}".</p>
      </div>
    `;
  }
}

// Renderiza a lista rápida na tela inicial
function renderizarListaInicio() {
  if (!listaCandidatos) return;
  
  listaCandidatos.innerHTML = buracosNegros.map(item => `
    <div class="cartao-item-lista">
      <strong>${item.nome}</strong><br>
      <small style="color: #8b949e;">${item.tipo}</small>
    </div>
  `).join('');
}

// Renderiza APENAS OS NOMES na aba "Buracos Negros Cadastrados"
function renderizarListaCompleta() {
  if (!listaCadastradosCompleta) return;

  listaCadastradosCompleta.innerHTML = buracosNegros.map(item => `
    <li>
      <strong>${item.nome}</strong> <span style="color: #8b949e; font-size: 0.85rem;">(${item.tipo})</span>
    </li>
  `).join('');
}

// ==========================================
// 3. EVENTOS DO SITE
// ==========================================

if (formBusca) {
  formBusca.addEventListener('submit', (e) => {
    e.preventDefault();
    buscarBuracoNegro(inputBusca.value);
  });
}

if (inputBusca) {
  inputBusca.addEventListener('input', (e) => {
    if (e.target.value.trim() === '') {
      containerPrevia.innerHTML = mensagemInicialHTML;
    }
  });
}

// Controle de abas
document.addEventListener('DOMContentLoaded', () => {
  const linksNavegacao = document.querySelectorAll('[data-view-link]');
  const telas = document.querySelectorAll('[data-view]');

  linksNavegacao.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const destino = link.getAttribute('data-view-link');

      linksNavegacao.forEach(l => l.removeAttribute('aria-current'));
      link.setAttribute('aria-current', 'page');

      telas.forEach(tela => {
        if (tela.getAttribute('data-view') === destino) {
          tela.removeAttribute('hidden');
        } else {
          tela.setAttribute('hidden', 'true');
        }
      });
    });
  });

  renderizarListaInicio();
  renderizarListaCompleta();
});
