document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.menu a');
    const divs = document.querySelectorAll('.content');
    const reset = document.getElementById('reset');

    let activeTag = localStorage.getItem('activeTag');

    function applyFilter(tag) {

        divs.forEach(div => {
            const tags = div.dataset.tags.split(' ');
            if (!tag || tags.includes(tag)) {
                div.style.display = '';
            } else {
                div.style.display = 'none';
            }
        });

        links.forEach(link => {
            if (link.dataset.tag === tag) {
                link.classList.add('active');
                link.blur();
            } else {
                link.classList.remove('active');
            }
        });

        if (tag) {
            localStorage.setItem('activeTag', tag);
        } else {
            localStorage.removeItem('activeTag');
        }
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tag = link.dataset.tag;

            if (!link.classList.contains('active')) {
                applyFilter(tag);
            }
        });
    });

    if (reset) {
        reset.addEventListener('click', () => {
            applyFilter(null);
            reset.blur();
        });
    }

    if (activeTag) {
        applyFilter(activeTag);
    } else {
        applyFilter(null);
    }
});