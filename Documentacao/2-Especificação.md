
# Especificações Do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Contexto.md"> Documentação de Contexto</a></span>

Nesta etapa, iremos focar sobre as personas, histórias dos usuários, requisitos, requisitos não funcionais, niveis de prioridade e restrições.

> Apresente uma visão geral do que será abordado nesta parte do
> documento, enumerando as técnicas e/ou ferramentas utilizadas para
> realizar a especificações do projeto

## Personas

- Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em
 se desenvolver profissionalmente através de um mestrado fora do país,
 pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está
 buscando uma agência que o ajude a encontrar universidades na Europa
 que aceitem alunos estrangeiros.

- Josesclildo tem 40 anos, é pedreiro e trabalha no ramo da engenharia civil.
 Ele é pai solteiro e tem 5 filhos e seu sonho é prover um ensino de qualidade
 a seus filhos, algo que ele não teve. Busca o enriquecimento para ter uma 
 aposentadoria tranquila e reformar sua casa, e nas horas livres gosta de pesquisar
 notícias sobre seu time e comprar alguns produtos pela internet. Mas adquiriu um receio 
 em comprar por já ter sofrido golpes pela internet.

- Jeruza tem 75 anos, é e uma professora univesitária aposentada. Ela leva
uma vida bastante tranquila com seu marido e ama passar mais tempo com seus netos.
O objetivo de Jeruza é dar suporte para sua família tanto emocionalmente,
quanto financeiramente. É uma pessoa muito honesta e caridosa, além de se importar
muito com os animais. Jeruza tem muita vontade em aprender a navegar pela
internet sem ajuda de terceiros, mas teme não ser possível por conta da dificuldade
e dos riscos que existem na internet. 

> Enumere e detalhe as personas da sua solução. Para
> tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
> Lembre-se que você deve ser enumerar e descrever precisamente e
> personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Podemos observar que a falta de conhecimento básico sobre crimes cibernéticos apresentado pelas personas intensifica o aumento de crimes cibernéticos.

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

EU, COMO USUÁRIO, QUERO APRENDER MAIS SOBRE CRIMES CIBERNÉTICOS PARA NÃO SOFRER NENHUM TIPO DE GOLPE ENQUANTO ACESSO A INTERNET. ASSIM, ME SENTIREI SEGURO SEMPRE QUE NAVEGAR PELA INTERNET.

|Usuário do sistema  | Registrar minhas tarefas           | Lembrete para não esquecer de fazê-las  |
|Usuário do sitema   | Registrar minhas informações       | Poder alterar livrementes as informações|
|Usuário do sistema  | Acesso às perguntas por tópicos    | Responder no seu próprio tempo          |

|Administrador       | Alterar permissões                 | Permitir que possam administrar contas       |
|Administrador       | Suporte                            | Auxiliar os usuários                         |
|Administrador       | Cadastramento                      | Mensagem de boas vindas após o cadastramento |

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição dos Requisitos Funcionais  | Prioridade |
|------|-------------------------------------------|-------|
|RF-001| Permitir que o usuário cadastre tarefas   | ALTA  | 
|RF-002| Emitir um relatório de tarefas no mês     | MÉDIA |
|RF-003| Incluir/alterar/excluir informações       | MÉDIA |
|RF-004| Criação de um fórum para os usuários      | ALTA  |
|RF-005| Permitir o gerenciamento de tarefas       | ALTA  |
|RF-006| Cadastramento de novos usuários           | ALTA  |
|RF-007| Tela de busca                             | BAIXA | 
|RF-008| Suporte                                   | MÉDIA |
|RF-009| Didática de fácil compreensão             | ALTA  |
|RF-010| Plataforma Intuitiva                      | Alta  |
|RF-011| Denúncias                                 | ALTA  |

### Requisitos não Funcionais

|ID     | Descrição do Requisitos Não Funcionais  |Prioridade |
|-------|-------------------------|-------------------------------------------------------|-------|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel               | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s                           | BAIXA | 
|RNF-003| Deverá ser implementada frases motivacionais logo após a resolução das questões | MÉDIA |
|RNF-004| A plataforma deverá ser intuitiva e de fácil navegação sem termos técnicos      | ALTA  |
|RNF-005| Permitir o compartilhamento dos resultados                                      | BAIXA |
|RNF-006| As questões devem ser objetivas e que utilizem exemplos do cotidiano            | MÉDIA |
|RNF-007| Somente os usuários cadastrador e ativos poderão participar do fórum            | BAIXA | 
|RNF-008| As tarefas cadastradas ficarão salvas aguardando resolução                      | BAIXA |
|RNF-009| O suporte será destinado a algum relato de mal funcionamento da plataforma      | MÉDIA |
|RNF-010| A opção de denúncia será encaminhada para algum órgão superior competente       | ALTA  |

> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
> - [Requisitos Funcionais
>   (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na
>   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais
>   (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
