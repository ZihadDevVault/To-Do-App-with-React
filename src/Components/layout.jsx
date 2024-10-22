import classes from './task.module.css'

const Layout=(props)=>{
    return(
       
       <div className={classes.layout}>
           
        <div className={classes.main}>
            {props.children}
        </div>
       </div>
       
    )
}

export default Layout;