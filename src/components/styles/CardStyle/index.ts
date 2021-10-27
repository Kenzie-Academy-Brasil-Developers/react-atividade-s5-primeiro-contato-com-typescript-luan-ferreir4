import styled from "styled-components";

export const CardContainer = styled.div`
    width: 220px;
    max-width: 250px;
    height: 220px;
    padding: 10px;
    margin: 20px 10px;
    background-color: #313131;
    color: white;
    border: 3px solid white;
    border-radius: 10px;
    box-shadow: 0px 0px 8px 3px  #8E9192;
    text-align: center;
    transition: 0.1s;

    &:hover{
        transform: translateY(-10px);
        transition: 0.1s;
    }
    h3{
        margin-bottom: 8px;
        font-weight: 600;
    }
    p{
        margin: 8px 0 10px;
    }
    .value{
        word-break: break-all;
        max-width: inherit;
        color: #888888;
    }
`;