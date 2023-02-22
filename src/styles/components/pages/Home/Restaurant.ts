import styled from 'styled-components';

interface IPropsContainer {
  isFamousContainer?: boolean;
}

export const Container = styled.div<IPropsContainer>`
  padding: 8px 0;
  width: 100%;

  @media (min-width: 772px) {
    padding: ${props => (props.isFamousContainer ? '8px 0' : '0')};
  }

  :first-child {
    padding: ${props => props.isFamousContainer && '8px 0 8px 20px'};
  }

  :last-child {
    padding: ${props => props.isFamousContainer && '8px 20px 8px 0px'};
  }

  & + & {
    margin-left: 20px;

    @media (min-width: 960px) {
      margin-left: 12px;
    }
  }

  div {
    display: flex;
    align-items: center;
    min-width: 280px;
    cursor: pointer;

    @media (min-width: 768px) {
      min-width: 312px;
    }

    @media (min-width: 960px) {
      min-width: 372px;
      padding: 20px;
      height: 130px;
    }
    @media (min-width: 1204px) {
      min-width: 358px;
      padding: 20px;
      height: 130px;
    }

    padding: 16px;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.4);
    transition: 0.3s all;

    &:hover {
      box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.8);
    }

    border-radius: 2px;

    main {
      display: flex;
      flex-direction: column;
      margin-left: 12px;

      @media (min-width: 960px) {
        width: 100%;
        height: 100%;
        margin-left: 20px;
      }

      h5 {
        font-size: 0.875em;
        color: #3e3e3e;
        margin-bottom: 5px;
        line-height: 0.875rem;
        font-weight: 600;
        height: 18px;

        @media (min-width: 960px) {
          font-size: 1rem;
          line-height: 1rem;
          margin-bottom: 10px;
        }
      }

      span {
        font-weight: 300;
        color: #717171;
        font-size: 0.875rem;
        line-height: 0.9375rem;
        display: flex;

        svg {
          margin-right: 5px;
        }

        @media (min-width: 960px) {
          :last-child {
            margin-top: auto;
          }
        }

        .starred {
          color: #DC2626;
          font-weight: bold;
          font-size:11px;
        }

        & + span {
          margin-top: 10px;
        }
      }
    }

    figure {
      display: flex;

      &::after {
        margin-left: 10px;
        content: '';
        width: 1px;
        background-color: #f2f2f2;

        @media (min-width: 960px) {
          margin-left: 20px;
        }
      }

      img {
        height: 54px;
        width: 54px;
        border-radius: 5px;
        object-fit: contain;

        @media (min-width: 960px) {
          width: 86px;
          height: 86px;
        }
      }
      button {
        cursor: pointer;
        border: 1px solid #f0f0f0;
        background: #fff;
        color: #ea1d2c;
        width: 100%;
        margin-top: 20px;
        padding: 12px;
        font-size: 16px;
        border-radius: 4px;
        transition: 0.04s all;
  
        &:hover {
          background: #f0f0f0;
  
          @media (min-width: 960px) {
            color: #fff;
            background: #ea1d2c;
          }
        }
      }
    }
  }
`;
