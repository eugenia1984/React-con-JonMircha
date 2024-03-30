export default function BulmaCardImage({srcImg, altTxt}) {
  return (
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src={srcImg}
          alt={altTxt}
        />
      </figure>
    </div>
  )
}
