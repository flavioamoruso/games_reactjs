import React from "react";
import styled from "styled-components";

const StyledSwitch = styled.div`
  /* The switch - the box around the slider */
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
    transform-style: preserve-3d;
    perspective: 500px;
    animation: toggle__animation 3s infinite;
  }

  @media screen and (max-width: 992px) {
    .switch {
      display: none;
    }
  }
  .switch::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    filter: blur(20px);
    z-index: -1;
    border-radius: 50px;
    background-color: #d8ff99;
    background-image: radial-gradient(
        at 21% 46%,
        hsla(183, 65%, 60%, 1) 0px,
        transparent 50%
      ),
      radial-gradient(at 23% 25%, hsla(359, 74%, 70%, 1) 0px, transparent 50%),
      radial-gradient(at 20% 1%, hsla(267, 83%, 75%, 1) 0px, transparent 50%),
      radial-gradient(at 86% 87%, hsla(204, 69%, 68%, 1) 0px, transparent 50%),
      radial-gradient(at 99% 41%, hsla(171, 72%, 77%, 1) 0px, transparent 50%),
      radial-gradient(at 55% 24%, hsla(138, 60%, 62%, 1) 0px, transparent 50%);
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: orange;
    transition: 0.4s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    left: 0.3em;
    bottom: 0.35em;
    transition: 0.4s;
    border-radius: 50%;
    box-shadow:
      rgba(0, 0, 0, 0.17) 0px -10px 10px 0px inset,
      rgba(0, 0, 0, 0.09) 0px -1px 15px -8px;
    background-color: #ff99fd;
    background-image: radial-gradient(
        at 81% 39%,
        hsla(327, 79%, 79%, 1) 0px,
        transparent 50%
      ),
      radial-gradient(at 11% 72%, hsla(264, 64%, 79%, 1) 0px, transparent 50%),
      radial-gradient(at 23% 20%, hsla(75, 98%, 71%, 1) 0px, transparent 50%);
  }

  .input__check:checked + .slider {
    background-color: green;
  }

  .input__check:checked + .slider:before {
    transform: translateX(1.5em);
  }

  @keyframes toggle__animation {
    0%,
    100% {
      transform: translateY(-10px) rotateX(15deg) rotateY(-20deg);
    }

    50% {
      transform: translateY(0px) rotateX(15deg) rotateY(-20deg);
    }
  }
`;

const Switch = () => {
  return (
    <>
      <StyledSwitch>
        <label class="switch">
          <input type="checkbox" class="input__check" />
          <span class="slider"></span>
        </label>
      </StyledSwitch>
    </>
  );
};

export default Switch;
