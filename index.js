let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

function compareObjectsProp(a, b) {
    let flag = true
    if (Object.keys(a).length === Object.keys(b).length) {
        for (let i of Object.keys(a)) {
            if (!b[i]) flag = false;
            if (a[i] !== b[i]) flag = false;
        }
    } else {
        flag = false;
    }
    return flag;
}

var result = compareObjectsProp(obj1, obj2) ? "The objects are equal" : "The objects are not equal";
console.log(result);

function printCountryFlags() {
    var container = document.getElementById("flagContainer");
    fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then((res, i) => {
            forEach(i => {
                container.innerHTML += `<img src="${res.flag}" alt="flag${i}" class="flag">`
            })
        }).catch(err => console.log(err));
}

async function printCountryDetails() {
    try {
        var resp = await fetch("https://restcountries.eu/rest/v2/all");
        resp = await resp.json();
        for (let i of resp) {
            console.log(resp.name, resp.region, resp, subregion, resp.population);
        }
    }
    catch (err) {
        console.log(err);
    }
}

printCountryFlags()
printCountryDetails()