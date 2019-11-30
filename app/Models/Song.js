import { generateId } from "../Utils.js";
export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title || "Unknown"
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "500x500")
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price || " "
    this.preview = data.previewUrl || data.preview
    this.activePreview = false
    this._id = data.trackId || data._id || generateId()
    // this._id = data.trackId || data._id;
  }

  get Template() {
    return `
      <div class="col-6 col-sm-4 col-md-3 mt-1 mb-1">
        <div class="card align-items-center">
          <img src="${this.albumArt}" class="card-img-top">
          <div class="row card-body">
            <div>
              <p>Artist: ${this.artist}</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Title: <b>${this.title}</b></p>
              <p>$${this.price}</p>
            </div>
            <div>
              <p><em>${this.album}</em></p>
            </div>
            <div>
              <p><audio class="audio" controls onplay="app.songsController.activePreview(event)">
              <source src="${this.preview}">
              Your browser does not support the audio tag.
            </audio></p>
            </div>
            <div class="text-center">
              <button class="btn btn-light add-to-playlist" onclick="app.songsController.addSong('${this._id}')">Add to playlist</button>
            </div>
          </div>
        </div>
      </div>
        `;
  }

  get playlistTemplate() {
    return `
    <div class="col-12 m-0">
      <div id="playlist-card" class="card">
        <i class="fas fa-minus" onclick="app.songsController.removeSong('${this._id}')"></i>
        <img src="${this.albumArt}" class="card-img-top">
        <div class="row card-body">
          <div>
            <p>Artist: ${this.artist}</p>
          </div>
          <div class="d-flex justify-content-between">
            <p>Title: <b>${this.title}</b></p>
            <p>$${this.price}</p>
          </div>
          <div>
            <p><em>${this.album}</em></p>
          </div>
          <div>
            <p><audio class="audio" controls onplay="app.songsController.activePreview(event)">
              <source src="${this.preview}">
              Your browser does not support the audio tag.
              </audio></p>
          </div>
        </div>
      </div>
    </div>
        `;
  }
}
