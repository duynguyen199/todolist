export class ToDoList {
    constructor() {
        this.tdList = [];
    }
    addToDo(todo) {
        this.tdList.push(todo);
    }
    removeTodo(index) {
        this.tdList.splice(index, 1)
    }
    renderTodo() {
        let content = "";
        //duyen mang bat dau tu hsn tu cuoi cung cua mang
        content = this.tdList.reduceRight((tdContent, item, index) => {
            tdContent += `
                <li>
                    <span>${item.textTodo}</span>
                    <div class="buttons">

                        <button class="remove" data-index="${index}" data-status="${item.status}" onclick="deleteToDo(event)">
                            <i class="fa fa-trash"></i>
                        </button>

                        <button class="complete" data-index="${index}" data-status="${item.status}" onclick="completeToDo(event)">
                            <i class="fa fa-check-circle"></i>  
                            <i class="fa fa-check-circle"></i>                        
                        </button>
                    
                    </div>
                </li>
            `;
            return tdContent;
        }, '');
        return content;
    }
    sortToDoList(isDES){
        this.tdList.sort((todo,nextToDo)=>{
            const textA = todo.textTodo.toLowerCase();
            const textB = nextToDo.textTodo.toLowerCase();
            //ascending 
            return textB.localeCompare(textA);
        });
        if(isDES){
            this.tdList.reverse();
        }
    }

}