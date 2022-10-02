import{_ as e,c as t,o as a,a as l}from"./app.b4d24f46.js";const _=JSON.parse('{"title":"LeagueTool","description":"","frontmatter":{"title":"LeagueTool"},"headers":[{"level":2,"title":"\u6211\u4EEC\u662F\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F","slug":"\u6211\u4EEC\u662F\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F","link":"#\u6211\u4EEC\u662F\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F","children":[]},{"level":2,"title":"\u4EC0\u4E48\u662F League Client API \uFF1F","slug":"\u4EC0\u4E48\u662F-league-client-api-\uFF1F","link":"#\u4EC0\u4E48\u662F-league-client-api-\uFF1F","children":[]}],"relativePath":"projects/league-tool/index.md","lastUpdated":1664722509000}'),r={name:"projects/league-tool/index.md"},o=l('<h1 id="leaguetool" tabindex="-1">LeagueTool <a class="header-anchor" href="#leaguetool" aria-hidden="true">#</a></h1><p>LeagueTool \u2014\u2014\u300A\u8054\u76DF\u52A9\u624B\u300B\uFF0C\u4E3A\u300A\u82F1\u96C4\u8054\u76DF\u300B\u800C\u751F\u7684\u7EFF\u8272\u52A9\u624B\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u7531\u4E8E\u56FD\u670D WeGame \u52A9\u624B\u8FD1\u671F\u4F1A\u66F4\u65B0\u5168\u65B0\u7248\u672C\uFF0C\u63D0\u4F9B\u56FD\u670D\u82F1\u96C4\u6570\u636E\uFF0C\u6240\u4EE5\u5728\u6B64\u4E0D\u518D\u63D0\u4F9B\u56FD\u670D\u82F1\u96C4\u6570\u636E\u53CA\u76F8\u5173\u529F\u80FD\u3002</p><p>\u4F46\u662F\uFF0C\u6211\u4EEC\u4F9D\u65E7\u4F1A\u63D0\u4F9B\u5176\u4ED6\u5E73\u53F0\u7684\u82F1\u96C4\u6570\u636E\u53CA\u76F8\u5173\u529F\u80FD\u3002</p></div><h2 id="\u6211\u4EEC\u662F\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F" tabindex="-1">\u6211\u4EEC\u662F\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F <a class="header-anchor" href="#\u6211\u4EEC\u662F\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F" aria-hidden="true">#</a></h2><p>LeagueTool \u4F7F\u7528 <a href="https://www.electronjs.org/languages/zh-CN" target="_blank" rel="noreferrer">ELECTRON</a> + <a href="https://cn.vuejs.org/" target="_blank" rel="noreferrer">Vue 3</a> + <a href="https://www.typescriptlang.org/zh/" target="_blank" rel="noreferrer">TypeScript</a> + <a href="https://cn.vitejs.dev/" target="_blank" rel="noreferrer">Vite</a> \u7B49\u6280\u672F\u5F00\u53D1\u3002</p><p>\u901A\u8FC7\u8C03\u7528 <a href="#%E4%BB%80%E4%B9%88%E6%98%AF-league-client-api-%EF%BC%9F">League Client API</a> \u5B9E\u73B0\u4E0E\u5BA2\u6237\u7AEF\u4EA4\u4E92\u3002</p><h2 id="\u4EC0\u4E48\u662F-league-client-api-\uFF1F" tabindex="-1">\u4EC0\u4E48\u662F League Client API \uFF1F <a class="header-anchor" href="#\u4EC0\u4E48\u662F-league-client-api-\uFF1F" aria-hidden="true">#</a></h2><blockquote><p>Riot Games \u6280\u672F - <a href="https://technology.riotgames.com/news/architecture-league-client-update" target="_blank" rel="noreferrer">\u82F1\u96C4\u8054\u76DF\u5BA2\u6237\u7AEF\u67B6\u6784\u66F4\u65B0</a></p></blockquote><p><img src="https://technology.riotgames.com/sites/default/files/articles/40/lcuheader3.png" alt=""> \u5728 2016 \u5E74\u82F1\u96C4\u8054\u76DF\u5BA2\u6237\u7AEF\u4F7F\u7528\u65B0\u7684\u67B6\u6784\uFF0C\u79F0\u4E4B\u4E3A League Client Update\uFF08\u7B80\u79F0 LCU\uFF09 \u3002</p><p>\u65B0\u7248\u67B6\u6784\u53EF\u4EE5\u5206\u4E3A\u5E95\u5C42\u548C\u4E0A\u5C42\u3002</p><ul><li><p>\u4E0A\u5C42\uFF08LeagueClientUx.exe\uFF0CLeagueClientUxRender.exe\uFF09 \u4E3B\u8981\u7528\u4E8E\u663E\u793A\u754C\u9762\u5E76\u4E0E\u5E95\u5C42\u8FDB\u884C\u901A\u4FE1\u3002</p></li><li><p>\u5E95\u5C42\uFF08LeagueClient.exe\uFF09 \u4E0E\u4E0A\u5C42\u548C\u670D\u52A1\u5668\u8FDB\u884C\u901A\u4FE1\uFF0C\u540C\u65F6\u4F1A\u542F\u52A8\u4E00\u4E2A\u670D\u52A1\u4EE5\u4F9B\u7B2C\u4E09\u65B9\u7A0B\u5E8F\u6765\u4E0E\u4E4B\u901A\u4FE1\u3002</p></li></ul><p><img src="https://static.developer.riotgames.com/img/docs/lol/lcu_architecture.png" alt=""></p><p>LeagueTool \u4E0E\u5BA2\u6237\u7AEF\u8FDE\u63A5\u76D1\u542C\u5176\u6D88\u606F\u5E76\u5411\u5176\u53D1\u9001\u8BF7\u6C42\uFF0C\u4EE5\u5B9E\u73B0\u76F8\u5173\u529F\u80FD\u3002</p>',13),i=[o];function n(c,s,p,u,g,h){return a(),t("div",null,i)}const f=e(r,[["render",n]]);export{_ as __pageData,f as default};
