export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full left-0 z-50 text-center bg-[var(--color-primary)]">
            <div className="py-2 px-2 ">
                <p className="text-white text-sm mb-1">
                    © 2026 Abdul Charis. All rights reserved
                </p>

                <div className="flex justify-center gap-5  ">

                <a href="#">
                    <img src="src/assets/img/logo_github.svg" alt="github" className="w-4 h-4 hover:brightness-0 hover:invert" />
                </a>
                
                <a href="#">
                    <img src="src/assets/img/logo_gmail.svg" alt="gmail" className="w-4 h-4 hover:brightness-0 hover:invert" />
                </a>

                <a href="#" >
                    <img src="src/assets/img/logo_linkind.svg" alt="linkind" className="w-4 h-4 hover:brightness-0 hover:invert" />
                </a>
                
            </div>

        </div>

            
        </footer>
    )
}