import { useEffect } from 'react';
import { supabase } from '../lib/supabase';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Exemplo: Verificar sessão do usuário ao carregar a app
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('Sessão:', session);
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;