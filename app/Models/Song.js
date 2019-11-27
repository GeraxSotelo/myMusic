export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "500x500");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return `
      <div class="col-2">
        <div class="card">
          <img src="${this.albumArt}" class="card-img-top">
          <div class="row card-body">
            <div class="col-12">
              <p>${this.artist}</p>
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-9">
                  <p>${this.title}</p>
                </div>
                <div class="col-3">
                  <p>${this.price}</p>
                </div>
              </div>
            </div>
            <div class="col-12">
              <p>${this.album}</p>
            </div>
            <div class="col-12">
              <p>${this.preview}</p>
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
