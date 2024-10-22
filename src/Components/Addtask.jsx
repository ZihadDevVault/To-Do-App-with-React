import shortid from "shortid";
import Layout from "./layout";
import Button from './buttons';
import classes from './task.module.css';
const Addtask=({text,setTask,task,setText})=>{

    const creasteTask=(text)=>{
        let data={
            text,
            isComplete:false,
            taskDate:new Date(),
            id:shortid.generate(),
        }

        setTask([data,...task])
    }


    


    return(
        <div className={classes.inputbox}>
            <h1 style={{paddingBottom:'50px'}}>Todo App</h1>
            <div>
             <input type="text" PlaceHolder="Write Your Task" value={text} onChange={(e)=>{return(setText(e.target.value))}} style={{padding:'10px', border:'0px solid', borderRadius:'5px',backgroundColor:'#ddd' ,color:'#333',fontSize:'18px' }}/>
             <Button click={()=>{
           if(text){
            creasteTask(text)
            setText('')
           }
           else{
            alert("Invalid Data");
           }
        }} varient='adnew' type='adnew' padd='10px' text='Create Task'></Button>
            </div>
        <br/>
      
        </div>
    )
}

export default Addtask;