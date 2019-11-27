export default class Song {
  constructor(data) {
    this.title = data.trackName || "Unknown";
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "500x500");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice ? "$" + data.trackPrice : "";
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return `
      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <div class="card">
          <img src="${this.albumArt}" class="card-img-top">
          <div class="row card-body">
            <div>
              <p>Artist: ${this.artist}</p>
            </div>
            <div class="d-flex justify-content-between">
              <p><b>${this.title}</b></p>
              <p>${this.price}</p>
            </div>
            <div>
              <p>${this.album}</p>
            </div>
            <div>
              <p><audio class="audio" controls>
              <source src="${this.preview}">
              Your browser does not support the audio tag.
            </audio></p>
            </div>
          </div>
        </div>
      </div>
        `;
  }

  get playlistTemplate() {
    return `

        `;
  }
}
