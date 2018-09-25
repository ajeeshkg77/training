var toDoList = [];
var savedList;


window.addEventListener("load", function() {
  getValues();
  if(savedList != null) {
    for(var i = 0; i < savedList.length; i++) {
      toDoList.push(savedList[i]);
    }
    display();
  } else {
    alert("The list is currently empty");
  }
});


  var item = document.querySelector('#item'),
      form = document.querySelector('form'),
      list = document.querySelector('#list'),

      itNode = document.querySelector('#itNode');

form.addEventListener('submit',function(e){
 e.preventDefault();
 if(item.value != "") {
  toDoList.push(new ToDoItem(item.value));
 store();
 item.value = "";
 display();
 } else {
  alert("Please enter anything");
 }

// ar jsonArray = JSON.parse(JSON.stringify(toDoList))

 // list.innerHTML += '<li>' + item.value + '</li>' ;
 // store();
 },false)



function checkItem(id) {
  // console.log(t.parentNode.firstChild.value);
  if(toDoList[id]!= null) {
    if(toDoList[id].status === true) {
    toDoList[id].status = false;
  } else {
    toDoList[id].status = true;
  }
  store();
  display();
  console.log("checked : "+id);
  }

  // if(t.classList.contains('checked')){
  //   t.parentNode.removeChild(t);
  // } else {
  //   t.classList.add('checked');
  // }
  // store();
}
function store() {
  localStorage.server = JSON.stringify(toDoList);

}
var c = "";
function display() {
  getValues();
  list.innerHTML = "";

  for(var i = 0; i < savedList.length; i++) {
    showNode(i);
  }
}
function showNode(i) {
  if(savedList[i].status === true) {c = " checked"} else {c = ""};
    var liNode = document.createElement("li");
    liNode.setAttribute("id", "itNode");
    liNode.innerHTML = "<input type='checkbox' "+c+"><input type='hidden' value='"+i+"'><span id='textSpan' onclick='checkItem("+i+")' class='"+c+"'>"+savedList[i].text+"</span><span onclick='remove("+i+")' class='delete'>Delete</span>";
    list.append(liNode);
}
function getValues() {
  savedList = JSON.parse(localStorage.getItem("server"));
}


function ToDoItem(itemValue) {
  this.text = itemValue;
  this.status = false;
}
function remove(id) {
  console.log(id);
  toDoList.splice(id, 1);
  store();
  display();
  console.log("removed : "+id);
}
function filter(f) {
  list.innerHTML = "";
  for(var i = 0; i < savedList.length; i++) {
    if(savedList[i].status === f) {
      showNode(i);
    }
  }
}
// function checkedItems()
// {
//   for(var i = 0; i < savedList.length; i++) {
//     if(savedList[i].status === true){
//       toDoList.push(savedList[i]);
//       display();
//     }
//       }
// }
// function clear(){
//   localStorage.clear(server);
// }
