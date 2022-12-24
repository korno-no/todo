class TaskBoardList{
    constructor(type){
        this.type = type
    }

    create(){
        this.div = document.createElement('div');
        this.div.className = `taskboard__list taskboard__list--${this.type}`;
        this.div.innerHTML += this.getTamplate();
        taskboard.appendChild(this.div)
        arrayOfBoards.push(this)
        this.dragAndDrop()
    }
    getTamplate(){
               return`<h3 class="taskboars__header">${this.type}</h3>`
    }
    dragAndDrop(){
        
        this.div.addEventListener('dragstart', (evt) => {
            evt.target.classList.add('task__selected');
          })
        this.div.addEventListener('dragend', (evt) => {
            evt.target.classList.remove('task__selected');
        });
        
        this.div.addEventListener('dragover', (evt) => {
            // allow drop element here
            evt.preventDefault();
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
    
}