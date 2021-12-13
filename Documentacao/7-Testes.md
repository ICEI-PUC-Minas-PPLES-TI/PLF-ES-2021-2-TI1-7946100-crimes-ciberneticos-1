# Avaliação da Aplicação

<span style="color:red">Pré-requisitos: <a href="6-Implementação.md"> Projeto da Solução</a></span>


> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
>
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

> Comente sobre as ferramentas de testes utilizadas.
>
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Avaliação

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Plano de Testes: Login

### Caso de Teste: Alteração de Acesso para Cadastro

GIVEN estar na página de login

WHEN clico no botão "Cadastrar-se"

THEN os inputs se alteram para o cadastro de um novo usuário.


> Funciona Corretamente

### Caso de Teste: Alteração de Cadastro para Acesso

GIVEN estar na página de login

AND clico no botão "Cadastrar-se"

AND os inputs se alteram para o cadastro de um novo usuário.

WHEN clico no botão "Acesse sua conta"

THEN os inputs retornam para a forma de acessar a plataforma


> Funciona Corretamente

### Caso de Teste: Validação dos campos de cadastro (negativo)

GIVEN estar na página de login

AND clicar no botão "Cadastrar-se"

WHEN não preencho corretamente todos os campos corretamente

THEN os campos incorretos ficam com bordas vermelhas

AND aparece um alerta falando quais campos estão incorretos


> Funciona Corretamente

### Caso de Teste: Validação dos campos de cadastro (positivo)

GIVEN estar na página de login

AND clicar no botão "Cadastrar-se"

WHEN preencho corretamente todos os campos corretamente

THEN os campos corretos ficam com bordas verdes


> Funciona Corretamente

### Caso de Teste: Cadastro de usuário

GIVEN estar na página de login

AND clicar no botão "Cadastrar-se"

AND preencho corretamente todos os campos corretamente

AND os campos corretos ficam com bordas verdes

WHEN clico no botão "Cadastrar"

THEN é realizado o cadastro de um novo usuário

AND é realizado o login do usuário automaticamente


> Funciona Corretamente

### Caso de Teste: Acesso do usuário (negativo)

GIVEN estar na página de login

WHEN preencho as informações de login de forma incorreta

AND clico em "Entrar"

THEN um alerta aparece com a mensagem: "Credenciais incorretas"


> Funciona Corretamente

### Caso de Teste: Acesso do usuário

GIVEN estar na página de login

WHEN preencho as informações de login de forma correta

AND correspondente à um usuário existente

AND clico em "Entrar"

THEN o `id` do usuário fica salvo no `local storage` com a chave: `loggedUser`

AND o usuário é redirecionado à página principal da aplicação


> Funciona Corretamente

# Plano de Testes: Página principal

### Caso de Teste: Permissão de Acesso (usuário comum)

GIVEN estar logado como um usuário comum

WHEN é carregada a página principal

THEN são listadas somente opções de uso da aplicação

AND não são listadas opções de gerenciamento


> Funciona Corretamente

### Caso de Teste: Permissão de Acesso (usuário administrador)

GIVEN estar logado como um usuário administrador

WHEN é carregada a página principal

THEN são listadas opções de uso da aplicação

AND são listadas opções de gerenciamento


> Funciona Corretamente

### Caso de Teste: Logout

GIVEN estar logado no sistema

WHEN clica no botão vermelho no canto superior direito

THEN a entrada `loggedUser` é deletada do `localstorage`

AND é redirecionado para a tela de login


> Funciona Corretamente

### Caso de Teste: Acessar 'Fazer Quizz'

GIVEN estar logado no sistema

WHEN clica na opção `Fazer Quizz`

THEN é redirecionado para a tela de execução do quizz


> Funciona Corretamente

### Caso de Teste: Acessar 'Aprender'

GIVEN estar logado no sistema

WHEN clica na opção `Aprender`

THEN é redirecionado para a tela de estudos


> Funciona Corretamente

### Caso de Teste: Acessar 'Seu Perfil'

GIVEN estar logado no sistema

WHEN clica na opção `Seu Perfil`

THEN é redirecionado para o perfil do usuário logado


> Funciona Corretamente

### Caso de Teste: Acessar 'Gerenciar'

GIVEN estar logado no sistema com um usuário administrador

WHEN clica na opção `Gerenciar`

THEN é redirecionado para a página de gerenciamento de perguntas


> Funciona Corretamente

# Plano de Testes: Página de Quizz

### Caso de Teste: Voltar

GIVEN estar na tela de Quizz

WHEN clico no botão branco no canto superior esquerdo

THEN sou redirecionado à página principal


> Funciona Corretamente

### Caso de teste: Responder Pergunta (positivo)

GIVEN estar na tela de Quizz

WHEN seleciono a resposta correta

THEN um alerta aparece com uma mensagem de sucesso

AND é renderizada a próxima pergunta


> Funciona Corretamente

### Caso de teste: Responder Pergunta (negativo)

GIVEN estar na tela de Quizz

WHEN seleciono uma resposta incorreta

THEN um alerta aparece com uma mensagem de falha

AND é renderizada a próxima pergunta

AND a pergunta é reinserida no final do questionário


> Funciona Corretamente

### Caso de teste: Reprise de perguntas respondidas incorretamente

GIVEN estar na tela de Quizz

AND seleciono uma resposta incorreta

AND um alerta aparece com uma mensagem de falha

AND é renderizada a próxima pergunta

WHEN alcanço a sexta pergunta

AND passo por ela

THEN começam a repetir as perguntas que eu errei anteriormente


> Funciona Corretamente

### Caso de teste: Encerrar o Questionário

GIVEN estar na tela de Quizz

AND responder todas as perguntas corretamente

WHEN respondo a última pergunta corretamente

THEN um alerta aparece informando que encerrei o questionário

AND é renderizada uma tela de encerramento


> Funciona Corretamente

### Caso de teste: Tela de encerramento (informações)

GIVEN ter encerrado o questionário

WHEN a tela de encerramento é renderizada

THEN deve ser mostrada a experiência conquistada

AND deve ser mostrada a taxa de acerto do usuário naquele questionário


> Funciona Corretamente

### Caso de teste: Tela de encerramento (terminar questionário)

GIVEN ter encerrado o questionário

AND a tela de encerramento é renderizada

WHEN clico em "Continuar"

THEN sou redirecionado a página principal


> Funciona Corretamente

# Plano de Teste: Perfil

### Caso de Teste: Voltar

GIVEN estar na tela do Perfil

WHEN clico no botão branco no canto superior esquerdo

THEN sou redirecionado à página principal


> Funciona Corretamente

### Caso de teste: Nome

GIVEN estar na tela de perfil do usuário

WHEN a tela é renderizada

THEN o nome do usuário aparece corretamente no centro da tela


> Funciona Corretamente

### Caso de teste: Foto do usuário

GIVEN estar na tela de perfil do usuário

WHEN a tela é renderizada

THEN a imagem do usuário deve conter um placeholder ou a imagem escolhida pelo usuário


> Ainda não foi implementado o upload de imagens

### Caso de teste: Progressão

GIVEN estar na tela de perfil do usuário

WHEN a tela é renderizada

THEN deve ser mostrado, com dados corretos, a progressão do nível do usuário

AND a quantidade de perguntas respondidas pelo usuário

AND a taxa de acerto do usuário


> Funciona Corretamente

### Caso de teste: Progressão

GIVEN estar na tela de perfil do usuário

WHEN clico para expandir uma das medidas de progressão

THEN deve ser mostrado, com dados corretos, a progressão do nível do usuário para cada assunto

AND a quantidade de perguntas respondidas pelo usuário para cada assunto

AND a taxa de acerto do usuário em cada assunto


> Funciona Corretamente

# Plano de Teste: Gerenciar

### Caso de Teste: Voltar

GIVEN estar na tela de Gerenciar Perguntas

WHEN clico no botão branco no canto superior esquerdo

THEN sou redirecionado à página principal


> Funciona Corretamente

### Caso de teste: Validação dos campos (negativo)

GIVEN estar na tela de Gerenciar Perguntas

WHEN preencho um campo de forma incorreta

THEN a borda do campo fica vermelha


> Funciona Corretamente

### Caso de teste: Validação dos campos (positivo)

GIVEN estar na tela de Gerenciar Perguntas

WHEN preencho todos os campos de forma correta

THEN a borda dos campos ficam verdes


> Funciona Corretamente

### Caso de teste: Adição de pergunta

GIVEN estar na tela de Gerenciar Perguntas

AND preencho todos os campos de forma correta

AND a borda dos campos ficam verdes

WHEN clico em "Adicionar"

THEN a pergunta é adicionada no banco de dados

AND a pergunta é listada junto às outras abaixo

AND os campos ficam vazios


> Funciona Corretamente

### Caso de teste: Edição de pergunta

GIVEN estar na tela de Gerenciar Perguntas

AND clico no botão de editar de qualquer das perguntas listadas

AND os campos se preenchem automaticamente com as informações das perguntas

WHEN altero um ou mais campos

AND clico em "Salvar"

THEN a pergunta é salva no banco de dados

AND a pergunta é atualizada na lista abaixo

AND os campos ficam vazios


> Funciona Corretamente

### Caso de teste: Deleção de pergunta

GIVEN estar na tela de Gerenciar Perguntas

WHEN clico no botão de apagar de qualquer das perguntas listadas

THEN a pergunta é apagada do banco de dados

AND removida da listagem abaixo


> Funciona Corretamente

# Plano de Testes: Estudos

### Caso de Teste: Voltar

GIVEN estar na tela de Aprender

WHEN clico no botão branco no canto superior esquerdo

THEN sou redirecionado à página principal


> Funciona Corretamente

### Caso de Teste: Renderização da Tela

GIVEN estar na tela de Aprender

WHEN a tela é carregada

THEN uma lista com nomes de assuntos são listados


> Funciona Corretamente

### Caso de Teste: Abrir assunto listado

GIVEN estar na tela de Aprender

WHEN clico em um dos assuntos listados abaixo

THEN é renderizado todos os capítulos inseridos sobre o assunto até o momento

AND aparece no canto superior direito um botão escrito "Fazer Quizz"


> Funciona Corretamente

### Caso de Teste: Voltar após abrir um assunto

GIVEN estar na tela de Aprender

AND ter clicado em um assunto

WHEN clico no botão de voltar

THEN volta pra tela anterior mostrando a listagem de assuntos a serem aprendidos


> Funciona Corretamente

### Caso de Teste: Clicar em "Fazer Quizz"

GIVEN estar na tela de Aprender

AND ter clicado em um assunto

WHEN clico no botão "Fazer Quizz"

THEN é renderizado a página de Quizz

AND todas as perguntas do questionário são sobre o assunto que estava aberto na página de Aprender


> Funciona Corretamente
