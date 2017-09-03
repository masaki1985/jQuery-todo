$(function() {

    let toDoListData = [
        {toDo: "宿題", isCompleted: false},
        {toDo: "睡眠", isCompleted: false},
        {toDo: "食事", isCompleted: false}        
    ]
    let toDoInput = $("#toDoInput");
    let addBtn = $("#addBtn");
    let toDoUl = $("#toDoUl");
    
    init();

    function init() {
        toDoListData.forEach(element =>  {
            if (element["isCompleted"]) {
                addToDo(element["toDo"], true);
            }
            else {
                addToDo(element["toDo"], false);                
            }
        });
    }

    function load() {
        $(".toDo").remove();
        init();
    }

    function addToDo(value, isCompleted) {
        let toDoLi = $("<li></li>");
        toDoLi.addClass("toDo");

        let checkbox = $("<input>");
        checkbox.attr("type", "checkbox");
        checkbox.addClass("check");
        checkbox.on("click", (e) => check(e));
        if(isCompleted) {
            checkbox.attr("checked", true);
        }

        let span = $("<span>" + value + "</span>")
        if(isCompleted) {
            span.addClass("completed");
        }
        let delBtn = $("<button>delete</button>");

        delBtn.attr("type", "button");
        delBtn.addClass("delBtn");
        delBtn.on("click", (e) => del(e));

        checkbox.appendTo(toDoLi);
        span.appendTo(toDoLi);
        delBtn.appendTo(toDoLi);

        toDoLi.appendTo(toDoUl);
    }

    addBtn.click(() => {
        toDoListData.push({toDo: toDoInput.val(), isCompleted:false});
        
        addToDo(toDoInput.val(), false);

        toDoInput.val("");
    });

    function check(e) {
        let checkList = $(".check");
        for(let i = 0; i < checkList.length; i++) {
            if (checkList[i] == e.toElement) {
                toDoListData[i]["isCompleted"] = !toDoListData[i]["isCompleted"];
            }
        }
        load();
    }

    function del(e) {
        let delBtn = $(".delBtn");
        for(let i = 0; i < delBtn.length; i++) {
            if (delBtn[i] == e.toElement) {
                toDoListData.splice(i, 1);
            }
        }
        load();
    }

});