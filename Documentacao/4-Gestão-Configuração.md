# Gestão de Configuração

> Nesta parte do documento, você deve apresentar como foi realizada a
> gestão de configuração do projeto. Isto é, como a ferramenta de
> controle de versão foi configurada, bem como a hospedagem da
> plataforma.

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório `upstream`.

O projeto segue a seguinte convenção para o nome de branchs:

- `master`: versão estável já testada do software
- `staging`: versão já testada do software, porém instável
- `release`: versão em testes do software
- `feature`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `bugfix`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma melhorada para uma funcionalidade

Todos os cards seguem um padrão de construção de corpo, que descreva o problema e demande uma solução, de forma que qualquer pessoa que pegar o card o entenda e saiba o que e onde deve fazer.

Este corpo é:

````
COMO
(Quem precisa desta feature)

PRECISO
(O que o individuo necessita)

PARA
(Com quais objetivos o indivíduo precisa disso)

Descrição:
(Detalhes sobre o que precisa ser feito)

Critérios de Aceitação:
(Lista dos requisitos mínimos para a aprovação deste card)
````
No quadro Kanban o processo foi dividido em 6 colunas, estas são:

- Backlog
- Em Andamento
- Pronto para Testar
- Testando
- Pronto para Publicar
- Publicado

Quando no `Backlog`, o card está parado, esperando seus requisitos serem supridos ou alguém ter a disponibilidade de pegá-lo.

Quando `Em Andamento`, significa que alguém está trabalhando naquele card neste momento, a ferramenta do Trello ajuda a identificar quem está trabalhando em quê, para começar uma tarefa, deve ser criada uma branch exclusiva para ela, a qual será mergida na master no final do fluxo.

Quando `Pronto para Testar` significa que o desenvolvedor deixou a tarefa com todos os requisitos mínimos para ser entregue, agora alguém precisa pegar ela para testar (esta é uma coluna de buffer, ou seja, não se pode trabalhar nela).

Quando `Testando` significa que alguém está atuando nesta tarefa, garantindo que não há bugs e que ela supra todos os requisitos mínimos para sua entrega.

Quando `Pronto para publicar` significa que a tarefa está aguardando o desenvolvedor realizar o merge da master na branch dele a fim de solucionar todos os conflitos e igualá-la com a branch master, quanto a alterações que podem ter sido feitas por outras tarefas.

Quando `Publicado` significa que a tarefa passou por todas as outras etapas com sucesso e finalmente foi incluida na branch master.

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)

## Hospedagem

> Explique como a hospedagem e o lançamento da plataforma foi feita.
>
> **Links Úteis**:
>
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o
>   HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)