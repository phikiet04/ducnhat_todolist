var todoList = new Array();
function addTodo() {
  let domTask = document.getElementById("task");
  let taskName = domTask.value;
  var todo ={
    taskName:taskName,
    timeBegin:"10-10-2019",
    timeEnd:"10-10-2019"
  };
  todoList.push(taskName);

  render()
  console.log(todoList);
}


function render() {
  let domTodoList = document.getElementById("todoList");
  let htmlTodoList = ''
  for (let i = 0; i < todoList.length; i++) {
    htmlTodoList += `<tr>` +
        `<th scope="row">` + 
        (i + 1) + 
        `</th>` +
        `<td>` + 
        todoList[i] +
        `</td>` +
        `<td><input type="checkbox" checked></td>
        <td class="primary"> <button onclick="editTask(${i})">sửa</button></td>
        <td class="danger"><button onclick="deleteTask(${i})">Xoá</button></td>
    </tr>`
  }

  domTodoList.innerHTML = ''
  domTodoList.innerHTML = htmlTodoList
}
function deleteTask(index) {
    todoList.splice(index, 1);
    render();
    console.log(todoList);
  }