import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import React from 'react';

const FullScreenWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FullScreenLoader = () => {

    const modalBackdropRoot = document.querySelector('#modal-root') as HTMLDivElement;

    return createPortal(
        <FullScreenWrapper>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </FullScreenWrapper>, modalBackdropRoot
    );
};