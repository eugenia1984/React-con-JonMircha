export default function BulmaCardContent() {
  return (
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img
              src="https://img.icons8.com/doodle/48/user-female-circle.png"
              alt="ser-female-circle"
              width="48"
              height="48"
            />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">John Smith</p>
          <p className="subtitle is-6">@johnsmith</p>
        </div>
      </div>
      <div className="content">
        Atlanta Botanical Garden, Piedmont Avenue Northeast, Atlanta, GA, USA{' '}
        <a href="/">@bulmaio</a>.<a href="/">#css</a>{' '}
        <a href="/">#responsive</a>
        <br />
        <time dateTime="2023-2-8">11:09 PM - 2 Aug 2023</time>
      </div>
    </div>
  )
}
