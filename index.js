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
      task.status = false;

    if (task.name !== '') {
      todoList[i] = task;
    }

    // console.log(setDeal);

    displayList();

    localStorage.setItem('todoList', JSON.stringify(todoList));

    input.value = "";

  }


  list.addEventListener('click',function(e){
    var t = e.target;
    t.classList.toggle("completed");
    // displayList();
    todoList[1].status = true;
    console.log(todoList)

  });






  function displayList() {
    var setDeal = '';

    for (var i=0; i < todoList.length; i++) {

      //
      // var allElements = document.getElementsByTagName("li");
      // var ElemetsLi = allElements[i];
      //
      //
      //
      //
      //

      // if ( allElements.classList.contains("completed") ) {
      //   todoList[i].status = true;
      // }

      console.log(      document.querySelectorAll('#todoList li'))
      setDeal += '<li>' + todoList[i].name+ '  ' + todoList[i].status + '</li>';



    }

    list.innerHTML = setDeal ;


  }




};



