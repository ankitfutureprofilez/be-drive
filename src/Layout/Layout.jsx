import Header from "../compontent/Header";

export default function Layout({ children }) {

    return (
        <div className="hero_bg">
            <div className="mx-auto container h-screen sm:container md:container lg:container xl:max-w-[1440px] px-4">
                <Header />
                {children}
            </div>
        </div>
    );
}