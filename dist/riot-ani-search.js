riot.tag2('riot-ani-search', '<div class="ani-container"><div class="ani-search"><h3>Powered by <small><a class="anilist" href="https://anilist.co">Anilist</a></small></h3><form onsubmit="{searchAnime}"><div class="ani-row"><div class="ani-col"><div class="ani-form-group"><label for="searchQuery">Search Query</label><input type="text" id="searchQuery" ref="searchQuery" name="searchQuery" placeholder="One Piece..."></input></div></div><div class="ani-col"><div class="ani-form-group"><label for="searchGenre">Search Genre</label><select id="searchGenre" ref="searchGenre" value="any"><option value="any">Any</option><option each="{genre in searchGenres}" riot-value="{genre.value}">{genre.genre}</option></select></div></div></div><div class="ani-form-group"><button id="searchAnime" type="submit">Search Anime</button><button id="clearResults" type="button" onclick="{clearResults}">Clear Results</button></div></form></div><div class="ani-results"><div if="{!searchResults.length}" class="empty-results"><h5 if="{self.error}" class="error-text">Error: <small>{self.error.message}</small></h5><pre>\n            /     \\\n            vvvvvvv  /|__/|\n                I   /O,O   |\n                I /_____   |      /|/|\n              J|/^ ^ ^ \\  |    /00  |    _//|\n                |^ ^ ^ ^ |W|   |/^^\\ |   /oo |\n                \\m___m__|_|    \\m_m_|   \\mm_|\n        </pre></div><div if="{searchResults.length}" each="{anime in searchResults}" class="ani-tile"><img riot-src="{anime.image_url_lge}"><div class="info"><ul><li><b>Title</b>: <small>{anime.title_english}</small></li><li><b>Score</b>: <small>{anime.average_score}</small></li><li><b>Genres</b>: <small>{anime.genres.join(\' \')}</small></li><li><b>Episodes</b>: <small>{anime.total_episodes}</small></li><li><b>Duration</b>: <small>{anime.duration} minutes</small></li><li><b>Type</b>: <small>{anime.type}</small></li></ul></div></div></div></div>', 'riot-ani-search,[data-is="riot-ani-search"]{ display: block; font-family: "Arial Black", Gadget, sans-serif; } @keyframes fadeInLoad { from { opacity:0; } to { opacity:1; } } riot-ani-search .ani-row,[data-is="riot-ani-search"] .ani-row{ display: flex; flex-direction: row; justify-content: flex-start; } riot-ani-search .ani-row > .ani-col,[data-is="riot-ani-search"] .ani-row > .ani-col{ flex: 1; } riot-ani-search .ani-container,[data-is="riot-ani-search"] .ani-container{ display: flex; flex-wrap: wrap; justify-content: flex-start; align-content: flex-start; align-items: flex-start; } riot-ani-search .ani-search,[data-is="riot-ani-search"] .ani-search{ display: block; width: 100%; color: #181F29; background-color: #dddddd; box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); } riot-ani-search .ani-search a.anilist,[data-is="riot-ani-search"] .ani-search a.anilist{ text-decoration: none; color: #00ABFF; } riot-ani-search .ani-search > h3,[data-is="riot-ani-search"] .ani-search > h3{ margin: 1rem; } riot-ani-search .ani-search input,[data-is="riot-ani-search"] .ani-search input,riot-ani-search select,[data-is="riot-ani-search"] select{ padding: 1rem 0.5rem; width: 100%; -webkit-transition: box-shadow 0.5s; transition: box-shadow 0.5s; border: 1px solid #aaaaaa; } riot-ani-search .ani-search input:focus,[data-is="riot-ani-search"] .ani-search input:focus,riot-ani-search select:focus,[data-is="riot-ani-search"] select:focus{ box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); } riot-ani-search .ani-search button,[data-is="riot-ani-search"] .ani-search button{ padding: 1rem; margin: 0 0.5rem 0 0; color: #dddddd; font-weight: bold; border: none; border-radius: 0.2rem; -webkit-transition: background-color 0.7s; transition: background-color 0.7s; } riot-ani-search .ani-search button#searchAnime,[data-is="riot-ani-search"] .ani-search button#searchAnime{ background-color: #4aaf4a; } riot-ani-search .ani-search button#searchAnime:hover,[data-is="riot-ani-search"] .ani-search button#searchAnime:hover{ cursor: pointer; background-color: #357d35; } riot-ani-search .ani-search button#clearResults,[data-is="riot-ani-search"] .ani-search button#clearResults{ background-color: #fb6a6a; } riot-ani-search .ani-search button#clearResults:hover,[data-is="riot-ani-search"] .ani-search button#clearResults:hover{ cursor: pointer; background-color: #c85454; } riot-ani-search .ani-form-group,[data-is="riot-ani-search"] .ani-form-group{ padding: 1rem; } riot-ani-search label,[data-is="riot-ani-search"] label{ display: block; padding-bottom: 0.5rem; text-transform: uppercase; font-weight: bold; font-size: x-small; } riot-ani-search .ani-results,[data-is="riot-ani-search"] .ani-results{ display: flex; width: 100%; flex-wrap: wrap; justify-content: space-around; align-content: space-around; align-items: space-around; padding: 1rem; color: #fff; background-color: #181F29; box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); } riot-ani-search .ani-results:after,[data-is="riot-ani-search"] .ani-results:after{ content: ""; flex: auto; width: 8rem; margin: 0.2rem 0.5rem; } riot-ani-search .ani-tile,[data-is="riot-ani-search"] .ani-tile{ flex:1 1 auto; margin: 0.2rem 0.5rem; width: 8rem; animation: fadeInLoad 1.5s; background-color: #2b3749; color: #fff; border: 1px solid #19212b; box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); } riot-ani-search .ani-tile img,[data-is="riot-ani-search"] .ani-tile img{ display: block; width: 100%; height: 12rem; } riot-ani-search .ani-tile .info,[data-is="riot-ani-search"] .ani-tile .info{ padding: 0.5rem; } riot-ani-search .ani-tile .info ul,[data-is="riot-ani-search"] .ani-tile .info ul{ list-style: none; padding: 0; } riot-ani-search .empty-results,[data-is="riot-ani-search"] .empty-results{ width: 100%; padding: 1rem; } riot-ani-search .empty-results pre,[data-is="riot-ani-search"] .empty-results pre{ width: 50%; margin: auto; animation: fadeInLoad 1.5s; } riot-ani-search .empty-results h5.error-text,[data-is="riot-ani-search"] .empty-results h5.error-text{ color: red; text-align: center; animation: fadeInLoad 1.5s; }', '', function(opts) {

  self = this

  self.anilistHref = 'https://anilist.co/api'
  self.matureGenres = ['Ecchi', 'Hentai']
  self.searchGenres = []
  self.searchResults = []

  this.getApiHref = function(route, token = null) {
    return self.anilistHref + route + ( token ? `?access_token=${token}` : '' )
  }.bind(this)

  this.getAccessToken = function() {
    return new Promise(resolve => {
      if (self.accessToken && self.accessToken.expires > Math.floor(Date.now() / 1000)) {
        resolve(self.accessToken.access_token)
      } else {
        fetch(self.getApiHref('/auth/access_token'), {
          method: "post",
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            grant_type: 'client_credentials',
            client_id: self.opts.clientId,
            client_secret: self.opts.clientSecret
          })
        }).then(response => {
          response.json().then((data) => {
            self.accessToken = data
            resolve(data.access_token)
          })
        })
      }
    })
  }.bind(this)

  this.fetchGenres = function() {
    return self.getAccessToken().then(token => {
      return fetch(self.getApiHref('/genre_list', token)).then(genres => {
        return genres.json()
      })
    })
  }.bind(this)

  this.searchAnime = function(e) {
    e.preventDefault();
    self.getAccessToken().then(token => {
      return fetch(self.getApiHref(`/anime/search/${encodeURI(self.refs.searchQuery.value)}`, token)).then(data => {
        data.json().then(result => {
          if (Array.isArray(result)) {
            if (self.refs.searchGenre.value !== 'any') {
              self.searchResults = result.filter(anime => {
                return anime.genres.includes(self.refs.searchGenre.value)
              })
            } else {
              self.searchResults = result
            }
            if (self.opts.mature == undefined) {
              self.searchResults = self.searchResults.filter(anime => {
                return !anime.adult || !anime.genres.some(genre => self.matureGenres.includes(genre))
              })
            }
            self.error = null
          } else {
            self.searchResults = []
            self.error = { message: result.error.messages[0] }
          }
          self.update()
        })
      })
    })
    return false
  }.bind(this)

  this.clearResults = function(e) {
    self.searchResults = []
    self.update()
  }.bind(this)

  self.on('mount', () => {
    self.fetchGenres().then(genres => {
      self.searchGenres = self.opts.mature == undefined ? genres.filter(item => !self.matureGenres.includes(item.genre)) : genres
      self.update()
    })
  })
});
