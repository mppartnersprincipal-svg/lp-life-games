# Landing Page — Assistência Técnica · Life Games

Landing page de alta conversão para o serviço de assistência técnica de videogames
da Life Games, destino de campanha de Pesquisa no Google Ads. Foco: gerar contato no
WhatsApp / pedido de diagnóstico.

Stack: **Vite + React + TypeScript + Tailwind CSS v4 + Framer Motion + lucide-react**.
Tema dark gamer com a linha de ECG (batimento) como elemento-assinatura, mobile-first.

## Como rodar

```bash
npm install
npm run dev        # ambiente local em http://localhost:5173
npm run build      # gera /dist para produção
npm run preview    # serve o /dist localmente
```

Requer Node 18+ (testado com Node 22).

## Onde trocar os `[PREENCHER]`

Os placeholders aparecem destacados na própria página (texto vermelho, borda
tracejada) para nunca passarem despercebidos. Edite:

| O quê | Onde |
|---|---|
| Número do WhatsApp e mensagem pré-preenchida | `src/lib/site.ts` (`WHATSAPP_NUMBER`, `WHATSAPP_MESSAGE`) |
| Telefone de ligação (click-to-call) | `src/lib/site.ts` (`PHONE_DISPLAY`, `PHONE_TEL`) |
| Instagram / Facebook / link da loja | `src/lib/site.ts` (`SOCIAL`) |
| Endereço, ponto de referência e horário | `src/components/Footer.tsx` (bloco `[PREENCHER endereço ...]`) |
| Depoimentos reais (mín. 3) | `src/components/Testimonials.tsx` |
| Respostas do FAQ (garantia, prazo, cidades, custo do orçamento) | `src/components/Faq.tsx` |
| **ID do Google Ads / GA4 / GTM** | `index.html` (bloco comentado `[PREENCHER] Google Ads`) |

### Conversão (Google Ads)

O clique em qualquer botão de WhatsApp dispara o evento `whatsapp_click`
(ver `src/lib/analytics.ts`), empurrado para o `dataLayer` (GTM) e via `gtag`.
Cada clique inclui a origem (`hero`, `fab`, `final_cta`, etc.).

Para medir a conversão: cole o snippet do gtag.js ou do GTM em `index.html`
(há um exemplo comentado no `<head>`) com o ID real e crie a conversão no Google
Ads apontando para o evento `whatsapp_click`.

## Deploy na Vercel

O projeto já está pronto (`vercel.json` incluído, framework Vite detectado).

1. Conecte o repositório na Vercel (o cliente já tem o conector).
2. Build Command: `npm run build` · Output Directory: `dist` (já no `vercel.json`).
3. Deploy.

Ou via CLI: `npx vercel --prod`.

## Notas

- **Logo:** `public/logo.jpeg` (wordmark + ECG). Substitua o arquivo mantendo o nome
  para trocar a logo; ele também é usado como favicon e imagem Open Graph
  (`public/og-image.jpeg`).
- **Acessibilidade / movimento:** todas as animações respeitam
  `prefers-reduced-motion`.
- **Fontes:** Chakra Petch (títulos) + Sora (corpo), via Google Fonts com
  `display=swap`.
