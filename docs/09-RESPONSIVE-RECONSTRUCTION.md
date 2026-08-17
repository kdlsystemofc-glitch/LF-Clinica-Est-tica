# LF CLÍNICA ESTÉTICA — RESPONSIVE EXPERIENCE RECONSTRUCTION
## DOCUMENTAÇÃO DE DESIGN RESPONSIVO (FASE 07)

> **Regra Cardeal:** O design responsivo não é apenas compressão de layout ou `flex-direction: column` indiscriminado; é uma **reconstrução intencional da experiência de uso** para cada contexto de tela e ergonomia de toque.

---

### 1. Matriz de Reconstrução por Breakpoint

| Breakpoint | Contexto de Uso | Reconstrução Estrutural da Navegação | Reconstrução do Hero e Imagens | Reconstrução dos Grids e Tipografia |
| :--- | :--- | :--- | :--- | :--- |
| **1440 × 900** | Desktop Standard / Telas Grandes | Navegação fixa no topo (`padding: 20px 0`), status da clínica em tempo real com indicador de pulso, alternador `SBC / ABC` e botão `AGENDAR AVALIAÇÃO ↗`. | Monograma `LF` de 180px com portal em arco catedral (220×290px) e asa vertical à direita com 5 pilares clínicos. | Tipografia display de 136px / 150px, Bento Grid em 4 colunas, carrossel horizontal de 4 cartões com largura fixa de 380px. |
| **1024 × 768** | Small Desktop / Tablet Paisagem | Navegação fixa no topo mantida, redução sutil de espaçamentos laterais (`padding: 0 32px`). | Iniciais `LF` escalonadas para 140px, portal fotográfico ajustado para 190×250px com proporção áurea intacta. | Bento Grid reorganizado em 2 colunas com Tile 1 (Retrato) ocupando largura dupla (`span 2`), carrossel mantido com arraste tátil. |
| **768 × 1024** | Tablet Retrato / Telas Médias | Transição para doca fixa inferior no rodapé (`bottom: 0`), otimizando o alcance dos polegares e liberando a visão superior. | Bloco fotográfico centralizado, diretório de tratamentos clínicos reorganizado em grid de 2 colunas com alvos de toque expandidos. | Tipografia monumental escalonada para 84px / 96px, declaração em cascata (`re` / `cupe` / `rar`) alinhada para leitura fluida vertical. |
| **390 × 844** | Smartphone / Mobile Padrão | Doca de navegação fixa inferior com botão de conversão de alta prioridade (`AGENDAR AVALIAÇÃO ↗`) e alternador regional de toque direto. | Foto da Dra. Luana Fernandes reposicionada no topo do Hero com proporção 4:3 acolhedora (240px altura), seguida do logotipo oficial. | Bento Grid reorganizado em coluna única sem rolagem horizontal indesejada, cartões de tratamentos verticais de toque rápido e anel orbital reduzido para 290px. |

---

### 2. Otimizações Ergonômicas e de Toque

1. **Thumb-Zone Optimization:** Em dispositivos móveis (<768px), o botão de agendamento no WhatsApp e o alternador regional ficam ancorados na parte inferior da tela, garantindo agendamento imediato com uma única mão.
2. **Áreas de Toque (Touch Targets):** Todos os botões, links de tratamentos e campos do formulário possuem área mínima de clique de `48 × 48 px`.
3. **Zero Overflow Horizontal:** Todos os contêineres e textos utilizam `max-width: 100%`, `box-sizing: border-box` e `overflow-x: hidden` no corpo da página para eliminar qualquer deslize lateral acidental.
