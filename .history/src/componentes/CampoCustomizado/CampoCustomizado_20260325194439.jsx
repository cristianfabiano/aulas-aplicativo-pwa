import "./CampoCustomizado.css";

function CampoCustomizado({label, ...props}) {

    return (
        <div className="campo-customizado__root">
            <label>Campo Customizado</label>
            <input className="campo-customizado__input"{...propss} type="text" placeholder="Campo Customizado" />
        </div>
    );
}

export default CampoCustomizado;
