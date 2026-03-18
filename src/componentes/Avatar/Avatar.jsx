import "./Avatar.css";

const Avatar = ({ nome }) => {
    const primeiraLetra = nome.split(" ").map(item => item[0]).join("").toUpperCase();
    return <div className="avatar_root">{primeiraLetra}</div>;
};

export default Avatar;