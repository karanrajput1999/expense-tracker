const expAmount = document.getElementById("exp-amount");
const expName = document.getElementById("exp-name");
const expDate = document.getElementById("exp-date");
const expBtn = document.getElementById("exp-btn");
const expType = document.getElementById("exp-type");
const table = document.getElementById("table");
const tableChild = document.getElementById("table").childNodes;

expBtn.addEventListener("click", () => {
  const expT = expType.value;
  const expN = expName.value;
  const expD = expDate.value;
  const expA = expAmount.value;

  if (expT === "choose-type") {
    alert("Please choose the expense type !");
    return;
  }

  const tr = document.createElement("tr");

  // Serial No
  const td1 = document.createElement("td");
  const td1Text = document.createTextNode(tableChild.length - 1);
  td1.appendChild(td1Text);
  tr.appendChild(td1);

  // Expresnse Type
  const td2 = document.createElement("td");
  const td2Text = document.createTextNode(expT);
  td2.appendChild(td2Text);
  td2.classList.add("expT-data");
  tr.appendChild(td2);

  // Expense Name
  const td3 = document.createElement("td");
  const td3Text = document.createTextNode(expN);
  td3.appendChild(td3Text);
  td3.classList.add("expN-data");
  tr.appendChild(td3);

  // Expense Date
  const td4 = document.createElement("td");
  const td4Text = document.createTextNode(expD);
  td4.appendChild(td4Text);
  td4.classList.add("expD-data");
  tr.appendChild(td4);

  // Expense Amount
  const td5 = document.createElement("td");
  const td5Text = document.createTextNode(expA + " Rs");
  td5.appendChild(td5Text);
  td5.classList.add("expA-data");
  tr.appendChild(td5);

  // Delete Btn
  const td6 = document.createElement("td");
  const td6Text = document.createTextNode("Delete");
  td6.append(td6Text);
  td6.classList.add("del-btn");
  tr.appendChild(td6);

  const td7 = document.createElement("td");
  const td7Text = document.createTextNode("Edit");
  td7.append(td7Text);
  td7.classList.add("edit-btn");
  tr.appendChild(td7);

  table.appendChild(tr);

  const editBtn = document.getElementsByClassName("edit-btn");
  editFun(editBtn);

  const delBtn = document.getElementsByClassName("del-btn");
  btnFun(delBtn);

  expType.value = expType.children[0].value;
  expName.value = "";
  expDate.value = "";
  expAmount.value = "";
});

// Function for Delete Button
function btnFun(delBtn) {
  Array.from(delBtn).forEach((e) => {
    e.addEventListener("click", (e) => {
      const a = e.currentTarget;
      a.parentElement.remove();
    });
  });
}

// Function for Edit Button
function editFun(editBtn) {
  // expN, expD, expA, expT - using this here does not work
  Array.from(editBtn).forEach((e) => {
    e.addEventListener("click", handleClick)
      
    //   e.addEventListener("click", (ev) => {
    //   console.log("edit",e.removeEventListener);
    //   e.removeEventListener("click", (ev) => {
    //     alert("listner removed.....")
    //   },true);
    //   const siblings = ev.currentTarget.parentElement.childNodes;

      // expType.value = siblings[1].innerText;
      // expName.value = siblings[2].innerText;
      // expDate.value = siblings[3].innerText;
      // expAmount.value = siblings[4].innerText.split(" ")[0];
      // ev.currentTarget.classList.add("update");
      // ev.currentTarget.innerText = "Update";
      // // working portion
      // updateValue(ev, siblings);
    // });
  });
}
// Not working portion

function handleClick(e){
  console.log(e.target.classList.contains("update"))
    const siblings = e.currentTarget.parentElement.childNodes;
    console.log(siblings);
  if(e.target.classList.contains("update")){
    e.target.classList.remove("update");
    e.target.classList.add("edit-btn");
    e.target.innerText = "Edit";
    siblings[1].innerText = expType.value;
    siblings[2].innerText = expName.value;
    siblings[3].innerText = expDate.value;
    siblings[4].innerText = expAmount.value + " Rs";
    expType.value = "choose-type";
    expName.value = "";
    expDate.value = "";
    expAmount.value = "";
  }
  else if(e.target.classList.contains("edit-btn")){
    e.target.classList.add("update");
    e.target.classList.remove("edit-btn");
    e.target.innerText = "Update";
    expType.value = siblings[1].innerText;
    expName.value = siblings[2].innerText;
    expDate.value = siblings[3].innerText;
    expAmount.value = siblings[4].innerText.split(" ")[0];
    console.log("edit")
  }

}

// updating the value if I hard code
// function updateValue(ev, siblings) {
//   const updateBtn = ev.currentTarget;
//   if (updateBtn.classList.contains("update")) {
//     updateBtn.addEventListener("click", () => {
//       console.log("update",siblings,expType.value,expName.value,expDate.value,expAmount.value);
//       siblings[1].innerText = expType.value;
//       siblings[2].innerText = expName.value;
//       siblings[3].innerText = expDate.value;
//       siblings[4].innerText = expAmount.value + " Rs";
//     });
//   }
// }
