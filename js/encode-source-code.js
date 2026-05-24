document.addEventListener('DOMContentLoaded', function() {
    // Zmienne
    var codeSnippet = document.getElementById('code');
    
    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };

    function escapeHtml(string) {
        return String(string).replace(/[&<>"'\/]/g, function(s) {
            return entityMap[s];
        });
    }

    function buildSnippet() {
        if (codeSnippet) {
            var newContent = escapeHtml(codeSnippet.textContent);
            codeSnippet.innerHTML = newContent;
        }
    }

    buildSnippet();
});
