const app = new ToDo();
/** vistas */

const FormNewTask = () => {
    let container = document.getElementById("my-app");
    let row = `
     <div class ="row">
         <div class = " col-6 shadow tg-white roundednt-2">
             <div class = "form nt-2">
                 <div class = "form-group">
                     <label for = "task"> Tarea: </label>
                     <Input type = "text" id = "task" class = "form-control"></Input>
                 </div>
                 <button type = "button" onClick="nueva_tarea()"
                 class = "btn btn-primary btn-block">
                     Guardar
                     </button>
             </div>
         </div>
     </div> `;
     container.innerHTML = row;
}
const PrintTaskActive = () => {
    // Muestra tareas activas
    let container = document.getElementById("my-app");
    let row = `<div class = 'row'>`
    let data = app.show_active();
    data.forEach(element => {
        row += `
        <div class = "col-sm-4 mt-2">
            <div class = "card shadow bg-white">
                <div class = "card-hearder">
                    <h5> Tarea ID ${element.id} </h5>
                </div>
                <div class = "card-body">
                    <p> ${element.task} </p>
                </div>
                <div class = "card-footer text-center">
                    <button type = "button" class = "btn btn-info">
                        Completar
                    </button>
                    <button type = "button" class = "btn btn-danger">
                        Eliminar
                    </button>
               </div>
            </div>   
        </div>
        `
        
    });
    row +='</div>'
    container.innerHTML=row
}
/** funciones */

function nueva_tarea(){
    let task = document.getElementById("task").value;
    app.new_task(task);
    PrintTaskActive();
    console.log(app.show_active());

}

/** inicio */


document.addEventListener("DOMContentLoaded", (success) => {
    console.log("Carga completa:  " + success);
    let nuevo = document.getElementById("new_task");
    let activas = document.getElementById("show_active");
    nuevo.addEventListener("click", () => {
        FormNewTask();
    });
    activas.addEventListener("clik",()=>{
        PrintTaskActive();
    });
       
    
}); 