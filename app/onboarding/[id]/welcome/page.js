import StandardButtonGreen from "@/app/lib/Buttons/StandardButtonGreen";

export default function Welcome() {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
        Welcome to QuidQuest
      </h2>
      <p className="text-center text-lg text-gray-600 mb-6">
        Streamlining your business expenses starts here.
      </p>
      <h3 className="text-lg font-medium text-gray-800 mb-4">
        Before we begin:
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li>Ensure you have your phone nearby for OTP verification.</li>
        <li>Keep your bank details ready for seamless integration.</li>
        {/* <li>Have a professional profile photo to personalize your experience.</li> */}
      </ul>

      <div className="mt-6">
        <StandardButtonGreen btnText={"Begin Onboarding"} href={"input-name"} />
      </div>
    </div>
  );
}
