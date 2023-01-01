const taskboard = document.querySelector('.taskboard');


let init = function(){
    arrayOfBoardsNames.forEach((type, i) => {
        const taskBoardList = new TaskBoardList(type);
        taskBoardList.create(i);
    });
}
const addTaskBoard = new AddTaskBoard(document.forms[0], document.forms[0].taskName, document.querySelector('.add-task__button'));
init()
