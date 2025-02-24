import { Layout } from "./Components/Layout";
import "./index.css";
import DefaultRouter from "./router/DefaultRouter";
import { RouterProvider } from "./router";

function App() {
  return (
    <RouterProvider>
      <Layout.DefaultLayout>
        <DefaultRouter />
      </Layout.DefaultLayout>
    </RouterProvider>
  );
}

export default App;
