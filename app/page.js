import StandardButtonGreen from "./lib/Buttons/StandardButtonGreen";

export default function Home() {
  return (

    <div className="w-1/5 m-auto mt-10">
      <StandardButtonGreen
        href="/auth/login"
        btnText={"Login"}>
      </StandardButtonGreen>
    </div>
  )
}
