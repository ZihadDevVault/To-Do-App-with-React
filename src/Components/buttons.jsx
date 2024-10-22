const Button=(props)=>{

    let varient={
        All:{
            color:"#fff",
            backgroundColor:'green',
        },
        Incomplete:{
            color:"#000",
            backgroundColor:'yellow',
        },
        Complete:{
            color:"#000",
            backgroundColor:'red',
        },
        adnew:{
            color:'#fff',
            backgroundColor:'aqua'
        }
    }

    let btn={
       borderRadius:'10px',
        marginLeft:'5px',
        fontSize:'16px',
        border:'0px solid'
    }
    let padds={padding:props.padd};
let type=props.types;
    let vari=varient.type;
    return(
        <>
        <button style={{...btn,...vari,...padds}} onClick={props.click}>{props.text}</button>
        </>
    )
}

export default Button;