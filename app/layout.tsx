import "./globals.css";

export const metadata = {
  title: "Isi's Jahreskalender 2026",
  description: "Ein Jahr voller Magie",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="relative bg-gradient-to-b from-[#3b0a0a] via-[#5e1515] to-[#8a1d1d] text-white min-h-screen">
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
