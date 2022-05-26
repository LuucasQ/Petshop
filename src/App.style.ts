import styled, { css } from "styled-components";

export const Container = styled.div`
    ${() => css`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    `}
`

export const Header = styled.div`
    ${() => css`
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--tertiary-color);
        @media (max-width: 767px){
            padding: 24px;
            border-radius: 0 0 16px 16px;
            p {
                margin-top: 16px;
                max-width: 210px;
                text-align: center;
                text-decoration: 1px underline;
            }
        }

        @media (min-width: 768px){
            padding: 24px;
            border-radius: 0 0 24px 24px;
            p {
                margin-top: 24px;
                font-size: 24px;
                max-width: 300px;
                text-align: center;
                text-decoration: 1px underline;
            }
        }
    `}
`

export const ContentMap = styled.div`
    ${() => css`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        @media (max-width: 767px){
            padding: 24px;

            p {
                margin-bottom: 4px;
            }

            input {
                border: 1px solid var(--tertiary-color);
                border-radius: 8px;
                padding: 8px 16px;
                outline: none;
                
            }

            h1 {
                margin: 24px 0 16px;
            }

            .map {
                margin-top: 32px;
                height: 300px;
                > div {
                    border-radius: 8px;
                }
            }
        }

        @media (min-width: 768px) and (max-width: 1365px){
            padding: 32px 64px;

            p {
                margin-bottom: 4px;
            }

            input {
                border: 1px solid var(--tertiary-color);
                border-radius: 8px;
                padding: 8px 16px;
                outline: none;
                
            }

            h1 {
                margin: 24px 0 16px;
            }

            .map {
                margin-top: 32px;
                height: 300px;
                > div {
                    border-radius: 8px;
                }
            }
        }

        @media (min-width: 1366px) {
            flex-direction: row;
            padding: 64px;

            .imagePetshop {
                width: 50%;
                margin-right: 32px;
                img {
                    width: 100%;
                    border-radius: 16px;
                }
            }

            p {
                margin-bottom: 4px;
            }

            input {
                border: 1px solid var(--tertiary-color);
                border-radius: 8px;
                padding: 8px 16px;
                outline: none;
                
            }

            h1 {
                margin: 24px 0 16px;
            }

            .map {
                margin-top: 32px;
                height: 330px;
                > div {
                    border-radius: 8px;
                }
            }
        }
    `}
`
