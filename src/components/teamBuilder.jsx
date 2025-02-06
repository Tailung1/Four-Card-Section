import "../shared/container.css"
import teamBuilderImage from "/images/icon-team-builder.svg"

export default function TeamBuilder() {
    return(
        <div className="box cyan">
            <h2>Team Builder</h2>
            <p>Scans our talent network to create the optimal team for your project</p>
            <img src={teamBuilderImage} alt="teamBuilderImage" />
        </div> 
    )
}