
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Editor from "./pages/Editor";
import Templates from "./pages/Templates";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import GetStarted from "./pages/GetStarted";  // Add this import

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-started" element={<GetStarted />} />  {/* Add this route */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
