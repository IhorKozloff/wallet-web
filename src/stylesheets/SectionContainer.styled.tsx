import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    &.header-section {
        padding: 15px 20px;
        margin: 0 auto;
        background-color: var(--white);
        max-width: 1280px;
    }
`;
export const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    // background-color: rgba(253, 148, 152, 0.1);

    &.header-container {
        background-color: var(--white);
    }

    @media screen and (min-width: 320px) {
        width: 280px;
    }
    @media screen and (min-width: 768px) {
        width: 704px;
    }
    @media screen and (min-width: 1280px) {
        width: 715px;
    }
`;