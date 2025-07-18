import Description from "../components/common/Text/Description";

function Footer() {
    return (
        <footer className="mt-44 bg-gary-gary5 p-2 ">
            <div className="max-w-7xl mx-auto">
                <div className="flex  items-center gap-4">
                    <img src="/asset/logo/logo.svg" alt="logo" />
                    <div>
                        <Description>Narendra Ram</Description>
                        <Description>Freelance Full Stack Designer</Description>
                    </div>
                    <div className=" ml-auto">
                        <Description>Designed using Figma</Description>
                        <Description>Hosted on GitHub Pages</Description>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
