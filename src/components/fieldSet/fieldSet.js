import React from 'react'

const FieldSet = (props) => {
    return (
        <fieldset>
            <legend>{props.legend}</legend>
            <div className="secao__formulario__grupo">
                <label htmlFor={props.idInput}>{props.label}</label>
                <input id="ganho-mes" type={props.type} value={props.value} onChange={props.onChange}/>
                {/* pode ser usado state and ref no value */}
            </div>
        </fieldset>
    )
}

export default FieldSet