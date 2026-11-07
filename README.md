# Controle Financeiro em React (estudo)

Primeira versão de um controle financeiro: saldo, entradas, saídas e movimentações.

---

## Sumário

- [Visão geral](#visão-geral)
- [Stack e versões](#stack-e-versões)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Primeiros passos](#primeiros-passos)
- [Scripts](#scripts)
- [Autor](#autor)

---

## Visão geral

Projeto de estudo de React com TypeScript e styled-components. Uma tela única com o saldo atual, um formulário para lançar entradas e saídas e a lista de movimentações. Foi o ponto de partida do [Controle Financeiro Pessoal](https://github.com/marcospsdev/my-personal-finances), bem mais completo.

Principais funcionalidades:

- Componentes tipados com interfaces de props
- Estilos com styled-components
- Cálculo de saldo a partir das movimentações

Feito em 2025, nos estudos de React.

---

## Stack e versões

| Categoria | Tecnologia | Versão |
| --- | --- | --- |
| Linguagem | TypeScript | 5.7 |
| UI | React | 19.0 |
| Build | Vite | 6.2 |
| Estilo | styled-components | 6.1 |
| Ícones | Font Awesome | 0.2 |
| Qualidade | ESLint + Prettier | 9.21 / 3.5 |

As versões exatas estão no `package.json`.

---

## Estrutura do projeto

```
src/
  assets/
    react.svg
  components/
    Balance/
    Button/
    Expense/
    FinanceControl/
    Header/
    Movements/
  models/
    interfaces/
  utils/
    util.ts
  App.css
  App.tsx
  index.css
  main.tsx
  vite-env.d.ts
```

---

## Primeiros passos

### Pré-requisitos

- Node.js 18 ou mais recente
- npm

### Instalação

```bash
git clone https://github.com/marcospsdev/Finance-Control-in-React.git
cd Finance-Control-in-React
npm install
npm run dev               # http://localhost:5173
```

---

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento (Vite) |
| `npm run build` | Typecheck e build de produção em `dist/` |
| `npm run lint` | Analisa o código com o ESLint |
| `npm run preview` | Serve o build de produção localmente |

---

## Autor

**Marcos Paulo** · Desenvolvedor Full-Stack

- LinkedIn: [in/marcospsdev](https://www.linkedin.com/in/marcospsdev)
- GitHub: [@marcospsdev](https://github.com/marcospsdev)
