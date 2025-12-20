function moviesListComponent() {
    return {
        apiUrl: '/api/movies',
        page: 0,
        size: 6,
        totalPages: 0,
        movies: [],
        isLoading: false,
        errorMessage: '',

        init() {
            this.loadMovies();
        },

        async loadMovies() {
            this.isLoading = true;
            this.errorMessage = '';

            try {
                const url = `${this.apiUrl}?page=${this.page}&size=${this.size}`;

                const headers = { 'Accept': 'application/json' };

                const response = await fetch(url, { method: 'GET', headers });

                if (!response.ok) {
                    if (response.status === 401) {
                        throw new Error('401 Unauthorized – check your credentials');
                    }
                    throw new Error(`HTTP ${response.status}`);
                }

                const data = await response.json();
                this.movies = data.content || [];
                this.totalPages = data.totalPages || 1;
                this.page = data.number || 0;
            } catch (e) {
                console.error(e);
                this.errorMessage = `Problem z odczytem filmów: ${e.message}`;
                this.movies = [];
            } finally {
                this.isLoading = false;
            }
        },

        nextPage() {
            if (this.page < this.totalPages - 1) {
                this.page++;
                this.loadMovies();
            }
        },

        previousPage() {
            if (this.page > 0) {
                this.page--;
                this.loadMovies();
            }
        },

        playMovie(videoId) {
            window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
        },

        imageUrl(movie) {
            return `http://localhost:8080/${movie.image}`;
        }
    };
}

window.moviesComponent = moviesListComponent;
