---
title: "Podíamos ter enviado esses dados?"
subtitle: "Privacidade, finalidade e acesso."
description: "A diferença entre dado público, dado pessoal e dado sensível — e o hábito de recortar, borrar e minimizar antes de apertar enviar."
lang: pt-BR
ref: data-privacy
order: 5
part: 1
permalink: /ia/dados-e-privacidade/
interactive: "o que borrar na foto + checklist"
piece: "planilha de trabalho com códigos, e uma cópia fictícia para testar"
last_modified: 2026-11-16
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 5

Onze da noite, véspera de reunião com a Iara. Caio mandou no grupo: "resumo pronto, joguei a planilha num assistente gratuito e ele limpou tudo". A planilha: nome, data de nascimento, endereço, telefone da mãe, se a família recebe benefício. Lia leu três vezes. Aqueles dados não eram do Caio, nem dela. Eram de adolescentes, e de famílias que nunca souberam que estavam em uma planilha. De manhã, quem ligou não foi a Iara. Foi Aída, da área de tecnologia da secretaria, querendo saber quem tinha autorizado aquilo. Quem tinha?
</div>

Se o modelo aprende com dados, a pergunta seguinte é óbvia e quase nunca é feita: **dados de quem?** Este capítulo é sobre a fronteira que vale desenhar antes de subir qualquer coisa em qualquer ferramenta.

Não sou da área jurídica. Aqui eu quero ajudar a perceber as perguntas que um projeto precisa levar a quem cuida disso, sem transformar uma regra de bolso em parecer.

## Todo dado merece o mesmo cuidado?

**Informação pública** é o que está disponível abertamente: estatísticas do censo, artigos científicos abertos, documentação de software. Atenção para a armadilha: *estar acessível não significa estar liberado*. Dado público continua sujeito a direito autoral, termos de uso e limites éticos de coleta.

**Dado pessoal** é qualquer informação que identifica ou pode identificar uma pessoa: nome, CPF, telefone, e-mail, endereço, placa do carro, localização.

**Dado pessoal sensível** é a categoria que a [LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm) protege com mais força, porque o vazamento pode gerar discriminação: origem racial ou étnica, convicção religiosa, opinião política, filiação sindical, dados de saúde, vida sexual, dados genéticos e **biométricos**.

| Tipo de dado | Exemplos | O que pode acontecer se for usado sem permissão |
|---|---|---|
| Rosto e biometria | Fotos, digital, íris, voz | Vigilância, rastreamento, falsa identificação, deepfake |
| Saúde | Diagnósticos, exames, receitas | Discriminação em emprego e seguro, exposição |
| Endereço e localização | Rua e número, histórico de GPS | Risco físico, perseguição, assédio |
| Placa de veículo | Imagem de câmera de trânsito | Mapeamento de rotina e deslocamentos |
| Financeiro | Cartão, extrato, score, imposto de renda | Fraude, golpe, crédito predatório |
| Nome, assinatura, documentos | RG, CPF, assinatura | Falsificação, abertura de contas, roubo de identidade |
| Contatos | Telefone, e-mail, IP | Spam, *phishing* direcionado, assédio |

Coletar e usar dados pessoais exige uma base legal aplicável. **Consentimento é uma das possibilidades, sem prioridade automática sobre as outras**, como esclarece a [ANPD](https://www.gov.br/anpd/pt-br/canais_atendimento/cidadao-titular-de-dados/denuncia-peticao-de-titular-referente-lgpd). Há hipóteses como obrigação legal, execução de contrato e políticas públicas, com requisitos próprios; dados sensíveis têm regras específicas. A [lista oficial](https://www.gov.br/anpd/pt-br/acesso-a-informacao/perguntas-frequentes) ajuda a começar a conversa. "A pessoa deixou" não encerra o cuidado com finalidade, necessidade e proteção.

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** na cena abaixo, encontre tudo o que identificaria alguém. Depois pense na planilha da Lia: o que ali é necessário para a tarefa, e o que só está ali porque sempre esteve?
</div>

<div data-widget="privacidade"></div>

## O que acontece com um modelo treinado com dado mal coletado?

Um aplicativo de álbum de fotos usou as imagens de quem o utilizava para treinar reconhecimento facial, sem deixar isso claro. A autoridade de defesa do consumidor do país [fechou um acordo](https://www.ftc.gov/news-events/news/press-releases/2021/01/california-company-settles-ftc-allegations-it-deceived-consumers-about-use-facial-recognition-photo) que obrigou a empresa a apagar não só as fotos coletadas indevidamente, mas também **os modelos e algoritmos treinados com elas**.

Essa segunda parte é a que importa. Dado mal coletado contamina tudo o que foi construído em cima. Não existe "já treinei, agora é tarde".

## O que fazer antes de apertar enviar?

Três gestos reduzem a exposição no dia a dia:

- **Recortar**: enquadre só o que interessa. O fundo da foto costuma ter mais dado pessoal que o assunto principal.
- **Borrar**: rostos, placas, números de casa, documentos. De forma irreversível — tarja semitransparente não conta.
- **Minimizar**: se a tarefa não precisa do campo, o campo não vai. Para pedir ajuda com uma planilha de clientes, troque nomes por "Cliente 1, Cliente 2" e mande cinco linhas, não cinco mil.

Trocar o nome por um código não apaga necessariamente a identidade: a escola, o turno e o relato podem revelar quem é. E o fato de o dado ser "meu" não autoriza qualquer uso se ele também fala de outras pessoas.

Quem constrói pode acrescentar **filtros** antes do modelo, por exemplo para barrar padrões de documentos ou de chaves de acesso. Uma regra em código permite testar e repetir essa verificação. Ela ainda pode deixar passar um formato que ninguém previu; não substitui decidir quais dados deveriam entrar.

<div data-widget="checklist" data-key="privacidade" data-title="Checklist de privacidade" markdown="1">

#### Quando eu crio (coleto dados, treino, monto um agente)

- [ ] A finalidade e a base legal aplicável foram definidas com quem responde pelo tratamento
- [ ] Recortei as imagens para tirar o que não interessa do fundo
- [ ] Borrei de forma irreversível rostos, placas, endereços e documentos
- [ ] Descartei todo campo pessoal que não é essencial para o objetivo
- [ ] Sei onde esses dados ficam guardados e quem tem acesso

#### Quando eu uso (qualquer ferramenta de IA)

- [ ] Li o que a política de privacidade diz sobre uso das minhas conversas
- [ ] Desativei o uso dos meus dados para treino, quando a ferramenta permite
- [ ] Tirei nomes, CPFs, endereços e dados de saúde antes de colar o texto
- [ ] Conferi se esta ferramenta e este uso são permitidos para esses dados
- [ ] Na dúvida, usei um exemplo inventado no lugar do dado real

</div>

<div class="g-box g-mine" markdown="1">
**Como eu faço:** a memória do assistente que eu uso fica desligada. Um dia fiz o teste de perguntar "o que você sabe sobre mim?". É meio assustador. Desliguei. E, para testar uma ideia, dado fictício com o mesmo formato do real resolve quase sempre: custa trinta segundos pedir para a IA gerar.
</div>


<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Em disputa:** quem autorizou cada coluna dessa planilha? Se uma mãe pedisse para ver o que há sobre o filho, alguém conseguiria mostrar — e explicar? O que já saiu tem volta?
- **Caminhos na mesa:**
  - *Aída:* suspender o uso dos dados e apurar o envio. Limita novas exposições, mas interrompe testes com a situação real.
  - *Caio:* seguir só com dado inventado até resolverem. Permite construir, mas não revela todos os problemas dos registros reais.
  - *Lia:* reduzir as colunas e substituir nomes por códigos no ambiente aprovado. Dá continuidade a parte do trabalho, mas exige revisar acessos e não desfaz o envio anterior.
- **O que o time fez, por enquanto:** interrompeu o uso daquele assistente com dados reais e levou o ocorrido a Aída. Para continuar construindo, adotou a cópia fictícia de Caio. A planilha reduzida ficou aguardando revisão; Iara receberia uma demonstração com exemplos inventados.
</div>

<div class="g-box g-key g-concepts" markdown="1">

## O que vale guardar desta volta?

- **Finalidade e base legal:** conseguir acessar um dado não basta para justificar qualquer uso. Consentimento é uma das bases possíveis.
- **Identificação:** retirar o nome pode deixar outras pistas que apontam para a pessoa.
- **Minimização e acesso:** perguntar que dado é necessário e quem precisa vê-lo muda o desenho da solução.

Se você troca nomes por códigos, o que ainda precisa investigar antes de considerar aquele material anônimo?

</div>

<div class="g-project" markdown="1">

## E no seu projeto?

Siga um dado pelo seu projeto: de onde vem, por onde passa, quem consegue vê-lo e onde fica guardado? Experimente a mesma tarefa com um exemplo fictício ou com menos informação. O que deixou de funcionar? Que dado você estava pedindo sem precisar dele para essa entrega?

</div>

<details class="g-aula" markdown="1">
<summary>Para levar para a aula</summary>

#### Atividade (20 min) — caça ao dado

Peça que cada pessoa abra a galeria do celular, escolha uma foto tirada na rua ou no trabalho (sem mostrar a ninguém) e conte quantos dados pessoais **de terceiros** aparecem nela. Compartilhem só os números e os tipos. Depois, a mesma coisa com a última conversa que tiveram com um assistente de IA.

#### Perguntas de discussão

- A foto de perfil de uma rede social é pública. Isso autoriza usar para treinar reconhecimento facial?
- Seu colega colou a planilha de salários da equipe em um chatbot para "formatar mais rápido". O que deu errado, e em que momento?
- Por que a autoridade mandou apagar os modelos, e não só as fotos?

</details>

<div class="g-fontes" markdown="1">

#### Referências

- AGÊNCIA NACIONAL DE PROTEÇÃO DE DADOS. **Denúncia / Petição de Titular referente à LGPD**. Brasília, DF: ANPD, [s. d.]. Disponível em: <https://www.gov.br/anpd/pt-br/canais_atendimento/cidadao-titular-de-dados/denuncia-peticao-de-titular-referente-lgpd>. Acesso em: 15 nov. 2026.
- AGÊNCIA NACIONAL DE PROTEÇÃO DE DADOS. **Perguntas frequentes**. Brasília, DF: ANPD, 2026. Seções 2.5 e 2.6. Disponível em: <https://www.gov.br/anpd/pt-br/acesso-a-informacao/perguntas-frequentes>. Acesso em: 15 nov. 2026.
- BRASIL. **Lei nº 13.709, de 14 de agosto de 2018**. Lei Geral de Proteção de Dados Pessoais (LGPD). Brasília, DF: Presidência da República, 2018. Disponível em: <https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm>. Acesso em: 13 nov. 2026.
- FEDERAL TRADE COMMISSION. **California company settles FTC allegations it deceived consumers about use of facial recognition in photo storage app**. Washington, DC, jan. 2021. Disponível em: <https://www.ftc.gov/news-events/news/press-releases/2021/01/california-company-settles-ftc-allegations-it-deceived-consumers-about-use-facial-recognition-photo>. Acesso em: 13 nov. 2026.
- FEDERAL TRADE COMMISSION. **FTC finalizes settlement with photo app developer related to misuse of facial recognition technology**. Washington, DC, maio 2021. Disponível em: <https://www.ftc.gov/news-events/news/press-releases/2021/05/ftc-finalizes-settlement-photo-app-developer-related-misuse-facial-recognition-technology>. Acesso em: 13 nov. 2026.

*Notas:* O aplicativo citado é o Ever; a autoridade é a Federal Trade Commission, dos Estados Unidos. A ANPD esclarece que consentimento não tem prioridade sobre outras hipóteses legais. A base aplicável depende da finalidade e das condições do tratamento; dados sensíveis têm hipóteses específicas.

</div>
