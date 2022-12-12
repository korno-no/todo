class Task{
    constructor(text, status){
        this.text= text;
        this.status = status;
    }
    // methods
    static create(text, status){
        const task = new Task(text, status);
        task.ceepTasksInArr();
        task.showNewTask();
    }
    ceepTasksInArr(){
        tasksArray.push(this);
    }
    showNewTask(){
        const div = document.createElement('div');
        div.className = 'task';
        this.taskHtml = this.getTamplate();
        this.div = div;
        div.innerHTML= this.taskHtml;
        taskBoardList.appendChild(div);
        addTaskBoard.cleanInput();
        this.edit(div);

    }
    
    edit(div){
        const editBtn =  div.querySelector('.task__edit-button');
        editBtn.addEventListener('click', function(){
            div.style.backgroundColor = '#ff0000';
                })
    }
    changeStatus(){

    }
    delete(){

    }
    dragAndDrop(){

    }
    getTamplate(){
        return `
                    <p class="task__text">
                        ${this.text}
                    </p>
                    <button class="task__edit-button">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M18.5325 7.22254C18.825 7.51504 18.825 7.98754 18.5325 8.28004L17.16 9.65254L14.3475 6.84004L15.72 5.46754C16.0125 5.17504 16.485 5.17504 16.7775 5.46754L18.5325 7.22254ZM5.25 18.75V15.9375L13.545 7.64254L16.3575 10.455L8.0625 18.75H5.25Z"
                                fill="#fff"/>
                        </svg>
                    </button>
                `
         
    }
}