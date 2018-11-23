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



  var arrElem = document.querySelectorAll('li');
  var arrayElem = [];
    for (var i = 0; i < arrElem.length; i++){
      arrayElem.push(arrElem[i]);
    }





  list.addEventListener('click',function(e){
    var t = e.target;
    var indexElem = arrayElem.indexOf(t);
    t.classList.toggle("completed");
      console.log(indexElem);


  });


  // // function changeStatus () {
  //
  //
  //   for (var i = 0; i < arrElem.length; i++){
  //     arrayElem.push(arrElem[i]);
  //     arrElem[i].addEventListener('click', function(e){
  //       var t = e.target;
  //       var indexElem = arrayElem.indexOf(t);
  //       // t.classList.toggle("completed");
  //       // todoList[indexElem].status = true;
  //
  //       // displayList();
  //
  //         console.log(todoList[indexElem])
  //       // displayList();
  //     });
  //   }
  // // }








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



// https://jsfiddle.net/59d0qaee/5/