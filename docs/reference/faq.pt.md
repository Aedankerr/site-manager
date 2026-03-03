# FAQ

## Geral

??? question "Meus dados são armazenados em algum servidor externo?"
    Não. Tudo roda localmente no seu servidor. Os dados do seu CV são armazenados em um arquivo de banco de dados SQLite no diretório `/data`.

??? question "Posso executar o CV Manager sem Docker?"
    Sim. Instale o Node.js 18+, execute `npm install` no diretório do projeto e depois `node src/server.js`. O admin roda na porta 3000 e o site público na porta 3001.

??? question "Múltiplas pessoas podem usar a mesma instância?"
    O CV Manager foi projetado como uma aplicação de usuário único. Cada instância gerencia o CV de uma pessoa. Para múltiplas pessoas, execute containers separados.

## Edição

??? question "Como marco uma posição como 'atual'?"
    Deixe o campo **Data de Término** vazio. Ele será exibido como "Presente" no CV.

??? question "Posso reordenar itens dentro de uma seção?"
    Sim. A maioria dos itens suporta reordenação por arrastar e soltar. A ordem é salva automaticamente.

??? question "Como adiciono marcadores a uma experiência?"
    Edite a experiência e insira os destaques no campo **Destaques** — um marcador por linha.

??? question "Como adiciono um logotipo de empresa?"
    Edite a experiência, role até a seção **Logotipo da Empresa** e clique em **Escolher imagem** para enviar. Você também pode clicar em **Usar existente** para reutilizar um logotipo já enviado. Ative o alternador **"Sincronizar logotipo em todas as experiências da [Empresa]"** para aplicar o mesmo logotipo a todas as experiências naquela empresa.

??? question "Excluí algo acidentalmente. Posso desfazer?"
    Não há recurso de desfazer. Como as edições são salvas automaticamente no conjunto de dados ativo, a alteração é persistida imediatamente. Se você tem uma exportação anterior ou um conjunto de dados salvo separado, pode restaurar a partir dele. É uma boa prática exportar seu CV regularmente como backup.

## Seções Personalizadas

??? question "Quantas seções personalizadas posso criar?"
    Não há limite fixo. Crie quantas precisar.

??? question "Posso alterar o tipo de layout de uma seção personalizada após criá-la?"
    Sim. Edite a seção e selecione um layout diferente. Note que alguns campos podem não ser transferidos entre tipos de layout (ex.: ao mudar de cartões para links sociais).

??? question "Qual a diferença entre os layouts 'Marcadores' e 'Texto Livre'?"
    **Marcadores** renderiza cada linha como um item de lista com marcador e um título de grupo. **Texto Livre** renderiza texto simples com quebras de linha preservadas e sem título — similar à seção Sobre/Bio.

## Impressão e PDF

??? question "Por que meu PDF parece diferente da tela?"
    A saída de impressão usa estilos de impressão dedicados, otimizados para papel. Alguns efeitos visuais (estados de hover, animações, gradientes) são simplificados. Itens ocultos e controles de administração são removidos automaticamente.

??? question "Como encaixo meu CV em menos páginas?"
    Tente ativar **Permitir Divisão de Seções** e **Permitir Divisão de Itens** nas configurações de Impressão e Exportação. Você também pode ocultar itens ou seções menos importantes, ou usar layouts de seção personalizada mais compactos. Também ajuste a escala de impressão pelo diálogo de impressão do navegador (às vezes um pouco escondido).

??? question "Por que alguns itens estão faltando no meu CV impresso?"
    Verifique se esses itens foram marcados como ocultos (ícone de olho). Itens ocultos são excluídos da saída de impressão e da visualização pública.

??? question "Os números de página não estão aparecendo?"
    Certifique-se de que **Números de Página** está ativado em Configurações → Impressão e Exportação. Alguns visualizadores de PDF do navegador podem não exibir números de página gerados por CSS — tente baixar o PDF e abri-lo em um leitor dedicado.

## Linha do Tempo

??? question "A linha do tempo mostra as datas erradas / apenas anos / datas completas?"
    A linha do tempo tem sua própria configuração de data. Vá em **Configurações → Avançado → Linha do Tempo: Apenas Anos** para alternar entre exibição apenas do ano e o formato de data completo.

??? question "Posso adicionar entradas diretamente na linha do tempo?"
    Não. A linha do tempo é gerada automaticamente a partir das suas experiências profissionais. Adicione ou edite experiências e a linha do tempo será atualizada de acordo.

??? question "A bandeira do país não está aparecendo na linha do tempo?"
    Certifique-se de que o campo **Código do País** na experiência está definido com um código ISO de 2 letras válido (ex.: `us`, `gb`, `ch`, `de`, `fr`). As bandeiras são carregadas de um CDN externo.

??? question "O que acontece quando tenho dois empregos ao mesmo tempo?"
    A linha do tempo detecta automaticamente posições sobrepostas e as renderiza como **trilhas paralelas**. O emprego simultâneo aparece em uma linha de ramificação elevada com conectores em curva S mostrando os pontos de separação e junção. Nenhuma configuração é necessária — é baseado inteiramente nas suas datas de início/término. Sobreposições menores que 1 mês são ignoradas (comuns durante transições de emprego).

??? question "Por que a linha do tempo mostra um logotipo em vez do nome da empresa?"
    Se você enviou um logotipo de empresa para essa experiência, a linha do tempo exibe a imagem do logotipo em vez de texto. Se o arquivo do logotipo estiver ausente, ele volta ao nome da empresa. Para remover um logotipo da linha do tempo, edite a experiência e clique em **Remover** na seção Logotipo da Empresa.

## Idioma e Atualizações

??? question "Como altero o idioma do admin?"
    Clique no **ícone de globo** na barra de ferramentas e selecione um idioma na grade suspensa. A alteração é aplicada imediatamente e salva entre sessões.

??? question "Como verifico qual versão estou executando?"
    Abra **Configurações** — o número da versão é exibido no canto inferior esquerdo do modal (ex.: `v1.11.0`).

??? question "Não vejo o banner de atualização mesmo havendo uma nova versão disponível?"
    A verificação de versão é armazenada em cache por 24 horas. Reinicie seu servidor (ou container Docker) para limpar o cache e forçar uma nova verificação. Seu servidor também precisa de acesso à internet para alcançar `raw.githubusercontent.com`.

## Conjuntos de Dados / Múltiplos CVs

??? question "O que é o conjunto de dados 'Padrão'?"
    O conjunto de dados padrão é a versão do seu CV que os visitantes veem na URL raiz (`/`). Na primeira instalação, o CV Manager cria automaticamente um conjunto de dados "Padrão" a partir dos dados do seu CV. Você pode alterar qual conjunto de dados é o padrão a qualquer momento usando o botão de rádio no modal Abrir.

??? question "Minhas edições são salvas automaticamente?"
    Sim. Cada alteração feita no admin (adicionar, editar, excluir, reordenar, alternar visibilidade) é automaticamente salva no conjunto de dados ativo após um curto atraso. O banner mostra "Salvando..." e depois "Salvo" para confirmar.

??? question "O que acontece quando 'Carrego' um conjunto de dados?"
    Carregar um conjunto de dados alterna sua cópia de trabalho para esse conjunto de dados. Suas edições anteriores já foram salvas automaticamente, então nada é perdido.

??? question "Os visitantes podem ver minhas edições em tempo real?"
    Não. O site público serve o conjunto de dados padrão congelado, não suas edições em tempo real. Os visitantes só veem alterações após o salvamento automático gravá-las no conjunto de dados padrão. Se você está editando um conjunto de dados não padrão, os visitantes não verão essas alterações até que você o defina como padrão.

??? question "Os visitantes podem ver meus conjuntos de dados salvos?"
    Apenas se você torná-los públicos. Cada conjunto de dados tem um alternador no modal Abrir. Quando definido como público, essa versão se torna acessível em `/v/slug` no site público (porta 3001). Conjuntos de dados privados só podem ser visualizados pela interface admin.

??? question "Como compartilho uma versão específica do CV com alguém?"
    Abra o modal **Abrir...**, ative o alternador do conjunto de dados para público, depois clique no ícone de cópia ao lado da URL slug. Compartilhe esse link — ele funciona no site público sem expor sua interface admin.

??? question "Posso ter múltiplas versões públicas ao mesmo tempo?"
    Sim. Você pode tornar quantos conjuntos de dados públicos quiser. Cada um recebe sua própria URL (ex.: `/v/cv-tecnico-1`, `/v/cv-marketing-2`). A página principal `/` mostra o conjunto de dados padrão.

??? question "Posso excluir o conjunto de dados padrão?"
    Não. O conjunto de dados atualmente selecionado como padrão (pelo botão de rádio) não pode ser excluído. Defina um conjunto de dados diferente como padrão primeiro e depois exclua o antigo.

??? question "Os mecanismos de busca indexarão minhas URLs versionadas?"
    Por padrão, não — páginas versionadas recebem `noindex, nofollow`. Para permitir a indexação, ative **Indexar URLs Versionadas** em Configurações → Avançado.

## Site Público e SEO

??? question "Como compartilho meu CV?"
    Compartilhe a URL do seu servidor público (porta 3001). Se você configurou um domínio com Cloudflare Tunnel ou um proxy reverso, compartilhe esse domínio. A URL raiz sempre mostra seu conjunto de dados padrão. Você também pode compartilhar versões específicas usando URLs públicas versionadas (veja [Conjuntos de Dados](../guide/datasets.md)).

??? question "Os mecanismos de busca indexarão meu CV?"
    Por padrão, sim — a página pública principal inclui meta tags adequadas, um sitemap e robots.txt. Para impedir a indexação, altere a configuração de **Indexação por Mecanismos de Busca** para "No Index" em Configurações → Avançado. URLs públicas versionadas (`/v/slug`) **não são indexadas** por padrão; ative **Indexar URLs Versionadas** se quiser que sejam rastreadas.

??? question "Posso adicionar Google Analytics ao meu CV?"
    Sim. Cole seu código de rastreamento em **Configurações → Avançado → Código de Rastreamento**. Ele é injetado apenas nas páginas públicas.

## Docker e Infraestrutura

??? question "Minhas alterações não estão aparecendo no site público?"
    O site público serve o **conjunto de dados padrão**, que é atualizado automaticamente quando você edita no admin. Tente um hard refresh (`Ctrl+Shift+R`) no site público. Se estiver executando containers separados, certifique-se de que compartilham o mesmo volume de dados.

??? question "Estou recebendo um erro de 'porta já em uso'?"
    Altere o mapeamento de porta do host na sua configuração Docker. Por exemplo, mapeie para `3010:3000` e `3011:3001`. **Não** altere a variável de ambiente `PUBLIC_PORT` — essa é a porta interna do container.

??? question "Como faço backup dos meus dados?"
    Duas opções: use o botão **Exportar** na barra de ferramentas do admin (exporta JSON), ou faça backup do diretório `data/` que contém o banco de dados SQLite e as imagens enviadas.

??? question "A foto de perfil não está aparecendo?"
    Certifique-se de que a imagem foi enviada pela interface admin. O arquivo é armazenado em `data/uploads/picture.jpeg`. Verifique as permissões do arquivo se estiver executando em Linux.
