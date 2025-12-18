function moviesListComponent() {
    return {
        apiUrl: '/api/movies',   // dopasuj do backendu
        page: 0,
        size: 6,                 // 6 filmów: 2 wiersze x 3 kolumny
        totalPages: 0,
        movies: [],
        isLoading: false,
        errorMessage: '',

        // dane logowania na sztywno (Basic Auth: user/user)
        username: 'user',
        password: 'user',
        authHeader: '',

        init() {
            this.loadMovies();
        },

        buildAuthHeader() {
            const token = btoa(`${this.username}:${this.password}`);
            this.authHeader = `Basic ${token}`;
        },

        async loadMovies() {
            this.isLoading = true;
            this.errorMessage = '';

            try {
                const url = `${this.apiUrl}?page=${this.page}&size=${this.size}`;

                const headers = { 'Accept': 'application/json' };
                if (this.authHeader) {
                    headers['Authorization'] = this.authHeader;
                }

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
                this.errorMessage = `Error load movies: ${e.message}`;
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
