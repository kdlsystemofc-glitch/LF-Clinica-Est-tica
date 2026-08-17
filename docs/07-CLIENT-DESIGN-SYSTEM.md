# LF CLÍNICA ESTÉTICA — CLIENT DESIGN SYSTEM TRANSLATION
## DOCUMENTO OFICIAL DE DESIGN SYSTEM (FASE 04)

> **Regra Fundamental de Ouro:**  
> **REFERENCE DNA = Arquitetura, Geometria Espacial, Proporções e Mecânica de Scroll.**  
> **CLIENT DNA = Identidade, Cromática Autêntica, Tipografia Nobre, Linguagem Gráfica e Fotografia Real.**

---

## 1. Evidências de Identidade Extraídas

A identidade da **LF Clínica Estética / Dra. Luana Fernandes** foi derivada diretamente da auditoria de ativos reais:
1. **Marca e Monograma:** Monograma caligráfico `lf` entrelaçado com a ilustração linear contínua da maternidade (mãe acolhendo o recém-nascido), simbolizando acolhimento, regeneração pós-parto e cuidado científico.
2. **Ambiente Físico da Clínica (São Bernardo do Campo):**
   - Revestimentos em granilite/terrazzo nobre com pigmentos minerais quentes.
   - Puxadores e metais em latão escovado / ouro champanhe acetinado (`#C5A880`).
   - Macas e mobiliário clínico em tons alabastro e nude/blush suave (`#FAF9F6` / `#F5EDE6`).
3. **Fotografia e Tons de Pele:** Casos reais de antes/depois de estrias e flacidez dérmica com fototipos brasileiros variados, exigindo fundos quentes e respeitosos que valorizem a textura e a vitalidade da pele.

---

## 2. Sistema de Cores (Tokens Centrais)

| Token Semântico | Valor HEX / HSL | Fonte da Evidência | Papel no Sistema | Racional de Design |
| :--- | :--- | :--- | :--- | :--- |
| `--color-primary` | `#0B2B7A` / `hsl(223, 84%, 26%)` | Monograma e logotipo oficial | **Brand Primary** | Azul Cobalto Imperial profundo; transmite autoridade médica, rigor científico e confiança clínica. |
| `--color-primary-hover` | `#061D57` / `hsl(223, 87%, 18%)` | Variação tonal do logotipo | **Interactive Primary** | Estado ativo/hover com maior densidade visual. |
| `--color-accent` | `#C5A880` / `hsl(35, 38%, 64%)` | Metais e detalhes da clínica | **Brand Accent (Gold)** | Ouro champanhe acetinado; evoca sofisticação, cuidado premium e distinção estética. |
| `--color-accent-light` | `#F4EFEB` / `hsl(33, 33%, 94%)` | Mobiliário e macas da clínica | **Surface Accent** | Fundo de destaque suave para badges e pílulas de autoridade. |
| `--color-bg-primary` | `#FAF9F6` / `hsl(45, 20%, 97%)` | Paredes alabastro da clínica | **Background Primary** | Branco alabastro aquecido que elimina a frieza hospitalar e traz conforto visual. |
| `--color-bg-secondary` | `#F2EEE8` / `hsl(38, 22%, 93%)` | Mármore e terrazzo da recepção | **Background Secondary** | Superfície para transições de cena e contrastes estruturais. |
| `--color-surface` | `#FFFFFF` / `hsl(0, 0%, 100%)` | Uniformes e lençóis estéreis | **Surface (Cards/Badges)** | Branco puro para cartões, molduras e modais interativos. |
| `--color-text-main` | `#141414` / `hsl(0, 0%, 8%)` | Contraste de alta legibilidade | **Text Primary** | Preto carvão nobre com 95% de densidade para títulos e leituras. |
| `--color-text-muted` | `#635F59` / `hsl(36, 5%, 37%)` | Pigmentação mineral do terrazzo | **Text Secondary** | Cinza mineral quente para descritores técnicos e legendas. |
| `--color-border` | `#E5E0D6` / `hsl(39, 20%, 87%)` | Linhas de marcenaria da clínica | **Structural Border** | Linhas de separação de 1px com toque mineral e sem dureza plástica. |
| `--color-status-active` | `#10B981` / `hsl(160, 84%, 39%)` | Status operacional em tempo real | **System Status** | Verde esmeralda vivo com pulso luminoso para indicar funcionamento da clínica. |

---

## 3. Sistema Tipográfico

| Função | Família Tipográfica | Pesos | Racional de Escolha |
| :--- | :--- | :--- | :--- |
| **DISPLAY** | `Syne` | 800 (Extra Bold) | Expressa o impacto monumental da referência com geometria moderna e proporções escultóricas nas siglas `LF` e títulos de cena. |
| **EDITORIAL / SUBLINE** | `Cormorant Garamond` | 600, 700 (Semi-Bold / Bold) | Traz a herança clássica da estética de luxo e a delicadeza dos cuidados maternos para as declarações em minúsculas (`estrias e cuidados pós-parto`). |
| **BODY / INTERFACE** | `Plus Jakarta Sans` | 400, 500, 600, 700 | Geometria limpa, kerning balanceado e legibilidade cristalina para dados clínicos, horários e microtextos. |
| **META & BADGES** | `Plus Jakarta Sans` | 700 (All-Caps, Tracking: 0.15em-0.35em) | Estrutura dados técnicos com distinção editorial. |
| **CTA / BOTÕES** | `Plus Jakarta Sans` | 700 (All-Caps, Tracking: 0.12em) | Alta clareza de chamada para agendamento no WhatsApp. |

---

## 4. Linguagem de Imagens

- **Molduras Arquitetônicas (Cathedral Arches):** As fotografias clínicas verticais recebem bordas superiores em arco (`border-radius: 110px 110px 16px 16px`), inspiradas nas portas e espelhos da estética médica contemporânea.
- **Tratamento de Cor e Pele:** As fotografias reais preservam 100% da textura biológica autêntica, com leve aumento de microcontraste (`contrast: 1.03`) e nitidez luminosa para destacar a recuperação dérmica real.
- **Badges Integrados com Efeito Vidro:** Legendas sobrepostas utilizam fundo escuro acetinado com desfoque de fundo (`backdrop-filter: blur(12px)`) e tipografia em ouro champanhe.

---

## 5. Linguagem Gráfica

- **Linhas Estruturais:** Fios de 1px a 1.5px em tom mineral quente (`#E5E0D6`) e preto carbono para guiar o fluxo visual.
- **Setas e Vetores Direcionais:** Seta minimalista `↗` para links de conversão e `↓` com linha vertical contínua para a espinha dorsal de tratamentos.
- **Pílulas de Prova Social:** Formas ovais fluidas (`border-radius: 999px`) com micro-sombras difusas (`box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03)`).
- **Indicadores de Status Vivos:** Micro-pontos luminosos com animação de pulso suave.

---

## 6. Linguagem de UI

- **Botão CTA Principal:** Curvatura assimétrica exclusiva de 20px no topo esquerdo e base direita (`border-radius: 20px 0`), criando uma assinatura formal única que se eleva suavemente no hover com sombra cobalto.
- **Alternador de Região (SBC / ABC):** Trilho arredondado com chave deslizante ultra-suave.
- **Spine de Especialidades Clínicas:** Cartões numerados (`01` a `05`) com micro-deslocamento horizontal (`transform: translateX(-4px)`) e borda ativa cobalto no hover.

---

## 7. Personalidade de Movimento (Motion)

- **Arquitetura de Transição:** Herdada da referência (física de scroll direcional, dock fixo mobile).
- **Curva de Aceleração:** `cubic-bezier(0.16, 1, 0.3, 1)` (Easing suave de desaceleração elástica nobre).
- **Duração Base:** `250ms` para micro-interações de botões e `500ms` para transições de cabeçalho e modais.
- **Intensidade:** Sutil e sofisticada; evita movimentações bruscas para preservar o caráter médico de alta confiança.
