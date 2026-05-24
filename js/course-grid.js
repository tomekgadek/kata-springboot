class CourseGrid {
    constructor(data, containerSelector = ".course-grid") {
        this.data = data;
        this.container = document.querySelector(containerSelector);
    }

    getJson() {
        return this.data;
    }

    render() {
        if (!this.container) return;

        this.container.innerHTML = "";

        this.data.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("content");
            div.dataset.tags = item.tag;
            div.onclick = () => {
                window.location.href = './page.html?post=' + item.filename;
            };

            const h3 = document.createElement("h3");
            h3.textContent = item.title;

            const p = document.createElement("p");
            p.textContent = `#${item.tag}`;

            div.appendChild(h3);
            div.appendChild(p);
            this.container.appendChild(div);
        });
    }
}
