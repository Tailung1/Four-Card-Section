import "../shared/container.css"
import karmaImage from "/images/icon-karma.svg"

export default function Karma() {
    return(
        <div className="box cyan">
        <h2>Karma</h2>
        <p>Regularly evaluates our talent to ensure quality</p>
        <img src={karmaImage} alt="karmaImage" />
    </div> 
    )
}