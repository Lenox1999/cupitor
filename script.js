window.prop = {};
const uniqueWordsArr = document.querySelectorAll("th");

function readFile(file) {
  return new Promise((resolve, reject) => {
    let fr = new FileReader();
    fr.onload = (x) => resolve(fr.result);
    fr.readAsText(file);
  });
}

async function read(input) {
  const txtFile = await readFile(input.files[0]);
  let arrBySpaceSplit = [];
  let finalArr = [];

  let arrByEnterSplit = txtFile.split("\n");

  if (arrByEnterSplit.length > 1) {
    arrBySpaceSplit = arrByEnterSplit
      .filter((el) => el.length > 1)
      .map((element) => {
        return element.split(" ").filter((el) => el.length > 1);
      });

    for (let i = 0; i < arrBySpaceSplit.length; i++) {
      finalArr.push(arrBySpaceSplit[i].concat(arrBySpaceSplit[++i]));
    }

    window.prop.testCreate(finalArr[0]);

    console.log(finalArr);
  } else {
    arrBySpaceSplit = txtFile.trim().split(" ");
  }
}

function onSubmit() {
  console.log("heu");
}

window.prop.testCreate = function (arr) {
  console.log("HEE:", arr.length);
  for (let index = 0; index < arr.length; index++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = arr[index];
    let td2 = document.createElement("td");
    td2.appendChild(document.createElement("textarea"));
    tr.appendChild(td);
    tr.appendChild(td2);
    document.getElementById("test").appendChild(tr);
  }
};
