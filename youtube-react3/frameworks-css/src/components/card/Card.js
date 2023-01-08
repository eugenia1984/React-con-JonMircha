import React from "react";

export default function Card() {
  const srcPicture =
    "https://media.istockphoto.com/id/1403500817/es/foto/los-craggies-en-las-monta%C3%B1as-blue-ridge.jpg?s=612x612&w=0&k=20&c=Z-MwaW-16JT72Wup9Cs7I5FhGfp6fgiGH8k6l23R07o=";
  const scrAvatar =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={srcPicture} alt="paisaje" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={scrAvatar} alt="Placeholder" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">John Smith</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div className="content">
          A nice sunset. <br /> <a href="/">@bulmaio</a>.
          <a href="index.html">#css</a> <a href="/">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  );
}
