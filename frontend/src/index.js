import React from 'react';
import ReactDOM from 'react-dom';//integração do react com a dom/ arvore de elementos
import App from './App';//importando o arquivo app.js dentro de uma variavel app

//ReactDOmM renderizando(colocando em tela) o app. (geralmente o componente react tem a letra mauscula), pondo isso dentro da div com o id root
ReactDOM.render(<App/>, document.getElementById('root'));
