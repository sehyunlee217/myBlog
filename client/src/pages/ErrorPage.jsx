import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate("/");
    };

    return (
        // credit: Harrishash @ https://tailwindcomponents.com/component/tailwind-css-404-error-page
        <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div class="">
                    <h1 class="my-2 text-gray-800 font-bold text-2xl">
                        I don't think there is anything here!
                    </h1>
                    <p class="my-2 text-gray-800">Sorry about that! Go back to the home page for <span className=" text-lg text-teal-400 font-korean">죠</span> !</p>
                    <button onClick={navigateHome} class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-teal-400 text-white hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</button>
                </div>
            </div>
        </div>
    );
}
