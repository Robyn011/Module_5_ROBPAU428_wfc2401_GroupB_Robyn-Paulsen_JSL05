



// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "The Chain", artist: "Fleetwood Mac", genre: "Rock" },
    { title: "Every Breath You Take", artist: "The Police", genre: "Rock" },
    { title: "Put your head on my shoulder", artist: "Paul Anka", genre: "Rock" },
    { title: "I Wanna Dance with Somebody (Who Loves Me)", artist: "Whitney Houston", genre: "R&B" },
    { title: "Stand By Me", artist: "Ben E. King", genre: "R&B" },
    { title: "Price Tag", artist: "Jessie J", genre: "Pop" },
    { title: "Permission to Dance", artist: "BTS", genre: "Pop" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax" : "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
    // Add preferences for Drax, Rocket, and Groot
};
function generatePlaylist(guardians, songs) {
    // Generate HTML playlists for each guardian using map
    const playlistsHTML = Object.entries(guardians).map(([guardian, preferredGenre]) => {
        // Filter songs based on the preferred genre of the current guardian
        const genreSongs = songs.filter(song => song.genre === preferredGenre);
        
        // Shuffle the array of songs within the preferred genre to add randomness
        for (let i = genreSongs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Random index within the remaining items
            [genreSongs[i], genreSongs[j]] = [genreSongs[j], genreSongs[i]]; // Swap songs to shuffle
        }
        
        // Select three random songs from the shuffled array for the playlist
        const randomSongs = genreSongs.slice(0, 3);
        
        // Generate HTML content for the playlist of the current guardian
        return `
            <div class="playlist">
                <h2>${guardian}'s Playlist</h2>
                ${randomSongs.map(song => `
                    <div class="song">
                        <p class="song-title">${song.title}</p>
                        <p>by ${song.artist}</p>
                    </div>
                `).join('')} <!-- Map and join the HTML content for each song -->
            </div>
        `;
    }).join(''); // Join all playlist HTML strings into a single string

    // Append the playlistsHTML to the #playlists div in the HTML document
    const playlistsDiv = document.getElementById('playlists');
    playlistsDiv.innerHTML = playlistsHTML;
}

// Call the generatePlaylist function to generate playlists for each Guardian and display them in the HTML document
generatePlaylist(guardians, songs);
