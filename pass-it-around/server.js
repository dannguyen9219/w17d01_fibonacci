const express = require('express');
const app = express();

let bugs = 99;

app.get('/', (req, res) => {
    if(bugs != 0){
        bugs--
        res.send(bugs + " little bugs in the code. " + bugs + " little bugs. " + `<a href="http://localhost:3000/">Take one down, patch it around</a>`)
    } else {
        res.send(bugs + " little bugs on the wall. No more bugs. " + `<a href="/99">Add More Bugs</a>`)
    }
});

app.get('/:bugs', (req, res) => {
    let { bugs } = req.params
    if(bugs != 0) {
        res.send(bugs + " little bugs in the code. " + bugs + " little bugs. " + `<a href="/${bugs - 1}"> Take one down, patch it around</a>`)
    } else if(bugs == 1) {
        res.send(bugs + " Bugs on the wall " + `<a href="/${bugs - 1}"> Take one down, patch it around</a>`)
    } else {
        res.send("0 Bugs on the wall " + ` <a href="/99">Add More Bugs</a>`)
    }
});



app.listen(3000, () => {
    console.log("Listening to 3000")
});
