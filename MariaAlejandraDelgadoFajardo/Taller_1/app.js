
document.getElementById("addTaskBtn").onclick = function () {
    RecibirTarea();
}

function RecibirTarea() {
    let tarea = document.getElementById("taskInput").value;
    let div = document.getElementById("taskList");

    if (tarea != "") {
        let nuevaTareaDiv = document.createElement('div');
        nuevaTareaDiv.className = 'task';
        nuevaTareaDiv.innerHTML = `
                ${tarea}
                
                <button class="delete"> <i class="fa-solid fa-trash" style="color: #940000;"></i></button>
                `;

        div.appendChild(nuevaTareaDiv);

        document.getElementById("taskInput").value = "";
    } else {
        alert("Input vacio");
    }

}

document.getElementById("taskList").onclick = function (event) {
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }
}

