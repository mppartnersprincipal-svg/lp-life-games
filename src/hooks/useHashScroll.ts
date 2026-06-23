import { useEffect } from "react";

/**
 * Faz o deep-link por âncora (#secao) funcionar numa SPA.
 *
 * Quando alguém abre a página já com um hash na URL — por exemplo vindo de um
 * sitelink do Google Ads (lifegames.com.br/#servicos) — o navegador tenta rolar
 * até a âncora ANTES do React montar as seções, então a rolagem falha. Este hook
 * reposiciona a página na seção certa depois da montagem e novamente quando
 * fontes/imagens terminam de carregar (evitando desalinhamento por layout shift).
 */
export function useHashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const { hash } = window.location;
      if (hash.length < 2) return;
      const id = decodeURIComponent(hash.slice(1));
      const el = document.getElementById(id);
      // scrollIntoView respeita o scroll-margin-top (scroll-mt) das seções,
      // compensando o header fixo.
      el?.scrollIntoView({ behavior: "auto", block: "start" });
    };

    // Após o mount inicial (deep link vindo de anúncio/sitelink).
    const raf = requestAnimationFrame(scrollToHash);
    // Fallback: garante o reposicionamento mesmo que o "load" já tenha
    // disparado antes do React montar (assets em cache) ou haja layout shift.
    const timer = setTimeout(scrollToHash, 250);
    // Correção final quando tudo (fontes/imagens) terminar de carregar.
    window.addEventListener("load", scrollToHash);
    // Cliques internos que alteram o hash.
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      window.removeEventListener("load", scrollToHash);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);
}
