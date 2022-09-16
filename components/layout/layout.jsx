import NavBar from "@/components/layout/nav/NavBar";
import DemoNote from "../demo/demo-note";
function Layout(props) {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="mx-1 xl:mx-40 2xl:mx-72">{props.children}</main>

      <section>
        
        <DemoNote/>
      </section>
    </>
  );
}
export default Layout;
