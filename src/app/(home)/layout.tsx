import Header from "@/components/header";
import Footer from "@/components/footer";
export default function HomeLayout({children}:any) {
    return(
        <>
                <Header />

        {children}
        <Footer />
        </>
    )
}