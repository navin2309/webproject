const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const port = 3000;

//console.log(path.join(__dirname,"../public"));

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");

app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath);

//builtin middle warek
app.use(express.static(staticPath));

app.get("/",(req, res)=>{
    res.render("index", {
        channelName: "Naveen Bakana",
    });
})

app.get("/about",(req, res) => {
    res.render("about", {
        channelName: "Ayush Bakana",
    });
});

app.get("/about/*",(req, res) => {
    res.render("404", {
        errorcontent: "Opps! this about page could not found.",
    });
});

app.get("*",(req, res) => {
    res.render("404", {
        errorcontent: "Opps! this page could not found. Click home page.",
    });
});

// app.get("/about",(req, res) => {
//     res.write("<h1>Hello world from express about page</h1>");
//     res.send();
// });

// app.get("/json",(req, res) => {
//     res.send([
//         {
//             id: 1,
//             name: "Naveen"
//         },
//         {
//             id: 1,
//             name: "Naveen"
//         },
//         {
//             id: 1,
//             name: "Naveen"
//         }
//     ]);
// });

app.listen(port, () => {
    console.log(`Listening the port at ${port}`);
});