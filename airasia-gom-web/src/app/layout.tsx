import "./globals.css";

import Navbar from "../app/components/Navigation/Navbar"
import AuthWrapper from "./authWrapper";
import { JotaiProvider } from "./jotaiProviders";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JotaiProvider>
          <Navbar />
          <main className="pt-16 min-h-screen">
            <AuthWrapper>
              {children}
            </AuthWrapper>
          </main>
        </JotaiProvider>
      </body>
    </html>
  );
}
