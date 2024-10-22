import classes from './task.module.css';
import { useState } from 'react';

const DisplayDatas=({task,setTask,setTesk,visibilty,setVisibility})=>{
let [tablelis,setTablelis]=useState(false)
    const filtrdata=(task)=>{
        if(visibilty=="completed"){
            return task.filter((item)=>{return (item.isComplete)})
        }    
        if(visibilty=="incompleted"){
            return task.filter((item)=>{return (!item.isComplete)})
        }    
    
        return task
    }
    let filters=filtrdata(task)
    
    const toggole=(id)=>{
        const newTask=filters.map((item)=>{
            if(item.id==id){
                item.isComplete=!item.isComplete;
            }
            return item;
        })
 
        setTask(newTask);
         

    }
      
        



    const displayData=(filters)=>{
        return(
            filters.map((item)=>{
                return(
                    <div className="classes.listgroup">
                    <input type='checkbox' Checked="checked" onClick={()=>{toggole(item.id)}}  className={`${classes.Checkbtn} ${item.isComplete?classes.display:''}`}/>
                    <li key={item.id}  className={`${classes.listitem} ${item.isComplete?classes.lineStyle:''}`}><h2>{item.text}</h2></li>
                    </div>)
            })
        )
    }
    const displayTableData=(filters)=>{
        return(
            filters.map((item)=>{
                return(
                    <>

                        <tr style={{margin:'5px'}}>
                    <td className={item.isComplete?classes.success:''}>
                    <input type='checkbox' onClick={()=>{toggole(item.id)}}  className={`${classes.Checkbtn} ${item.isComplete?classes.display:''}`}/>
                    </td>
                    
                    <td key={item.id} className={item.isComplete?classes.lineStyle:''}><h2>{item.text}</h2></td>
                   <td>{item.taskDate.getTime()}</td>
                   <td>
                    {
                        <button className={`${classes.conditionbutton} ${!item.isComplete?classes.running:''}`}>{!item.isComplete?'Running':'Completed'}</button>
                    }
                    
                    
                   
                   </td>

                    
                    </tr>
                    </>
                    )
            })
        )
    }


 
   
   
     
       
    const Tablecomp=()=>{
        return(
            <>

        <table className={classes.table} cellSpacing='0'>
                <thead className={classes.thead}>
            <tr>
                <th>Select</th>
                <th>Task</th>
                <th>Time</th>
                <th>Condition</th>
            </tr>
                </thead>
                <tbody className={classes.tbody}>
            {displayTableData(filters)}
            </tbody>
        </table>
   

            </>
        )
    }

    const ListCom=()=>{
       
   return(
    <ul className={classes.list}>
    {displayData(filters)}
     </ul>
    
    )
}


    function generateHander(text){
        setVisibility(text)
    }
  
const tableView=()=>{

    setTablelis(true)
 
}
    

const Listview=(filters)=>{
    setTablelis(false)
       
    
}



    return(
        <div>

        <div className={classes.tablebtn}>
        <div>
            <button onClick={()=>generateHander('all')}>All</button>
            <button onClick={()=>generateHander('completed')}>Completed</button>
            <button onClick={()=>generateHander('incompleted')}>Incompleted</button>
        </div>
        <div>
            <button onClick={()=>tableView(filters)}>Table view</button>
            <button onClick={()=>Listview(filters)}>List View</button>
           
        </div>
        <div>
            <button onClick={()=>generateHander('all')}>All</button>
            <button onClick={()=>generateHander('completed')}>Completed</button>
            <button onClick={()=>generateHander('incompleted')}>Incompleted</button>
        </div>
        </div>

        {filters.length>0?<div>{tablelis?<Tablecomp/>:<ListCom/>}</div>:<div><p>No Data Found</p></div>}

            

       
   
        </div>
    )
}

export default DisplayDatas;