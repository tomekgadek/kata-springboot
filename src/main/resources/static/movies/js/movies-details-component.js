function movieDetailsComponent() {
    return {
        apiUrl: 'http://localhost:8080/api/movies/1', // query param???
        movie: { movieId: 0, title: '', image: '', releaseYear: 0, videoId: '' },
        isLoading: false,
        movieLoaded: false,
        errorMessage: '',

        init() {
            this.loadMovie();
        },

        imageUrl(movie) {
            return `http://localhost:8080/${movie.image}`;
        },

        async loadMovie() {
            this.errorMessage = '';
            this.isLoading = true;
            this.movieLoaded = false;

            try {
                const response = await fetch(this.apiUrl, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        throw new Error('Nieprawidłowy login lub hasło');
                    }
                    throw new Error('Błąd HTTP ' + response.status);
                }

                this.movie = await response.json();
                this.movieLoaded = true;
            } catch (e) {
                console.error(e);
                this.errorMessage = e.message || 'Błąd pobierania danych filmu';
                this.movieLoaded = false;
            } finally {
                this.isLoading = false;
            }
        }
    };
}