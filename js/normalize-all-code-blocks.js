function normalizeAllCodeBlocks() {
    document.querySelectorAll('code').forEach(codeElement => {
        // Pobierz kod i rozbij na linie
        let lines = codeElement.textContent.split('\n');

        // Usuń puste linie z początku i końca
        while (lines.length && lines[0].trim() === '') lines.shift();
        while (lines.length && lines[lines.length - 1].trim() === '') lines.pop();

        if (lines.length === 0) return; // jeśli kod pusty — pomiń

        // Znajdź najmniejsze wspólne wcięcie (liczbę spacji/tabów)
        const indentLengths = lines
            .filter(line => line.trim() !== '')
            .map(line => line.match(/^(\s*)/)[0].length);

        const minIndent = Math.min(...indentLengths);

        // Usuń wspólne wcięcie ze wszystkich linii
        const normalized = lines.map(line => line.slice(minIndent)).join('\n');

        // Zaktualizuj treść code-elementu
        codeElement.textContent = normalized;
    });
}

normalizeAllCodeBlocks();
