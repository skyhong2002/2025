'use client'
 
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Page() {
  const router = useRouter()  
  router.push('/cfp/')
  return <div></div>;
}