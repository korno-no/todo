const taskboard = document.querySelector('.taskboard')
const arrayOfBoardsNames = ['Backlog', 'In process', 'Done', 'Bin'];
const arrayOfBoards = []

let init = function(){
    arrayOfBoardsNames.forEach(type => {
        const taskBoardList = new TaskBoardList(type);
        taskBoardList.create();
    });
}
const addTaskBoard = new AddTaskBoard(document.forms[0], document.forms[0].taskName, document.querySelector('.add-task__button'));

//const addTaskBoard = new AddTaskBoard(document.forms[0], document.forms[0].taskName, document.querySelector('.add-task__button'));
init()
