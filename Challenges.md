# Estava com problemas para atualizar a lista reativamente ao ser adicionado um item novo. Havia tentado sempre que um item novo for adicionado, fazer um fetch novo para recuperar todas as informações do arquivo 'db.json'. Mas, isso estava resultando num loop, então, eu criei um State para armazenar os itens da lista, e, quando um item novo for adicionado ele irá ser adicionado a esse state, fazendo com que a lista se atualize reativamente.

## Criação do estado reativo no arquivo App.js (refatorar)
<img src='./screenshots/app-state.png'>

## Atualizando o estado anterior no arquivo Input.js
<img src='./screenshots/input-att-state.png'>