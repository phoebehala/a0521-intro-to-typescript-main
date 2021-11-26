import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

let color = 'red';


// color = 'red'

interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then((response) => {
  const todo = response.data as Todo

  const id = todo.id
  const title = todo.title
  const completed = todo.completed

  const resp = logTodo(id,title,completed)
  console.log("Number is..... ", resp);
  
})

const logTodo = (id:number, title:string, completed:boolean):number => {
  console.log(`
    Todo with ID: ${id}
    Has a title of ${title}
    Is is done? ${completed}
    `)

    return 5
}
