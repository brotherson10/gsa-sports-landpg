# GSA Sports | Assessoria Esportiva

Site oficial da **GSA Sports (GSA Assessoria Esportiva)**, empresa de agenciamento, intermediação e representação de atletas de futebol, da base ao profissional.

O canal principal da GSA é o Instagram [@gsasportss](https://www.instagram.com/gsasportss/). O site apresenta a empresa e leva o visitante até lá.

🔗 **No ar:** https://gsa-sports.com/

## Seções

- Hero com fotos reais dos atletas e das visitas a clubes
- Faixa "Presença em clubes de" Alagoas, Minas Gerais, São Paulo, Rio de Janeiro, Pernambuco e Mato Grosso
- Sobre a GSA
- Como trabalhamos: carreira, network e oportunidades
- Bastidores: mosaico de fotos com legenda
- Instagram em destaque, que é o canal de contato

## Tecnologia

- HTML, CSS e JavaScript puros, sem framework nem build
- Fontes Barlow Condensed e Inter (Google Fonts)
- Fotos em WebP comprimidas, com `width`/`height` e carregamento preguiçoso
- SEO: `title`, `meta description`, Open Graph com imagem de compartilhamento e dados estruturados `Organization` (JSON-LD)
- Deploy automático na Netlify a cada push na `main`

## Estrutura

```
index.html       página única
styles.css       estilos (tokens de cor no :root)
scripts.js       menu mobile, cabeçalho no scroll e animação de entrada
assets/img/      fotos, logo, favicons e imagem de compartilhamento
```

## Desenvolvimento

Desenvolvido por Brotherson A.
