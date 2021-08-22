import { GlobalStyle } from "./styles/globalStyles";
import { Container } from "./views/Container";
import { Footer } from "./views/Footer";
import { Header } from "./views/Header";
import { Main } from "./views/Main";
import { Sidebar } from "./views/Sidebar";
import { Widget } from "./views/Widget";

function App() {
  return (
    <>
      <GlobalStyle />

      <Container>

        <Header>
          <h1>Header</h1>
        </Header>

        <Main>
          <h2>Test</h2>
          <p>Lorem asdasd</p>
        </Main>

        <Sidebar>Sidebar</Sidebar>

        <Widget nameStyle="widget-1">Widget-1</Widget>
        <Widget nameStyle="widget-2">Widget-2</Widget>

        <Footer>Footer</Footer>

      </Container>

    </>
  );
}

export default App;
