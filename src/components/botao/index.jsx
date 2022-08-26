export default function Botao(props) {

  return (
    <>
     <button onClick={props.onClick}
        className="w-full h rounded-2xl border-b-4 border-b-[#583CE1] bg-[#694afd] py-3 font-bold text-white  active:translate-y-[0.125rem] active:border-b-[#694afd]">
        {props.children}
      </button>
    </>
  );
}