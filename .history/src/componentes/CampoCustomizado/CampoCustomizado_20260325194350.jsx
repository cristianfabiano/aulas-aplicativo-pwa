import "./CampoCustomizado.css";

function CampoCustomizado({label, ...}) {

    return (
        <div className="campo-customizado__root">
            <label>Campo Customizado</label>
            <input className="campo-customizado__input" type="text" placeholder="Campo Customizado" />
        </div>
    );
}

export default CampoCustomizado;
