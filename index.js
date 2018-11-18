window.onload = function () {

    var input = document.getElementById('addText'),
        addButton = document.getElementById('add'),
        list = document.getElementById('todoList'),
        todoList = [];
        if (localStorage.getItem('todoList') != undefined) {
            todoList = JSON.parse(localStorage.getItem('todoList'));
            displayList();
        }

    addButton.onclick = function () {
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
    };

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

};