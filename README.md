
# Prova Seleção SME ( Fullstack Developer)

A prova possui um teste prático para medir o conhecimento do candidato no desenvolvimento Front End utilizando React e Redux e outras cinco questões contemplando a parte de Lógica, SQL e Java (Spring). 

**Crie seu projeto com seu nome (ex: willeybraz-sme-challenge) como público no Github e envie o link para o e-mail willeybraz@gmail.com.  No assunto coloque < seunome > - Prova FullStack**

**Qualquer dúvida sobre o teste também poderá entrar em contato através desse e-mail willeybraz@gmail.com. .  No assunto coloque < seunome > - Dúvida Prova FullStack.**

Boa Sorte!!!

#### 01 Questão 
Todos os amigos presentes numa festa tomam refrigerante ou cerveja. Treze amigos tomam refrigerante, dez tomam cerveja e 5 tomam refrigerante e cerveja. Quantos amigos estão presentes na festa?

Resposta: __________________

#### 02 Questão 

Dos oito algarismos do número do telefone de Lorenna, Sarah se lembra apenas dos quatro primeiros na ordem correta, mas apesar de se lembrar dos quatro últimos algarismos e saber que nenhum deles se repete, esqueceu-se da ordem destes. Qual é o maior número de tentativas que Sarah pode fazer até conseguir acertar o número do telefone de Lorenna?

Resposta: __________________

#### 03 Questão  
##### (Você pode resolver as questões em pseudocódigo ou na linguagem de sua preferência, indicando esta linguagem.)
Um palavra é dita palíndroma se ela é simétrica, isto é, se a escrevermos de trás para frente, o resultado é o mesmo. Por exemplo, “ARARA” é palíndroma, mas “ARAR” não é. Escreva um pequeno programa, que determina se uma palavra é palíndroma.

#### 04 Questão 
![](http://educacao.fortaleza.ce.gov.br/images/modelagem.png)<br />
Considerando o diagrama entidade relacionamento acima, construa a instrução SQL que:

a) Retorne a(s) matrícula(s) do(s) funcionário(s) mais velho(s);<br />
b) Retorne o(s) CPF's e nome(s) do(s) funcionário(s) com mais de 3 matrículas;<br />
c) Retorne os funcionários que não possuem vínculos;<br />
d) Retorne os funcionários que estão lotados como professores no ano letivo de 2021;<br />
e) Retorne o tipo da lotação (Professor ou Técnico) e as datas de início e fim de cada lotação da matricula 91471 no ano letivo 2021;<br />
#### 05 Questão 
Utilizando a imagem acima, crie uma classe *FuncionarioController* e faça as devidas anotações para transformá-la em um controller do Spring e em seguida crie os seguintes métodos:

- save:  deverá receber um objeto Funcionario do frontend
- find: deverá receber o id do Funcionario e retornar o respectivo Funcionario.

## Teste prático

Este é um desafio para testar seus conhecimentos em **JavaScript, React e Redux**;

#### Obrigatoriedade(s)
- O projeto deverá ser criado utilizando o create-react-app (CRA) e utilizar Redux para o carrinho de compras.
- O Front-End deve utilizar Ant design:  [https://ant.design/](https://ant.design/)
- Não é necessária uma API para a listagem dos produtos. Você poderá usar o Redux para isso.
<hr />

### O Projeto
Seu objetivo é montar um carrinho de compras simples, conforme o prototipo a seguir:

O layout deve ser como de um site de vendas convencional, com uma listagem de produtos, e um ícone de carrinho de compras no topo do site. **( O layout pode ser o mais simples possível )**

O ícone do carrinho de compras deve exibir uma badge com a quantidade de itens presente no carrinho.

A tela de listagem de produtos deve:

-   Listar produtos
    -   Ao entrar no projeto, deve exibir os produtos na listagem com foto, titulo e preço formatado em reais;
    -   Ao clicar no produto da lista, deve exibir os detalhes de um produto individual;
-   Permitir comprar
    -   Ao clicar em comprar, e o produto não estiver no carrinho, deve ser adicionado;
    -   Ao clicar em comprar, e o produto ja existir no carrinho, deve ser incrementado em 1;
-   Exibir resumo do carrinho
    -   Exibir no ícone do carrinho uma badge com quantidade de itens;
    -   Exibir ao lado do ícone, o valor total da compra;

O carrinho deve:

-   Permitir remover itens;
    -   Ao remover, liberar o estoque do produto;
-   Permitir alterar a quantidade de um item;
    -   Ao clicar em aumentar, deve incrementar em 1;
    -   Ao clicar em diminuir, deve decrementar em 1;
    -   Ao incrementar, deve validar se o produto ainda possui estoque;
    -   Ao decrementar, deve liberar o estoque do produto;
    -   Não deve permitir o usuário informar quantidade zero;
-   Exibir o somatório total dos itens incluidos;
<hr/>
