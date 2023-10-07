
function OnboardingLayout({ children }) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center "
            style={{
                backgroundImage: "url('/images/onboardingBackground.jpg')",

            }}
        >
            {/* Centered content with white background */}
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="px-6 py-10 m-4 lg:px-10 lg:py-16 bg-white rounded-xl shadow-xl w-full h-full lg:w-1/3 lg:h-3/4 z-50 md:w-1/2">
                <img className="mx-auto w-60 mb-8" src={"/images/logo.png"} alt="QuidQuest" />
                {children}
            </div>
        </div>
    );
}

export default OnboardingLayout;
