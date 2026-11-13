---
title: "Dados e privacidade: público não é liberado"
description: "A diferença entre dado público, dado pessoal e dado sensível — e o hábito de recortar, borrar e minimizar antes de apertar enviar."
lang: pt-BR
ref: data-privacy
order: 5
part: 1
permalink: /ia/dados-e-privacidade/
interactive: "o que borrar na foto + checklist"
piece: "planilha de teste com dados fictícios"
last_modified: 2026-11-13
---

<div class="g-lia" markdown="1">
**A jornada da Lia** · cena 5

Onze da noite, véspera de reunião. Lia tinha a planilha aberta: nome, data de nascimento, endereço, telefone da mãe, se a família recebe benefício. Faltava só "pedir para a IA resumir". O cursor já estava na caixa do chat quando ela parou. Aqueles dados não eram dela. Eram de adolescentes, e de famílias que nunca souberam que estavam em uma planilha. Quem tinha autorizado aquilo?
</div>

Se o modelo aprende com dados, a pergunta seguinte é óbvia e quase nunca é feita: **dados de quem?** Este capítulo é sobre a fronteira que eu peço para cada estudante desenhar antes de subir qualquer coisa em qualquer ferramenta.

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

A regra de ouro vale para todas as linhas: **coletar e usar dado pessoal exige base legal — na prática, quase sempre consentimento informado, específico e revogável.**

<div class="g-lia g-lia-missao" markdown="1">
**Provocação:** na cena abaixo, encontre tudo o que identificaria alguém. Depois pense na planilha da Lia: o que ali é necessário para a tarefa, e o que só está ali porque sempre esteve?
</div>

<div data-widget="privacidade"></div>

## O que acontece com um modelo treinado com dado mal coletado?

Um aplicativo de álbum de fotos usou as imagens de quem o utilizava para treinar reconhecimento facial, sem deixar isso claro. A autoridade de defesa do consumidor do país [fechou um acordo](https://www.ftc.gov/news-events/news/press-releases/2021/01/california-company-settles-ftc-allegations-it-deceived-consumers-about-use-facial-recognition-photo) que obrigou a empresa a apagar não só as fotos coletadas indevidamente, mas também **os modelos e algoritmos treinados com elas**.

Essa segunda parte é a que importa. Dado mal coletado contamina tudo o que foi construído em cima. Não existe "já treinei, agora é tarde".

## O que fazer antes de apertar enviar?

Três gestos resolvem a maior parte dos problemas do dia a dia:

- **Recortar**: enquadre só o que interessa. O fundo da foto costuma ter mais dado pessoal que o assunto principal.
- **Borrar**: rostos, placas, números de casa, documentos. De forma irreversível — tarja semitransparente não conta.
- **Minimizar**: se a tarefa não precisa do campo, o campo não vai. Para pedir ajuda com uma planilha de clientes, troque nomes por "Cliente 1, Cliente 2" e mande cinco linhas, não cinco mil.

<div data-widget="checklist" data-key="privacidade" data-title="Checklist de privacidade" markdown="1">

#### Quando eu crio (coleto dados, treino, monto um agente)

- [ ] Tenho consentimento documentado de quem aparece nos dados
- [ ] Recortei as imagens para tirar o que não interessa do fundo
- [ ] Borrei de forma irreversível rostos, placas, endereços e documentos
- [ ] Descartei todo campo pessoal que não é essencial para o objetivo
- [ ] Sei onde esses dados ficam guardados e quem tem acesso

#### Quando eu uso (qualquer ferramenta de IA)

- [ ] Li o que a política de privacidade diz sobre uso das minhas conversas
- [ ] Desativei o uso dos meus dados para treino, quando a ferramenta permite
- [ ] Tirei nomes, CPFs, endereços e dados de saúde antes de colar o texto
- [ ] O dado que estou colando é meu — ou tenho autorização de quem o dado é
- [ ] Na dúvida, usei um exemplo inventado no lugar do dado real

</div>

<div class="g-box g-mine" markdown="1">
**Como eu faço:** quando mostro um projeto em aula, uso o repositório de demonstração, não o de produção. E para testar uma ideia, dado fictício com o mesmo formato do real resolve quase sempre: custa trinta segundos pedir para a IA gerar.
</div>

<div class="g-box g-key" markdown="1">
**Para guardar**

- Disponível publicamente não é o mesmo que consentido.
- Dado coletado errado pode derrubar o modelo inteiro — já aconteceu.
- Privacidade se protege antes do upload: recortar, borrar, minimizar.
</div>

<div class="g-lia g-lia-diario" markdown="1">
**Diário de bordo da Lia**

- **Perguntas que ela levou:** quem autorizou cada coluna dessa planilha? Se uma mãe pedisse para ver o que há sobre o filho, eu conseguiria mostrar — e explicar?
- **Um caminho para responder:** passar o checklist do capítulo coluna por coluna; trocar nomes por códigos; testar ideias só com dados inventados; procurar, na rede, quem responde pela proteção de dados.
- **Peça nova no projeto:** uma planilha de teste com o mesmo formato da real e nenhum dado verdadeiro.
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

- BRASIL. **Lei nº 13.709, de 14 de agosto de 2018**. Lei Geral de Proteção de Dados Pessoais (LGPD). Brasília, DF: Presidência da República, 2018. Disponível em: <https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm>. Acesso em: 13 nov. 2026.
- FEDERAL TRADE COMMISSION. **California company settles FTC allegations it deceived consumers about use of facial recognition in photo storage app**. Washington, DC, jan. 2021. Disponível em: <https://www.ftc.gov/news-events/news/press-releases/2021/01/california-company-settles-ftc-allegations-it-deceived-consumers-about-use-facial-recognition-photo>. Acesso em: 13 nov. 2026.
- FEDERAL TRADE COMMISSION. **FTC finalizes settlement with photo app developer related to misuse of facial recognition technology**. Washington, DC, maio 2021. Disponível em: <https://www.ftc.gov/news-events/news/press-releases/2021/05/ftc-finalizes-settlement-photo-app-developer-related-misuse-facial-recognition-technology>. Acesso em: 13 nov. 2026.

*Notas:* O aplicativo citado é o Ever; a autoridade é a Federal Trade Commission, dos Estados Unidos.

</div>
