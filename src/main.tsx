import React from 'react';
import ReactDOM from 'react-dom/client';
import "./global.css";
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderwithNavigate from './auth/Auth0ProviderwithNavigate';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from './components/ui/sonner';


// instantiating react query-client for CRUD operation
const queryClient = new QueryClient({
  defaultOptions: {
    queries : {
      refetchOnWindowFocus: false,      // to avoid the reloading of the fetch data everytime toggling the window
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderwithNavigate>
          <AppRoutes/>
          <Toaster visibleToasts={1} position="top-right" richColors />
        </Auth0ProviderwithNavigate>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
