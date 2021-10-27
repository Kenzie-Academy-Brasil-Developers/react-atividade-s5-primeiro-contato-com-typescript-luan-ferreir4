import styled from "styled-components";

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    label{
        line-height: 20px;
        margin: 15px 0 0;
    }
    input{
        width: 60%;
        height: 27px;
        padding: 15px 8px;
        margin: 8px auto;
        border: 1px solid lightblue;
        border-radius: 8px;
        caret-color: #28C7FF;
        outline: none;
    }
    @media (min-width: 1024px) {
        input{
            width: 84%;
        }
    }
`;