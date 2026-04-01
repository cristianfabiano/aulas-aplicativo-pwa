import "./CampoCustomizado.css";

function CampoCustomizado(){

    return (
    <div className="campo-customizado__root">
        <label>Campo Customizado</label>
        <input className="campo-customizado__input" type="text" placeholder="Campo " />
    </div>
    );
}

export default CampoCustomizado;
