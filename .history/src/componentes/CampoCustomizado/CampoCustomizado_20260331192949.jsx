import "./CampoCustomizado.css";

function CampoCustomizado({label, ...props}) {
    return (
        <div className="campo-customizado__root">
            <span>{label}</label>
            <input className="campo-customizado__input"{...props} type="text" placeholder="Precione Enter" />
        </div>
    );
}

export default CampoCustomizado;
