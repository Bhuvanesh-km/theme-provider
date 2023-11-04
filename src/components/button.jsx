import '../styles/style.css';
const ThemedButton =({label,action})=>{
    const onButtonClick=()=>{
        if(action){
            action();
        }
    }
    return(
        <>
        <button className="btn" onClick={()=>onButtonClick()}>{label}</button>
        </>
    )
}
export default ThemedButton;