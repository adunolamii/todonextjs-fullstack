import React from 'react'

const Todo = ({id, title, description, mongoId, completed, deleteTodo, completeTodo}) => {
  return (
    <div>
         
 <tr className="bg-white border-b dark:bg-gray-800 dark:border-green-700  "> 
<th scope="row" className="px-6 py-4 font-medium text-red-900 whitespace-nowrap dark:text-white">
   {id+1}
</th>
<td className={`px-6 py-4 ${completed ? "line-through" : ""}`}>
   {title}
</td>
<td className={`px-6 py-4 ${completed ? "line-through" : ""}`}>
   {description}
</td>
<td className="px-6 py-4">
   {completed ? "Completed" : "Pending"}
</td>
<td className="px-6 py-4">
<button onClick={()=>deleteTodo(mongoId)} className=' bg-red-800'>DElETE</button>
{completed ? "" :  <button onClick={()=>completeTodo(mongoId)} className=' bg-green-700'>DONE</button>}
</td>  
</tr> 

            
        
    </div>
  )
}

export default Todo




