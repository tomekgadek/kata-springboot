document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postFile = urlParams.get('post');
    const contentDiv = document.getElementById('markdown-content');
    const subtitleElem = document.getElementById('page-subtitle');

    if (postFile) {
        fetch(`./pages/${postFile}.md`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nie znaleziono wpisu.');
                }
                return response.text();
            })
            .then(text => {
                // Konfiguracja renderera marked.js, by bloki kodu pasowały do content.css
                const renderer = new marked.Renderer();
                renderer.code = function(arg1, arg2) {
                    const code = typeof arg1 === 'object' ? (arg1.text || '') : (arg1 || '');
                    const language = typeof arg1 === 'object' ? (arg1.lang || '') : (arg2 || '');
                    
                    // Escapowanie znaków HTML, aby tagi generyczne np. <String> nie psuły DOMu
                    const escapedCode = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
                    
                    const langClass = language ? `language-${language}` : '';
                    return `<div class="code"><pre><code class="hljs ${langClass}">${escapedCode}</code></pre></div>`;
                };
                
                marked.use({ renderer });

                // Wykorzystanie biblioteki marked do parsowania markdown
                
                const githubUrl = `https://github.com/tomekgadek/kata-springboot/blob/master/pages/${postFile}.md`;
                const githubLinkHtml = `<div style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #eaeaea; text-align: center; font-size: 0.85em; color: #888;">
                    Zobacz lub edytuj ten wpis na <a href="${githubUrl}" target="_blank" style="color: #888; text-decoration: underline;">GitHubie</a>
                </div>`;
                contentDiv.innerHTML = marked.parse(text) + githubLinkHtml;
                
                // Uruchomienie kolorowania składni
                if (typeof hljs !== 'undefined') {
                    contentDiv.querySelectorAll('pre code').forEach((block) => {
                        hljs.highlightElement(block);
                    });
                }
                
                // Zmiana tytułu artykułu w tagu title oraz podtytule strony
                const match = text.match(/^#\s+(.*)/);
                if(match) {
                    const postTitle = match[1].trim();
                    document.title = postTitle + " | Spring Boot TL;DR";
                    if (subtitleElem) {
                        subtitleElem.textContent = postTitle;
                    }
                } else if (subtitleElem) {
                    subtitleElem.textContent = "Artykuł";
                }
            })
            .catch(error => {
                contentDiv.innerHTML = `<h2>Błąd</h2><p>${error.message}</p>`;
            });
    } else {
        contentDiv.innerHTML = `<h2>Brak wskazanego wpisu. Wróć do strony głównej.</h2>`;
    }
});
