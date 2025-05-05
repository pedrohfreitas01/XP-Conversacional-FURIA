# FURIA Landing + Chatbot

Landing page oficial da FURIA com integração ao **chatbot Dialogflow**, desenvolvida em **React** com **Styled Components**.

## 🚀 Tecnologias Utilizadas

- React
- Styled Components
- JavaScript
- Dialogflow Messenger
- Vite 

## 📦 Instalação e Execução

1. Clone o projeto:

```bash
git clone https://github.com/seu-usuario/furia-bot-landing.git
cd furia-bot-landing
```

2. Instale as dependências:

```
yarn install
# ou
npm install
```


3. Rode o projeto localmente:

```
yarn dev
# ou
npm run dev
```

### Chatbot Integrado
A integração com o Dialogflow Messenger foi feita diretamente no React usando:

```
<script
  src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
></script>

<df-messenger
  intent="WELCOME"
  chat-title="FURIA Bot"
  agent-id="SEU_AGENT_ID"
  language-code="pt-br">
</df-messenger>

```

### Funcionalidades
Menu interativo com:

    - Modalidades (CS, LOL, Kings League, R6)

    - Elencos e campeonatos

    - Loja com produtos oficiais

    - Últimas notícias

     -Dicas para se tornar pro player

#### 📽️ Vídeo Demonstrativo
Confira o vídeo explicando o funcionamento do chatbot e a integração com o site:

https://youtu.be/uiK1Q5ud-uI