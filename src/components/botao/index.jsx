import React from 'react';

export default function Botao(props) {
  return (
    <button
      onClick={props.onClick}
      className="h w-full rounded-2xl border-b-4 border-b-primary-darker bg-primary py-3 font-bold text-white  active:translate-y-[0.125rem] active:border-b-primary"
    >
      {props.children}
    </button>
  );
}
