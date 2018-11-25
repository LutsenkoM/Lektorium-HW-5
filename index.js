window.onload = function () {

  var input = document.getElementById('addText'),
    addButton = document.getElementById('add'),
    list = document.getElementById('todoList'),

    todoList = [];
    if (localStorage.getItem('todoList') != undefined) {
      todoList = JSON.parse(localStorage.getItem('todoList'));
      displayList();
    }

  addButton.onclick = AddDeal;

  function AddDeal() {
    var i = todoList.length,
      task = {};
      task.name = input.value;
      task.status = '';

    if (task.name !== '') {
      todoList[i] = task;
    }

    displayList();

    localStorage.setItem('todoList', JSON.stringify(todoList));

    input.value = "";

  }
  // CLick on specific li element
  list.addEventListener('click',function(e){

    var arrElem = document.querySelectorAll('li');
    var arrayElem = [];
    var btnIndex = document.querySelectorAll('button.del-task');
    var arraybtn = [];
    for (var i = 0; i < arrElem.length; i++){
      arrayElem.push(arrElem[i]);
      arraybtn.push(btnIndex[i]);
    }

    // Get element's index in array
    var t = e.target;
    var indexElem = arrayElem.indexOf(t);
    var indexBtn = arraybtn.indexOf(t);
    // Get element's index in array END

    if ( indexElem <0 && indexBtn >= 0 ) { // Махинации с индексом в масиве, в зависимости на что кликаем ( li или конкретно button)
      indexElem = indexBtn;
    } else if (indexElem >=0 && indexBtn < 0) {
      indexBtn = indexElem;
    }

    if (t.classList.contains("completed") && !action) {
      todoList[indexElem].status = '';
    } else {
      todoList[indexElem].status = 'completed';
    }
    // Delete specific li
    var action = t.getAttribute('data-action');
    if (action) {
      todoList.splice(indexBtn,1);
    }
    // Delete specific li end

    t.classList.toggle("completed");

    localStorage.setItem('todoList', JSON.stringify(todoList));

    displayList();

  });
  // CLick on specific li element END

  // Display task list
  function displayList() {
    var setDeal = '';

    for (var i=0; i < todoList.length; i++) {

      setDeal += '<li class="'+ todoList[i].status + '">' + todoList[i].name + '<button class="del-task" data-action="delete">Delete Task</button></li>';

    }

    list.innerHTML = setDeal ;
    document.getElementById("allTasks").innerHTML = todoList.length;

    document.getElementById("doneTasks").innerHTML = document.querySelectorAll('li.completed').length

  }


  // Display task list END

};
