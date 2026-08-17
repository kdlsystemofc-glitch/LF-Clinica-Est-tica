# LF CLÍNICA ESTÉTICA — MOTION & INTERACTION IMPLEMENTATION
## DOCUMENTAÇÃO OFICIAL DE MOTION GRAMMAR (FASE 06)

---

### 1. Filosofia e Gramática de Movimento

O sistema de movimento da **LF Clínica Estética** é **arquitetural, fluido e informado pela física**. Ele rejeita animações decorativas gratuitas e concentra-se em três objetivos funcionais:
1. **Ancoragem Espacial:** Direcionar o foco visual para declarações monumentais e dados de autoridade.
2. **Sensação Tátil de Alta Confiança:** Proporcionar retorno físico suave ao toque, arraste e hover em tratamentos e formulários.
3. **Vitalidade Orgânica Contínua:** Transmitir a regeneração celular e o cuidado contínuo através de ondas bioelásticas e rotações orbitais amortecidas.

---

### 2. Matriz de Mecânicas de Movimento Implementadas

| Mecânica | Gatilho (Trigger) | Alvo (Target) | Propriedades Animadas | Duração & Easing | Relação com o Scroll | Comportamento Responsivo |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **M1: Smart Navigation** | Scroll direcional | `.site-nav` | `transform: translateY()`, `backdrop-filter`, `padding` | `0.45s` `cubic-bezier(0.16, 1, 0.3, 1)` | Oculta no scroll down (`-115%`), revela no scroll up (`0%`) com fundo translúcido | No mobile (<768px), o menu ancora no rodapé (`bottom: 0`) e se oculta para baixo (`110%`). |
| **M2: Hero Stagger Entrance** | Carregamento da página | Monograma, Título, Foto, Pílulas e Spine | `stroke-dashoffset`, `opacity`, `transform: translateY()` | `0.85s` a `1.4s` em cascata sequencial | Independente de scroll (splash imediato) | Stagger unificado com ordem preservada no layout vertical mobile. |
| **M3: Scroll Reveal** | `IntersectionObserver` (12% visibilidade) | `.reveal-on-scroll` em todas as cenas | `opacity: 0 → 1`, `transform: translateY(32px → 0)` | `0.85s` `cubic-bezier(0.16, 1, 0.3, 1)` | Disparado uma única vez ao entrar no viewport com margem inferior de `-40px` | Totalmente preservado no mobile. |
| **M4: Carousel Drag & Inertia** | Mouse down / Move / Up & Touch | `#storiesTrack` | `scrollLeft`, `transform: translateY(-8px)` nos cards | Física de arraste linear com `ease` suave | Permite rolagem horizontal livre sem quebrar o fluxo vertical | Touch nativo com scroll-snap suave. |
| **M5: Bento Grid Micro-Interactions** | Hover do usuário | `.bento-tile` | `transform: translateY(-4px)`, `box-shadow`, `border-color` | `0.55s` `cubic-bezier(0.16, 1, 0.3, 1)` | Interação sob demanda | Desativado no mobile para priorizar toque sem travamentos. |
| **M6: Bio-Elastic Wave Canvas** | Loop Contínuo `requestAnimationFrame` | `#bioWaveCanvas` (Tile 6) | 4 ondas senoidais harmônicas em 60fps | Contínuo com velocidade de fase `0.02` - `0.035` | Renderização contínua com zero overhead de DOM | Canvas redimensionado responsivamente. |
| **M7: Stepped Kinetic Parallax** | Scroll do usuário na Cena 06 | `.stepped-col` (`re`, `cupe`, `rar`) | `transform: translateY(calc(offset * speed))` | Passo a passo passivo em tempo real | Coluna 1: velocidade 0; Coluna 2: velocidade 0.1; Coluna 3: velocidade 0.2 | No mobile, as colunas empilham-se verticalmente com parallax desativado para legibilidade. |
| **M8: Maternal Eye Mouse Tracking** | `mousemove` na janela | `#irisElement`, `#pupilElement` | `transform: translate(x, y)` com amortecimento LERP | `requestAnimationFrame` contínuo com interpolação `0.1` | Limite de deslocamento radial de 14px | Mantém posição centrada neutra no mobile/touch. |
| **M9: Orbital 360° Vision Ring** | Animação Contínua CSS | `#glyphOrbitRing` | `transform: rotate(0deg → 360deg)` | `60s` linear infinito | Rotação orbital constante | Escala proporcional reduzida no mobile (de 520px para 380px). |
| **M10: Skyline Footer Tapestry Stagger** | Viewport Enter na Cena 10 | `.skyline-col` (12 colunas) | `opacity: 0 → 1`, `transform: translateY(30px → 0)` | `0.8s` com delay de `0.05s` a `0.3s` por coluna | Efeito de skyline que emerge do solo ao alcançar o rodapé | Oculto em telas menores (<768px) para priorizar os dados de contato. |

---

### 3. Diretrizes de Performance & Acessibilidade

- **Zero Layout Thrashing:** Todas as animações e transições utilizam exclusivamente propriedades aceleradas por hardware GPU (`transform` e `opacity`).
- **Suporte Obrigatório a `prefers-reduced-motion`:** Usuários com sensibilidade vestibular têm todas as animações infinitas, rotações orbitais e transições paralisadas instantaneamente via CSS media query e guardas JavaScript.
- **Scroll Listeners Passivos:** Todos os listeners de rolagem utilizam `{ passive: true }` para garantir 60fps sem bloqueio da thread principal.
