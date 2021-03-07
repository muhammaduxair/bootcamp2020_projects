import Home from "./components/Home";
import "./css/main.css";
import "./css/bootstrap.min.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Missions from "./components/Missions";
import Rockets from "./components/Rockets";
import Launches from "./components/Launches";
import Footer from "./components/Footer";
const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
      <Missions />
      <Rockets />
      <Launches />
      <Footer />
    </ApolloProvider>
  );
}

export default App;
