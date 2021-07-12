function openConfig(){
    const configsect = document.getElementById("configSect");

    configsect.style.display = 'block';
}
function closeConfig(){
    const configSect = document.getElementById("configSect")
    window.onclick = (event) => {
        if(event.target == configSect)
            configSect.style.display = "none"
    }
    
   
}
function createTask(){
   let taskInput = document.getElementById('theTask');
        let taskLine = taskInput.value;
        taskInput.value = "";
        let todoList = document.getElementById('rectangleToDo');
        

        const div = document.createElement('div');
        todoList.appendChild(div);

        

        const p = document.createElement('p');
        p.innerHTML = taskLine;
        div.appendChild(p);

        let removeButton = document.createElement('img');
        removeButton.src = 'css/removeButton.png';
        div.appendChild(removeButton);
        removeButton.addEventListener("click",()=>{
            div.remove();
        }
        );

        let moveButton = document.createElement('img');
        moveButton.src = 'css/moveButton.png';
        div.appendChild(moveButton);
        
        moveButton.addEventListener("click",()=>{
            div.remove();
            let onDoing = document.getElementById('rectangleDoing');
        
            const divDoing = document.createElement('div');
            onDoing.appendChild(divDoing);

            const taskDoing = document.createElement('p');
            taskDoing.innerHTML = p.innerHTML;
            divDoing.appendChild(taskDoing);

            let doneButton = document.createElement("img");
            doneButton.src = "css/doneButton.png";
            divDoing.appendChild(doneButton);
            doneButton.addEventListener("click",() =>{
                divDoing.remove();

                let taskDone = document.getElementById("rectangleDone")

                let divDone = document.createElement('div');
                theDone.appendChild(taskDone);

                let lineDone = document.createElement('p');
                lineDone.innerHTML = taskDoing.innerHTML;
                divDone.appendChild(lineDone);
                let returnButton = document.createElement('img');
                returnButton.src = "css/sendback.png"
                divDone.appendChild(returnButton);

            }
            );
           
            
            
            let removebuttonDoing = document.createElement("img");
            removebuttonDoing.src = "css/removeButton.png";
            divDoing.appendChild(removebuttonDoing);
            
            removebuttonDoing.addEventListener("click",() =>{
                divDoing.remove();
            }
            );
        
        }
        );
        
}
function changeBack(){
    let imageValue = document.getElementById('backSelector').value;

        let bodyBackground = document.body;

        bodyBackground.style.background = "url("+imageValue+")";
       
}