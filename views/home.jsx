const React = require('react')
const Def = require('./default')

function home() {
    return(<Def>
        <main>
            <h1>HOME</h1>
            <div>
                Photo by <a href="https://chuantianxiany.com/">chuantianxia</a><img src="/images/slide01.jpg" alt="Spicy Fish"/>
            </div>
            <a href="/places">
  <button className="btn btn-primary">Places Page</button></a>
        </main>
    </Def>
    )
}

module.exports = home