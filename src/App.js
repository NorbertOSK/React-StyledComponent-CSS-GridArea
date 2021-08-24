import { GlobalStyle } from "./styles/globalStyles";
import { Container, Header, Main, Sidebar, Widget, Footer } from "./styles/model";

function App() {
  return (
    <>
      <GlobalStyle />

      <Container className="contenedor">

        <Header className="header">
          <h1>Header</h1>
        </Header>

        <Main className="contenido">
          <h2>Test</h2>
          <p>Lorem asdasd</p>
        </Main>

        <Sidebar className="sidebar">Sidebar</Sidebar>

        <Widget className="widget-1">Widget-1</Widget>
        <Widget className="widget-2">Widget-2</Widget>

        <Footer className="footer">Footer</Footer>

      </Container>

    </>
  );
}

export default App;
