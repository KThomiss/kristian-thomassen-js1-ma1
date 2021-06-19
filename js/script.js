//Question 1:
const cat = {
    complain: function () {
        console.log("Meow!")
    }
}
cat.complain();

//Question 2:
const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//Question 3:
heading.style.fontSize = "2em";

//Question 4:
//console.dir(heading);
heading.className ="subheading";

//Question 5:
const paragraph = document.querySelectorAll("p");

for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = "red";
}

//Question 6:
const resultsContainer = document.querySelector(".results")
resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.color = "yellow";

//Question 7:
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function itemList (list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}
itemList(cats);//"blob", "Harold", "Blurt"

//Question 8:
function createCats (cats) {

    let html = "";

    for (let i = 0; i < cats.length; i++) {

        let ageUnknown = "Age unknown";

        if (cats[i].age) {
            ageUnknown = cats[i].age;
        }

        html += `<h5>${cats[i].name}</h5>
                <p>${ageUnknown}</p>`;
    }

    return html
}

const newHtml = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHtml;