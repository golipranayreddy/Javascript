
console.log("working")
class task  {

    constructor(task_name, isdone)
    {
        console.log(task_name);
        this.task_name = task_name;
        this.date = new Date();
        this.isdone = false;
        this.task_id = 0;
    }

    toString(){
        let html_tags = "<div class='list-item'>";
        html_tags += "<li class='list-group-item'>";
        html_tags += "Task name : "
        html_tags += this.task_name;
        html_tags += "   ---------->   ";
        html_tags += "Date & Time : ";
        html_tags += this.date;
        html_tags += `<button id="remove-button" style="margin-left: 100px;" onclick="removeTask(${this.task_id})" >Remove</button>`;
        // html_tags += '>Remove</button>';
        html_tags += '</li>';
        html_tags += '</div>';
        return html_tags;
    }

}

class ToDoList{
    constructor()
    {
        this.task_list = []
        this.count = 0;
    }

    addTask(task_value){
        console.log("task added succesfully");
        this.task_list.push(task_value);
        this.count = this.count + 1;
        task_value.task_id = this.count;
        render();
    }


    remove(task_id){
        // console.log(typeof(task_id))
        console.log("removed task_id =" , task_id)
        this.task_list = this.task_list.filter((each) => {
            // console.log(each,task_id
            if(each.task_id != task_id){
                console.log(typeof(each.id), typeof(task_id))
                // console.log(each,task_id)
        
                return each;
            }
        })

        console.log("removed " , this.task_list)
        render();
    }


  
    
}

let ToDo_obj = new ToDoList();

function removeTask(task){
    ToDo_obj.remove(task);
}

document.querySelector(".task-input-form").onsubmit = (e) => {
    e.preventDefault();
    console.log("on submit clicked")

    const input = document.querySelector("#task-input").value;
    console.log(input);
    let task_value = new task(input, false);
    ToDo_obj.addTask(task_value);
    console.log("yes task object is send");
   
    
}

function render() {
    console.log("task list has been upaded");
    const ul_tag = document.querySelector("#tasks");
    ul_tag.innerHTML = "";
    if(ToDo_obj.task_list.length == 0) ul_tag.innerHTML = "No tasks yet";
    console.log(ToDo_obj.task_list)
    ToDo_obj.task_list.forEach( (task) => {
     
        ul_tag.innerHTML = ul_tag.innerHTML + task.toString();

        
    });
}