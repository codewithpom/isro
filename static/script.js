const table_body = document.getElementById("table_body")
function show() {
    $.get("https://isroapi.padmashreejha.repl.co/spacecrafts", function (data){
        let names = []
        data = data['spacecrafts']
        console.log(data)
        for (let dataKey in data) {
            let name = data[dataKey]['id'];
            names.push(name)
            console.log(name)
            /*
            let google_button = document.createElement("button")
            let anchor_tag = document.createElement("a")
            anchor_tag.setAttribute("href", "https://www.google.com/search?q=" + name + "ISRO+satellite")
            anchor_tag.append(google_button)
            google_button.setAttribute("style", "float: right")
            google_button.innerText = "Search for " + name + " on google"
            */
            let tr = document.createElement("tr")
            tr.setAttribute("id", name)
            let td = document.createElement("td")
            let div_tag = document.createElement("div")
            div_tag.append(tr)
            td.innerText = name
            tr.append(td)

            table_body.append(tr)



        }

        window.names = names

    });

}

function find() {
    let name_in_box = document.getElementById("name").value
    const names = window.names

    for (let namesKey in names) {
        let name = names[namesKey]
        console.log(name_in_box.toLowerCase())
        console.log(name.toLowerCase())
        let name_to_be_checked = name.toLowerCase();
        if (!name_to_be_checked.includes(name_in_box.toLowerCase())){
            document.getElementById(name).style.display = "none"

        }
        else {
            document.getElementById(name).style.display = ""
        }


    }


}


function show_launchers() {

    $.get("https://isroapi.padmashreejha.repl.co/launchers", function (data){
        let names = []
        data = data['launchers']
        console.log(data)
        for (let dataKey in data) {
            let name = data[dataKey]['id'];
            names.push(name)
            console.log(name)
            /*
            let google_button = document.createElement("button")
            let anchor_tag = document.createElement("a")
            anchor_tag.setAttribute("href", "https://www.google.com/search?q=" + name + "ISRO+satellite")
            anchor_tag.append(google_button)
            google_button.setAttribute("style", "float: right")
            google_button.innerText = "Search for " + name + " on google"
            */
            let tr = document.createElement("tr")
            tr.setAttribute("id", name)
            let td = document.createElement("td")
            td.innerText = name
            tr.append(td)

            table_body.append(tr)



        }

        window.names = names

    });

}