// 'use client'
// import Todo from "@/Component/Todo";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function Home() {
// //   const [formData, setformData] = useState({
// //     title:'',
// //     description:'',
// //   })

// // const [fetech, setFetch] = useState([])

// // const fetechTodos = async()=>{
// //   const response = await axios("/api");
// //   setFetch(response.data.admintodos)
// // }
// // // DELETE TODO
// //  const deleteTodo = async (id)=>{
// // const response = await axios.delete('/api',{
// //   params:{mongoId:id}
// // } )
// //  toast.success(response.data.msg);
// //  fetechTodos();
// // }

// // // UPDATE TODO
// // const  completeTodo = async (id)=>{
// // const response = await axios.put ("/api",{},{
// //   params:{
// //     mongoId:id
// //   }
// // })
// // toast.success(response.data.msg)
// // fetechTodos()
// // }

// // useEffect(() => {
// //   fetechTodos()
// // }, [])


//   const onChangeInput =(e)=>{
//     const name= e.target.name;
//     const value =e.target.value;
//     setformData(form =>({...form, [name]: value}))
//     console.log(formData)
//   }

//   const onSubmit =async(e)=>{
//     e.preventDefault()
//     // API CODEEEEE
//     // try {
//     //   const response = await axios.post('/api', formData)

//     //   toast.success(response.data.msg)
//     //   setformData({
//     //     title:'',
//     //     description:'',
//     //   })
//     //   await fetechTodos()

//     // } catch (error) {
      

//     //   toast.error('error occour')
//     // }
//   }}


// const page = () => {
//   return (
//     <div>
// <ToastContainer theme="dark"/>
//    <form onSubmit={onSubmit}>
//      <input onChange={onChangeInput} name="title" value={formData.title} className=" w-full" type="text"  placeholder="Enter Title"/>
//      <textarea onChange={onChangeInput} name='description' value={formData.description} className=" w-full"  placeholder="Enter discription"/>
//      <button className=" w-full bg-orange-700 m-auto text-white rounded">ADD TODO</button>
//    </form>      

// {/* <div class="relative overflow-x-auto">
//     <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//                 <th scope="col" class="px-6 py-3">
//                     Product name
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Color
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Category
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Price
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
           
//             <tr class="bg-white dark:bg-gray-800">
//                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Magic Mouse 2
//                 </th>
//                 <td class="px-6 py-4">
//                     Black
//                 </td>
//                 <td class="px-6 py-4">
//                     Accessories
//                 </td>
//                 <td class="px-6 py-4">
//                     $99
//                 </td>
//             </tr>
//         </tbody>
//     </table>
// </div> */}

//     </div>
//   )
// }









'use client'
import Todo from "@/Component/Todo";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [formData, setformData] = useState({
    title:'',
    description:'',
  })

const [fetech, setFetch] = useState([])

const fetechTodos = async()=>{
  const response = await axios("/api");
  setFetch(response.data.admintodos)
}
// DELETE TODO
 const deleteTodo = async (id)=>{
const response = await axios.delete('/api',{
  params:{mongoId:id}
} )
 toast.success(response.data.msg);
 fetechTodos();
}

// UPDATE TODO
const  completeTodo = async (id)=>{
const response = await axios.put ("/api",{},{
  params:{
    mongoId:id
  }
})
toast.success(response.data.msg)
fetechTodos()
}

useEffect(() => {
  fetechTodos()
}, [])


  const onChangeInput =(e)=>{
    const name= e.target.name;
    const value =e.target.value;
    setformData(form =>({...form, [name]: value}))
    console.log(formData)
  }

  const onSubmit =async(e)=>{
    e.preventDefault()
    // API CODEEEEE
    try {
      const response = await axios.post('/api', formData)

      toast.success(response.data.msg)
      setformData({
        title:'',
        description:'',
      })
      await fetechTodos()

    } catch (error) {
      

      toast.error('error occour')
    }
  }
  return (
   <>
  <ToastContainer theme="dark"/>
  <form onSubmit={onSubmit}>
    <input onChange={onChangeInput} name="title" value={formData.title} className=" w-full" type="text"  placeholder="Enter Title"/>
    <textarea onChange={onChangeInput} name='description' value={formData.description} className=" w-full"  placeholder="Enter discription"/>
    <button className=" w-full bg-orange-700 m-auto text-white rounded">ADD TODO</button>
  </form>

  

  

{/* <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto"> */}
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    ID
                </th>
                <th scope="col" className="px-6 py-3">
                    TITLE
                </th>
                <th scope="col" className="px-6 py-3">
                    DESCRIPTION
                </th>
                <th scope="col" className="px-6 py-3">
                    STATUS
                </th>
                <th scope="col" className="px-6 py-3">
                    ACTION
                </th>
            </tr>
        </thead>
        <tbody>
     
     {
      fetech.map((item, index)=>{
        return <Todo key={index} id={index} title={item.title} description={item.description} complete={item.isCompleted} mongoId={item._id} deleteTodo={deleteTodo}  completeTodo={completeTodo}/>
      })
     }
       
        </tbody>
    </table>
{/* </div> */}

   </>
  );
}
