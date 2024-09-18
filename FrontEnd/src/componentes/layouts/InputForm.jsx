// import Style
import '../../styles/index.css';
import '../../styles/InputForm.modulo.css';

function InputForm({NameClass, type, placeholder,}) {
    return (
        <>
         <input className={NameClass} type={type} placeholder={placeholder} />
        </>
    )
}

export default InputForm;