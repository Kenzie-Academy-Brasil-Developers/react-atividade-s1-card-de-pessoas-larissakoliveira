import './style.css'

function Developer({name, age, country}){
    return(

        <div className = "userCard">
            <h2>Dev: {name}</h2>
            <p>Idade: {age}</p>
            <p>País: <span>{country}</span></p>
        </div>

    )
}

export default Developer