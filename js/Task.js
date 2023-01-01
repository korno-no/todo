class Task{
    constructor(text, type){
        this.text= text;
        this.type = type;
    }
    
    // methods
    static create(text, type){
        const task = new Task(text, type);
        task.createTask();
    }
    createTask(){
        this.div = document.createElement('div');
        this.div.className = 'task';
        //we have two types of tasks 
        //1 - new task, created via AddTaskBoard
        //2 - empty task, created via TaskBoardList. This task will appear, if TaskBoardList(column) is empty
        if( this.type === 'new'){
            this.div.className += ' task__not-empty'
            this.div.setAttribute('draggable', 'true'); 
            this.div.innerHTML += this.getTamplate(this.type);
            this.showNewTask();
        }
        else if(this.type === 'empty'){
            this.div.className += ' task__empty';
            this.div.innerHTML += this.getTamplate(this.type);
        }
    }
    showNewTask(){  // depend on type it work only for new type
        const taskBoardListBacklog = arrayOfBoards[0];
        taskBoardListBacklog.div.appendChild(this.div);
        arrayEmptyTasks.forEach(el => el.parentElement.children.length ===2? el.removeAttribute('hidden'): el.hidden = true );
        addTaskBoard.cleanInput();
        this.edit();
    }
    edit(){
        const taskText = this.div.children[0]
        const taskEditButon = this.div.children[1]
        const taskInput = this.div.children[2];
        const taskSaveButton = this.div.children[3]

        taskEditButon.addEventListener('click', function(){
            taskText.hidden = true;
            taskEditButon.hidden = true;
            taskInput.removeAttribute('hidden')
            taskSaveButton.removeAttribute('hidden')
            taskInput.value = this.text;
            this.save(taskInput, taskText, taskEditButon, taskSaveButton);
            }.bind(this))
    }
    save(taskInput, taskText, taskEditButon, taskSaveButton){
        taskSaveButton.addEventListener('click', function(){
            this.text = taskInput.value;
            taskText.innerHTML = this.text;
            taskText.removeAttribute('hidden');
            taskEditButon.removeAttribute('hidden');
            taskInput.hidden = true;
            taskSaveButton.hidden = true;
            this.edit();
        }.bind(this))
    }
    delete(){

    }
    getTamplate(type){
        if(type=== 'new'){
                return`<p class="task__text">
                            ${this.text}
                        </p>
                        <button class="task__edit-button">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M18.5325 7.22254C18.825 7.51504 18.825 7.98754 18.5325 8.28004L17.16 9.65254L14.3475 6.84004L15.72 5.46754C16.0125 5.17504 16.485 5.17504 16.7775 5.46754L18.5325 7.22254ZM5.25 18.75V15.9375L13.545 7.64254L16.3575 10.455L8.0625 18.75H5.25Z"
                                    fill="#fff"/>
                            </svg>
                        </button>
                        <input class="task__input" hidden>
                        <div class="task__save-button" hidden>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z" 
                                fill="#D0D0D0"></path>
                            </svg>
                        </div>`
        }
        else if(type=== 'empty'){
            return `<p class="task__text">${this.text}</p>`
        }
                
        
    };
}