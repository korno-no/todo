class AddTaskBoard{

    constructor(form, input, button){
        this.form = form,
        this.input = input,
        this.button = button,
        this.button.addEventListener('click', this.addTask.bind(this), false);
        
    }
    
    //methods
    addTask(e){
        e.preventDefault(); 
        Task.create(this.input.value, 'new');
    }
    cleanInput(){
        this.input.value = null
    }
}