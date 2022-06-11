# Olympus

Olympus é um serviço de assinatura de academias. Similar ao Gympass mas com foco no B2C e trazendo mais variedade, qualidade, experiência de usuário, estabilidade, velocidade, temática superior, preço competitivo e muito mais.


# Time

- Ruann de melo nascimento da silva - Full Stack
- Artur mandel barros - Front End
- Vinicius luiz silva de lima - Front End
- Iago douglas gonçalves - Back End
- Nicolas barretto de souza - Back End


# Projeto

O projeto do Olympus deveria ser uma aplicação web totalmente funcional que deveria permitir: Cadastro e Login de usuários, Planos de assinatura com múltiplas formas de pagamento, Geração de código para uso das academias no plano do usuário e Painel de controle de academias por administradores. No fim das contas não está completamente finalizado. Mas que tem algumas de suas funções finalizadas e com o seu investimento poderá ser finalizado, para investir no projeto ligue para 0000-0000 e converse com um membro de nosso time. Caso não tenha esteja decidido a investir, continue lendo e mostrarei um pouco do que foi desenvolvido, para que você entenda melhor a grandiosidade desse projeto.


# Front End

Para o Front do projeto temos uma página Home, Cadastro, Login, e as páginas do controle para administradores.

## Home Page

Uma página estática que apresenta informações básicas sobre Olympus e funciona como uma landing page para o projeto.

!["Print Home Page"](readme_images/homepage.png?raw=true "Print Home Page")

Essa imagem é apenas uma parte da página. Para acessar a página [clique aqui.](https://project-forrest.github.io/Home-Page/index.html)

## App de Registro e Login

Ambas as páginas foram construídas utilizando React mas não são funcionais.

!["Print Login Page"](readme_images/control_page_login.png?raw=true "Print Login Page")

!["Print Register Page"](readme_images/control_page_register.png?raw=true "Print Register Page")

Para acessar a página online [clique aqui.](https://candid-froyo-d3c9c8.netlify.app/)

## App de Controle de Academias

O app de controle foi construída utilizando React e funciona consumindo a API de controle de academias que será explicada na seção de Back End.

A página base é um aviso para mortais não acessarem a página.

!["Print Control Base Page"](readme_images/control_page_base.png?raw=true "Print Control Base Page")

Nessa página aparecem todas as academias registradas no banco de dados do projeto e tem em cada algumas informações sobre a academia e 2 botões. O botão Change ativa e desativa as academias e o Botão Delete apaga a academia do banco.

!["Print Control Gyms Page"](readme_images/control_page_gyms.png?raw=true "Print Control Gyms Page")

Tem também o formulário para criação de academias que permite a adição de novas academias no banco de dados do projeto.

!["Print Control New Gym Page"](readme_images/control_page_new-gym.png?raw=true "Print Control New Gym Page")

O app pode ser acessado no [clicando aqui.](https://dancing-biscotti-9f6598.netlify.app/)


# Back End

No Back do projeto temos 2 APIs e cada API utiliza um banco de dados próprio. Os bancos de dados são Sqlite3 e as APIs foram construídas utilizando Expressjs.

## Banco de Dados

O banco possui 4 entidades mas a entidade Subscription não é utilizada e foi mantida apenas como lembrança da primeira versão do banco e para uma possível evolução do sistema. Abaixo está um modelo relacional do banco.

!["Relational Model"](readme_images/relational_model.png?raw=true "Relational Model")

## API de Controle de Academias

Essa é a API consumida pelo app de Controle de Academias e é responsável por pelas operações feitas no APP.

A documentação da API foi feita utilizando o Swagger. Para acessar a documentação da API [clique aqui.](https://olympus-gym-api.herokuapp.com/admin/api-docs/)

Ela foi publicada através do Heroku e a URL base é: https://olympus-gym-api.herokuapp.com/
