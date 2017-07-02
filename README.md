#### Store App

Esta é uma aplicação de pesquisa construida com **React** e **Redux** que consome dados da API 	'http://henriquechaves.getsandbox.com/'.  

O boilerplate escolhido foi o **create-react-app** \(veja documentação aqui: https://github.com/facebookincubator/create-react-app\), pois ele facilita bastante o "get started" do desenvolvimento, sem necessidade de fazer toda a configuração do Webpack a partir do zero, alem dos motivos citados na propria documentação:  

- React, JSX, ES6, and Flow syntax support.
- Language extras beyond ES6 like the object spread operator.
- A dev server that lints for common errors.
- Import CSS and image files directly from JavaScript.
- Autoprefixed CSS, so you don’t need -webkit or other prefixes.
- A build script to bundle JS, CSS, and images for production, with sourcemaps.  

O que tem dentro do create-react-app:  

- webpack with webpack-dev-server, html-webpack-plugin and style-loader
- Babel with ES6 and extensions used by Facebook (JSX, object spread, class properties)
- Autoprefixer
- ESLint
- Jest
- and others.  

Além do que foi dito acima também foram usados alguns módulos específicos como Axios\(para fazer requisições\), Underscore.js\(alguns helpers funcionais e produtivos\) e para estilização a biblioteca Semantic UI React.  

- React
- Redux
- Semantic UI React
- Axios
- Underscore.js  

**WorkFlow**  

- Login  

O Usuário faz o login usando suas credenciais > A aplicação faz o GET de login, valida e faz um novo GET buscando todos os usuários e mapeia o retorno para encontrar o usuario referente ao token de login(pois somente no GET all users temos o retorno do id de usuario, e precisaremos dessa informação para ações futuras) > O usuario é redirecionado para tela inicial(com o proprio metodo de replace do browserHistory)

- Mercado  

Na tela inicial é feito um GET all products, e no retorno é feito um map nos produtos e uma função verifica o tipo de usuario, caso ele seja afiliado ela percorre o array de 'affiliates' e verifica se o id daquele usuario existe, caso ele exista ela exibe um botão de cancelar afiliação, caso contrário ela exibe um botão de afiliar, no caso de usuário produtor ela apenas exibe todos os produtos.

- Meus Produtos  
Nesta tela é feito um GET dos produtos do usuario em questão, e uma função verifica o tipo de usuario para saber qual componente carregar(Afiliado ou Produtor) > No componente de afiliado ele visualiza todos os produtos o qual ele é afiliado e um botão de cancelar afiliação. Para o componente do usuario produtor ele visualiza os produtos que ele criou, com a informação de quantos afiliados cada produto possui, ele também tem botões para editar e excluir o produto.

- Adicionar Produto  
A tela de adicionar produtos é acessivel apenas para usuarios do tipo produtor(uma função valida o tipo de usuario e deixa o link para a mesma desativado caso ele seja do tipo 'affiliated'), neste componente existe um formulário para adicionar o produto, de forma simples o usuario preenche os campos(com validação para nao estarem vazios) e envia seu produto, recebendo uma mensagem de sucesso.

- Editar Produto  
Basicamente o mesmo componente de adicionar produto, porem ele recebe as informações do produto para ser editado, e preenche os campos dos inputs com esses dados. O usuario edita e salva o produto, seguindo a mesma lógica de adicionar produto.

- Design das telas  
O design das telas e dos componentes foi feito quase que na totalidade com a biblioteca Semantic UI React, pois além de ser uma biblioteca que te fornece componentes fragmentáveis, reutilizaveis e de boa usabilidade(seguindo o conceito de desenvolvimento com React), ela acelera o desenvolvimento da aplicação te deixando isento da preocupação em estilização com CSS próprio(com isso podemos focar mais no fluxo de dados e na qualidade de código).


**Usuarios**  

- Afiliado  
Usuario: usuarioafiliado@hotmart.com.br  
Senha: usuarioafiliado123  

- Produtor  
Usuario: usuarioprodutor@hotmart.com.br  
Senha: usuarioprodutor123  

**Instalação**  

```
  git clone  
  cd client  
  npm i  
  npm start  
```  

ou para rodar em produção  

```
  git clone  
  cd client  
  npm i  
  npm run eject  
  npm run build  
````

_That's all forks... Pull request me._
