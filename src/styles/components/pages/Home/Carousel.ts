import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  margin-top: 9px;
  margin-bottom: 4px;

  @media (min-width: 768px) {
    margin-top: 65px;
  }

  @media (min-width: 960px) {
    margin-bottom: 60px;
    margin-top: 62px;
  }

  aside {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: -1;
    position: absolute;

    button {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      z-index: 4;
      position: relative;
    }
  }

  #items-wrapper {
    width: 100vh;
  }

  #items {
    display: flex;
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }

    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .item {
    width: 421.4px;
    margin: 0.5  3px;
    flex: none;

    scroll-snap-align: center;

    @media (min-width: 768px) {
      scroll-snap-align: start;
      padding-left: 20px;
      margin: 0;
      width: 410px;
    }

    @media (min-width: 1218px) {
      width: 420px;
    }

    :first-child {
      margin-left: 20px;
    }

    :last-child {
      padding-right: 20px;
    }

    figure {
      height: 140px;
      overflow: hidden;
      position: relative;
      border-radius: 5px;

      @media (min-width: 768px) {
        height: 200px;
      }

      @media (min-width: 960px) {
        border-radius: 3px;
      }

      img {
        left: 0;
        top: 0;
        display: block;
        width: auto;
        height: 100%;
        object-fit: fill;
        transform: none;
      }
    }
  }
`;
