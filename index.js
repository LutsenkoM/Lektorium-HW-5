window.onload = function () {

    var input = document.getElementById('addText'),
        addButton = document.getElementById('add'),
        list = document.getElementById('todoList'),
        todoList = [],
        todoListChecked = [];
        if (localStorage.getItem('todoList') != undefined) {
            todoList = JSON.parse(localStorage.getItem('todoList'));
            displayList();
        }
        if (localStorage.getItem('todoListChecked') != undefined) {
            todoList = JSON.parse(localStorage.getItem('todoListChecked'));
            displayList();
        }

    addButton.onclick = AddDeal;

    function AddDeal() {

        var i = todoList.length,
            deal = {};
            deal.name = input.value;
            deal.status = false;

        if (deal.name !== '') {
            todoList[i] = deal;
        }

        console.log(todoList);

        displayList();

        localStorage.setItem('todoList', JSON.stringify(todoList));

        input.value = "";

    }

    function displayList() {
        var setDeal = '';
        for (var i=0; i < todoList.length; i++) {
            if (todoList[i].status === false) {
                setDeal += "<input type='checkbox'>"
            } else {
                setDeal += "<input type='checkbox' checked>"

            }

            setDeal += todoList[i].name + "<br/>";

        }

        list.innerHTML = setDeal + "<br/>";
        document.getElementById("allDeal").innerHTML = todoList.length;

    }

    var checkBox = document.getElementsByName("input");

  function myFunction() {
    var x = document.getElementById("myCheck").checked;
    document.getElementById("demo").innerHTML = x;
  }




};