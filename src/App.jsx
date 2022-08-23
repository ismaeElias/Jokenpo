
export default function App() {
  return (
    <>
      <div className="w-screen h-screen bg-[#694AFD] flex items-center justify-center">
        <div className="flex  flex-col items-center">
          <div className="flex  items-center">
            <h1 className="text-white text-2xl font-bold">Jokenpo</h1>
            <p className="text-yellow-600 font-bold">.io</p>
          </div>
          <div className="w-64 h-64 bg-white rounded-xl">
          <h2>Bem vindo!</h2>
          <p>Insira um nickname para jogar:</p>
          <input type="text" className="border-black border"/>
          <button
            class="w-full rounded-2xl border-b-4 border-b-[#583CE1] bg-[#694afd] py-3 font-bold text-white  active:translate-y-[0.125rem] active:border-b-[#694afd]">
              Play
          </button>
        </div>
        </div>
      </div>
    </>
  )
}
