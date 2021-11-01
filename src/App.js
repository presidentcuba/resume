import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/Home";
import AppLayout from "./layouts/AppLayout";
import Project from "./pages/Project";
import ProjectDetail from "./pages/Projectdetail";
// Component App

function App() {
  return (
    <BrowserRouter>
        <Switch>

          <Route path="/">
            <AppLayout>
              <Switch>

                <Route path="/" exact>
                  <Home />
                </Route>

                <Route path="/projects">
                  <Project />
                </Route>

                <Route path="/project/:courseId">
                  <ProjectDetail />
                </Route>

              </Switch>
            </AppLayout>
          </Route>

          <Route>
            <div>Page not found</div>
          </Route>

      </Switch>
    </BrowserRouter>      
    
  );
}

export default App;
