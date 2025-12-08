import { Noto_Sans_Devanagari } from 'next/font/google';

const notoSans = Noto_Sans_Devanagari({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export default function Footer() {
    return (
        <footer 
            className="h-[100px] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/footer-bg.png')" }}
        >
            <p className={`${notoSans.className} tracking-tight text-[#f2f2f2] font-bold drop-shadow-md text-center text-xs leading-relaxed`}>
                Data provided by PokéAPI and includes material from Pokémon. © 2025 Pokémon.
                <br />
                Developed by <strong className="text-[#FFCC01]">Gabriella Corrêa</strong>
                <br />
                This is a non-profit project for study and portfolio purposes.
            </p>
        </footer>
    );
}