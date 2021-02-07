import { css } from '@lion/core';

export default css`
  lion-dialog {
    display: block;
    padding: 10px;
    margin-bottom: 10px;
  }
  .close-button {
    color: black;
    font-size: 28px;
    line-height: 28px;
  }
  .demo-box__column {
    display: flex;
    flex-direction: column;
  }
  .dialog {
    display: block;
    position: absolute;
    font-size: 16px;
    color: white;
    background-color: black;
    border-radius: 4px;
    padding: 8px;
  }
`;