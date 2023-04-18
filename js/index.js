
const everyInput = document.querySelector('.every-input');
const allButton = document.querySelector('.all-button');
const wholeList = document.querySelector('.whole-list');
filterOption = document.querySelector('.all-filter');

document.addEventListener('DOMContentLoaded', getAll);
allButton.addEventListener('click', addAll);
wholeList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterAll);


function addAll(event) {
    event.preventDefault();
    if (!everyInput.value) return;
    createComponents(everyInput.value);
    sevaLocalAll(everyInput.value);
    everyInput.value = "";
}

function createComponents(value) {
    const allDiv = document.createElement('div');
    allDiv.classList.add('all');

    const allNew = document.createElement('li');
    allNew.innerText = everyInput.value;
    allNew.classList.add('every-item');
    allDiv.appendChild(allNew);
    if (everyInput.value === "") {
        return null;
    }

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('check-btn');
    allDiv.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('trash-btn');
    allDiv.appendChild(deleteButton);

    wholeList.appendChild(allDiv);
}

function deleteCheck(e) {
    const item = e.target;
    const all = item.parentElement;

    if (item.classList[0] === "trash-btn") {

        all.classList.add("fall")
        all.addEventListener('animationend', function () {
            removeLocalAll(all);
            all.remove()
        })
    }
    if (item.classList[0] === "check-btn") {
        const all = item.parentElement;
        all.classList.toggle("completed")
    }

}

function filterAll(e) {
    const lists = wholeList.childNodes;
    for (let i = 0; i < lists.length; i++) {
        switch (e.target.value) {
            case "lists":
                lists[i].style.display = "flex";
                break;
            case "completed":
                if (lists[i].classList.contains('completed')) {
                    lists[i].style.display = "flex";
                } else {
                    lists[i].style.display = "none";
                }
                break;
            case "uncompleted":
                if (!lists[i].classList.contains('completed')) {
                    lists[i].style.display = "flex";
                } else {
                    lists[i].style.display = "none";
                }
                break;
        }
    }
}

function sevaLocalAll(all) {
    let lists;
    if (localStorage.getItem("lists") !== null) {
        lists = JSON.parse(localStorage.getItem("lists"));
    } else {
        lists = [];
    }
    lists.push(all);
    localStorage.setItem("lists", JSON.stringify(lists));
}

function getAll() {
    let lists;
    if (localStorage.getItem("lists") !== null) {
        lists = JSON.parse(localStorage.getItem("lists"));
    } else {
        lists = [];
    }
    lists.forEach(function (all) {
        createComponents(all);
    });
}

function removeLocalAll(all) {
    let lists;
    if (localStorage.getItem("lists") !== null) {
        lists = JSON.parse(localStorage.getItem("lists"));
    } else {
        lists = [];
    }
    const allIndex = all.children[0].innerText;
    lists.splice(lists.indexOf(allIndex), 1);
    localStorage.setItem("lists", JSON.stringify(lists));
}

