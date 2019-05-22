# Padronização Front-End  - Fagron Tech

# JS

## Organização do Projeto

Visando melhorar a organização Front-End dos projetos, foi necessário escolher um padrão de organização de código. A estrutura escolhida foi o **Domain Style** e a mesma consiste em organizar o projeto por cada área especifica da aplicação, segue abaixo um exemplo de como as pastas devem ser estruturadas.

**EX**: <br />
**FormulaCerta**/ <br />
----├── **app**/ <br />
--------├── **login**/ <br />
------------├── **controllers**/ <br />
----------------├── Login.controller.js <br />
------------├── **services**/ <br />
----------------├── **Factories**/ <br />
--------------------├── Login.factory.js <br />
----------------├── **Services**/ <br />
--------------------├── Login.service.js <br />
------------├── **configs**/ <br />
----------------├── Login.config.js <br />

## Padrões de escrita JS
Atualmente temos vários padrões de escrita utilizados pela comunidade JS. Entre eles estão [**Standard JS**](https://standardjs.com), [**Idiomatic JS**](https://github.com/rwaldron/idiomatic.js/) e o utilizado no [**AirBnb**](https://github.com/airbnb/javascript). <br />
Visando melhorar a escrita de código e o padrão utilizado na empresa, escolhi o padrão utilizado no AirBnb para utilizarmos nos desenvolvimentos de nossas aplicações. 

### Por que AirBnb?
Além de ser um padrão completo e robusto, o AirBnb é bem claro e detalhado em suas documentações, facilitando assim a evangelização do mesmo na empresa, ponto em que o **Idiomatic** fica devendo a quem utiliza-o. Conforme citado anteriormente, o **AirBnb** se destaca por ser completo e robusto, ao contrário do **Standard** onde são definidas regras bem genéricas, destinando o mesmo para projetos menores.

### Convenções de nomenclatura
Como sabemos, muitas vezes a nomenclatura de classes, funções, variáveis, entre outros, fica a critério do desenvolvedor. Isso pode resultar em uma desorganização do código, dificultando assim a manutenção e interpretação do código por outro desenvolvedor. 
Utilizando o padrão do [**AirBnb**](https://github.com/airbnb/javascript#naming-conventions) temos as recomendações de como devemos declarar nossas coleções e como poderiamos melhorar a escrita das mesmas.

[**Veja aqui o padrão para nomenclatura de coleções**](https://github.com/airbnb/javascript#naming-conventions) <br />

**Dicas para nomenclatura de coleções:**
Devemos utilizar nomes sugestivos para nomear nossas coleções, o cenário ideal seria nomearmos as coleções sempre no verbo infinitvo, atribuindo assim a principal responsabilidade para o nome da mesma. <br />

Veja o exemplo abaixo: <br />
```
    //Get User Logged Method
        
    // bad
    const userLogged = id => {
        // ...
    }
        
    // good
    const getUserLogged = id => {
        // ...
    }
```
  
## Angular JS to Angular, React or Vue
Sabemos que o Angular JS entrou em modo LTS(Long Term Support) e já não é a melhor alternativa para seguirmos no momento, porém, a mudança do mesmo para outro framework é um tanto longa. 

### Angular JS - Components
Visando a migração, a componentização do código é um dos processos iniciais para que possamos torna-la realidade. Usando a mesma podemos transformar boa parte da utilização de **Two way data binding** para **One way data binding**.

[**Veja aqui um artigo sobre components no Angular JS**](https://medium.com/the-startup-lab-blog/creating-highly-reusable-angularjs-components-9249f21c1938) <br />
[**Leia a documentação - Angular JS Components**](https://docs.angularjs.org/guide/component)


## Angular JS - TDD
Para garantir a qualidade de código, é necessário realizar testes unitários em cada feature desenvolvida. Visando isso, é de extrema importância utilizarmos uma framework para realizarmos os testes.
Hoje existem diversas frameworks para testarmos nosso JS, entre elas estão **Karma**, **Mocha**, **Jest**, **Jasmine**, entre outros. No cenário **Angular JS**, temos duas principais frameworks: [**Jasmine**](https://jasmine.github.io/2.1/introduction) e o [**Karma**](https://karma-runner.github.io/latest/index.html). Ambas trabalham em conjunto, e dividem responsabilidades entre elas.

### Jasmine
O Jasmine é um framework para escrever testes para código JavaScript. Ele é independente de navegador web e não precisa de outras bibliotecas para funcionar. Com o Jasmine, vamos escrever nossos testes unitários. <br />
[**Leia mais sobre o Jasmine**](https://jasmine.github.io/2.1/introduction)

### Karma
Karma é um test runner feito para o AngularJs. O principal objetivo do Karma é automatizar os testes em diversos navegadores web com um único comando. Mesmo ele tendo sido criado para o AngularJs, atualmente ele é usado em outros frameworks JavaScript. <br />

O Karma suporta diversos tipos de testes, como: unitários, integração, E2E.

[**Leia mais sobre o Karma**](https://karma-runner.github.io/latest/index.html)

## Evangelização de política de **Testes** e **Padronização** com **Git Hooks**
Sabemos que quando criados os padrões e estipulada a política de testes, temos que evangelizar e agregar as regras na equipe de desenvolvimento. Para garantirmos que nossos códigos estejam passando nos testes e desenvolvido no padrão, temos o recurso utilizarmos Git Hooks.

### Husky
O Husky é um pacote do NPM onde podemos utilizar os Hooks do Git para verificarmos uma rotina utilizando NPM SCRIPTS.

### Como Funciona
Podemos utilizar um comando Git como base para configurar nosso Husky Scripts.

**Veja o exemplo abaixo:**

```
    // package.json
    {
        "husky": {
            "hooks": {
            "pre-commit": "npm test && npm lint",
            "pre-push": "npm test && npm lint",
            }
        }
    }
```

No exemplo acima temos um trecho de código de como podemos utilizar o Husky. Vemos que ao executar um **commit** ou um **push**, os Hooks irão executar o script de testes e lint, e caso algum teste não passe ou alguma parte do código não esteja conforme a padrão, o commit não será realizado até que erro seja corrigido.

[**Leia mais sobre o Husky**](https://github.com/typicode/husky)