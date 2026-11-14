# GSA Sports (GSA Assessoria Esportiva)

## Cliente
GSA Sports, empresa de agenciamento, intermediação e representação de atletas de futebol, da base ao profissional. O Brotherson é um dos 5 sócios. O site deixa de ser projeto de portfólio e passa a ser o site oficial da empresa.

## Papel do site
- O canal principal da GSA é o Instagram. O site existe para passar credibilidade e cara profissional
- Os atletas atuais são das categorias de base
- Decisão de 14/11/2026: sem seção de sócios nem vitrine individual de atletas. Partir do conteúdo que o site já tem (fotos dos sócios em clubes e fotos com atletas)

## Stack e deploy
- HTML, CSS e JS puros (`index.html`, `styles.css`, `scripts.js`), sem framework
- Fonte: Inter (Google Fonts)
- Deploy: Netlify, https://gsa-sports.netlify.app/
- Repositório: https://github.com/brotherson10/gsa-sports-landpg

## Identidade
- Logo: "GSA Assessoria Esportiva", branco com amarelo ouro (`assets/img/logo-branca-GSA-sem-fundo.png`, ícone em `assets/img/icone-branca-GSA-sem-fundo.png`)
- Cores: amarelo ouro `#FDB913`, fundo `#0A0A0B`, texto `#F5F5F4`. Sem vermelho nem azul
- Fontes: Barlow Condensed (títulos, caixa alta) e Inter (texto)
- Fotos com cantos retos e legenda em pílula escura com filete dourado; cards com raio de 12px
- Idioma: pt-BR

## Conteúdo real disponível
- Fotos em `assets/img/` (WebP): sócios em visita a clubes (Cruzeiro, Atlético-MG, América-MG, Sport, Inter SG), atletas em campo (Sport, Inter SG, América-MG, CRB) e assinatura de contrato no Cuiabá
- `victor-hulk*.webp` é um atleta do Inter SG, não o jogador Hulk
- Fotos ainda não usadas no site: b-a-r, braw-sg, caio-sport3 (só no bloco do Instagram), le-isg, mamede-gsa, parceria-gomes-velop4, rauan-isg, silmar-isg
- Contato: só o Instagram @gsasportss. É decisão dos sócios: muitos atletas entravam em contato direto pedindo avaliação, e isso atrapalhava. Não colocar WhatsApp nem email em destaque
- Email da GSA (assessoriaesportivagsa@gmail.com) saiu do site na refatoração

## Pendências
- Confirmar se o Cuiabá e o CRB podem entrar na faixa "Clubes onde a GSA já esteve" (hoje: Cruzeiro, Atlético-MG, América-MG, Sport, Inter SG)
- Revisão dos textos pelos sócios
- Push para publicar (a Netlify publica automaticamente)

## Histórico
- 06/2026: versão inicial como projeto de portfólio
- 14/11/2026: refatoração completa. Visual preto e ouro do logo, hero com fotos reais, faixa de clubes, seções numeradas, mosaico de bastidores, bloco do Instagram como contato, SEO (OG, JSON-LD, favicon), fotos comprimidas de ~14 MB para ~3,5 MB, README como site oficial
