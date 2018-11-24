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
    for (var i = 0; i < arrElem.length; i++){
      arrayElem.push(arrElem[i]);
    }

    // Get element's index in array
    var t = e.target;
    var indexElem = arrayElem.indexOf(t);
    // Get element's index in array END

    if (t.classList.contains("completed")) {
      todoList[indexElem].status = '';
    } else {
      todoList[indexElem].status = 'completed';
    }













    var btnIndex = document.querySelectorAll('button.del-task');
    var arraybtn = [];
    for (var j = 0; j < btnIndex.length; j++){
      arraybtn.push(btnIndex[j]);
    }

    var indexBtn = arraybtn.indexOf(t);
    var action = t.getAttribute('data-action');
    if (action) {
      todoList.splice(todoList.indexOf(indexBtn),1);
    }


    t.classList.toggle("completed");

    localStorage.setItem('todoList', JSON.stringify(todoList));

  });





  // CLick on specific li element END

  // Display task list
  function displayList() {
    var setDeal = '';

    for (var i=0; i < todoList.length; i++) {

      setDeal += '<li class="'+ todoList[i].status + '">' + todoList[i].name + '<button class="del-task" data-action="delete">Delete Task</button></li>';

    }

    list.innerHTML = setDeal ;

  }
  // Display task list END

};
