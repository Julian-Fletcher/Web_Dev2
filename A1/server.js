const express = require('express');
const app = express();
const port = 3000;
var expressLayouts = require('express-ejs-layouts');

const user = {
    firstName: "Julian",
    pawprint: "JF6FZ"
}

const movies = [
    {name: 'Godzilla Minus One', desc: 'Directed by: Takashi Yamazaki Starring: Ryunosuke Kamiki, Minami Hamabe'},
    {name: 'Ratatouille', desc: 'Directed by Brad Bird, Starring Patton Oswalt and Ian Holm'},
    {name: 'Murder on the Orient Express', desc: 'Directed by Kenneth Branagh and starrring Tom Bateman and Kenneth Branagh'},
    {name: 'Edge of Tomorrow', desc: 'Directed by Dough Liman and starring Tom Cruise and Emily Blunt'},
    {name: 'Avengers Infinity War', desc: 'Directed by Anthony and Joe Russo and starring Robert Downey Jr. and Chris Hemsworth'},
    {name: 'Brightburn', desc: 'Directed by David Yarovesky and starring Elizabeth Banks and David Denman'},
    {name: 'Chicken Run', desc: 'Directed by Peter Lord and starring Phil Daniels and Lynnn Ferguson'},
    {name: 'Inception', desc: 'Directed by Christopher Nolan and starring Leonardo DiCaprio and Ken Watanabe'},
    {name: 'War for the Planet of the Apes', desc: 'Directed by Matt Reeves and starring Andy Serkis and Woody Harrelson'},
    {name: 'Epic', desc: 'Directed by Chris Wedge and starring Colin Farrell and Josh Hutcherson'},
]

app.use(expressLayouts);
app.set('view engine', 'ejs');

//Send variable to page to be loaded
app.get('/', (req, res) => {
    res.render("home.ejs", {
        user:user
    })
});

app.get("/about", (req, res) => {
    res.render("about.ejs",{
        user:user
    })
});

app.get("/movie", (req, res) => {
    res.render("movie.ejs", {
    movies:movies
    })
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));