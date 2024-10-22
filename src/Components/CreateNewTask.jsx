import {useState} from 'react';
import shortid from 'shortid';
import DisplayDatas from './display';
import Addtask from './Addtask';
import Layout from './layout';

const CreateNewTask=()=>{
    let [text,setText]=useState('')
    let [task,setTask]=useState([]);
    let [visibilty,setVisiblity]=useState('')

    

   
    return(
        <>
<Layout>
       <Addtask text={text} setTask={setTask} task={task} setText={setText}/>
       <DisplayDatas task={task} setTask={setTask} setTesk={setText} visibilty={visibilty} setVisibility={setVisiblity}/>
        </Layout>
       </>
    )
}

export default CreateNewTask;