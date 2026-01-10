import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { me as meApi, logout as logoutApi } from '../api/auth.api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [flash, setFlash] = useState(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const res = await meApi();
        if (mounted) setUser(res.data);
      } catch {
        if (mounted) setUser(null);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const logout = async () => {
    await logoutApi();
    setUser(null);
  };

  const value = useMemo(
    () => ({ user, setUser, loading, logout, flash, setFlash }),
    [user, loading, flash]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
