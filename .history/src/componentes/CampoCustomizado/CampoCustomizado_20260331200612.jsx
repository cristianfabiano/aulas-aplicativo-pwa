import "./CampoCustomizado.css";

function CampoCustomizado({label, ...props}) {
    return (
        <div className="campo-customizado__root">
            <span>{label}</span>
            <input className="campo-customizado__input"{...props} type="text" placeholder="Precione Enter para" />
        </div>
    );
}

export default CampoCustomizado;
