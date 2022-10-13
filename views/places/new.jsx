const React = require('react')
const Def = require('../default')

function new_form() {
    return(
    <Def>
        <main>
            <h1>Add a new place</h1>
            <form action="">
                <input type="submit" value="Submit"/>
            </form> 
        </main>
    </Def>
    )
}



module.exports = new_form