import { ThemeProvider } from "@/src/components/theme-provider";
import { MainNav } from "@/src/components/main-nav";
 
export default function RootLayout({ children }:{
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <div className="relative min-h-screen">
            <MainNav />
            {children}
          </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}