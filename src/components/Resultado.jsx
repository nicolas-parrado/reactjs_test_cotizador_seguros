import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: #00939f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({ cotizacion }) => {
    const nodeRef = React.useRef(null);
    return cotizacion === 0 ? (
        <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
    ) : (
        <ResultadoCotizacion>
            <TransitionGroup component="div" className="resultado">
                <CSSTransition
                    key={cotizacion}
                    classNames="resultado"
                    timeout={{ enter: 500, exit: 500 }}
                    nodeRef={nodeRef}
                >
                    <TextoCotizacion ref={nodeRef}>
                        El total es: $ <span>{cotizacion}</span>
                    </TextoCotizacion>
                </CSSTransition>
            </TransitionGroup>
        </ResultadoCotizacion>
    );
};

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired,
}

export default Resultado;
