'use client'

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function AuthWrapper  ({ children } : { children: React.ReactNode}) {
     const router = useRouter();

  useEffect(() => {
    const authData = localStorage.getItem('auth');
    const parsedAuthData = authData ? JSON.parse(authData) : undefined
    if (!parsedAuthData?.isAuthenticated) {
      router.push('/login');
    }
  }, [router]);
  
    return <>{children}</>
}