const React = require('react')
const Def = require('../default')

function show(data) {
    return(
    <Def>
        <main>
        <div><img src={data.place.pic} height="30%" width="30%"></img></div>
            <div><h1>Description</h1>
            <h2>{data.place.name}</h2>
            <h3>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</h3>
            </div>
            <div>
            <h1>Rating</h1>
            <h2>Not Rated</h2>
            </div>
            <div>
            <h1>Comments</h1>
            <h2>No comments yet!</h2>
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>
        </main>
    </Def>
    )
}

module.exports = show