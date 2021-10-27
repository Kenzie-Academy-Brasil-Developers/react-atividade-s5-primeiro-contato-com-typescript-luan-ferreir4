import { CardContainer } from "../styles/CardStyle"

interface CardI {
    name: string;
    age: number;
    hobby: string;
}

export const Card = ({name, age,hobby}: CardI) => {
    return(
        <CardContainer>
            <h3>{name}</h3>
            <p>Idade:</p>
            <p className="value">{age}</p>
            <p>Hobby:</p>
            <p className="value">{hobby}</p>
        </CardContainer>
    )
}