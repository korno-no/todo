class TaskBoardList{
    
    constructor(type){
        this.type = type,
        this.isEmpty = true
    }

    //methods
    //create each column 
    async create(i){
        this.div = document.createElement('div');
        this.div.className = `taskboard__list taskboard__list--${this.type}`;
        this.div.innerHTML += this.getTamplate('header');
        await this.createEmptyTask(i);   //wait for an empty task to be created
        taskboard.appendChild(this.div);
        arrayOfBoards.push(this);
        this.dragAndDrop();
    }
    //there is 1 empty task in each column if this column is empty
    createEmptyTask(i){
        this.emptyTask = new Task(emptyTextArr[i], 'empty')
        this.emptyTask.createTask();
        this.div.appendChild(this.emptyTask.div);
        arrayEmptyTasks.push(this.emptyTask.div);
    }
    dragAndDrop(){
        let firstThis = null;
        this.div.addEventListener('dragstart', (evt) => {
            evt.target.classList.add('task__selected');
          })
        this.div.addEventListener('dragend', (evt) => {
            evt.target.classList.remove('task__selected');
        });
        
        this.div.addEventListener('dragover', (evt) => {
            // allow drop element here
            evt.preventDefault();
            arrayEmptyTasks.forEach(el => el.parentElement.children.length ===2? el.removeAttribute('hidden'): el.hidden = true);
            // find the element being moved 
            const activeElement = document.querySelector(`.task__selected`);
            const currentElement = evt.target;
            const isMoveableInside = activeElement !== currentElement && currentElement.classList.contains(`task`);
            const isMoveableOutside = activeElement !== currentElement && currentElement.classList.contains(`taskboard__list`);
            if (!isMoveableInside && !isMoveableOutside) {
                return
            }
            if(isMoveableInside){
                const nextElement = (currentElement === activeElement.nextElementSibling) ?
                currentElement.nextElementSibling :
                currentElement;
                this.div.insertBefore(activeElement, nextElement);
            }
            else if(isMoveableOutside){
                
                this.div.appendChild(activeElement)
            }
        });
    }
    getTamplate(type){
        if(type === 'header') return`<h3 class="taskboars__header">${this.type}</h3>`
    }
}