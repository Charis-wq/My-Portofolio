export default function Contacts() {
    return (
        <section id="contact" className="items-centerpy-10 px-5 py-10">
            <h1 className="text-4xl text-center font-bold py-10 px-6 text-[var(--color-primary)] ">Contact <span className="text-[var(--color-text)]">Me</span></h1>
            <div className="bg-[var(--color-secondary)] p-6 rounded-lg max-w-4xl mx-auto">
                <p className="text-2xl text-[var(--color-body)]">Contact Person</p>
                {/* email contact */}
                <div className="flex items-center gap-2 py-3">
                    <img className="w-7 h-7" src="src/assets/img/logo_gmail.svg" alt="" />
                    <a href="">: my email</a>
                </div>
                {/* phone contact */}
                <div className="flex items-center gap-2 py-3">
                    <img className="w-7 h-7" src="src/assets/img/phone_logo.svg" alt="" />
                    <a href="">: phone number</a>
                </div>
                <p className="text-2xl text-[var(--color-body)]">Social Media</p>
                 {/* instagram profile */}
                <div className="flex items-center gap-2 py-3">
                    <img className="w-7 h-7" src="src/assets/img/logo_instagram.svg" alt="" />
                    <a href="">:my instagram</a>
                </div>
                     {/* linkedin profile */}
                <div className="flex items-center gap-2 py-3">
                    <img className="w-7 h-7" src="src/assets/img/logo_linkind.svg" alt="" />
                    <a href="">: my linkedin</a>
                </div>
                   {/* twitter profile */}
                <div className="flex items-center gap-2 py-3">
                    <img className="w-7 h-7" src="src/assets/img/logo_twiter.svg" alt="" />
                    <a href="">: my twitter</a>
                </div>
                {/* github profile */}
                <div className="flex items-center gap-2 py-3">
                    <img className="w-7 h-7" src="src/assets/img/logo_github.svg" alt="" />
                    <a href="">: my github</a>
                </div>

            </div>
        </section>

    );
}