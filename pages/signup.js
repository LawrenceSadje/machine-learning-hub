import { useState } from 'react'
import { supabase } from '../lib/supabase'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/signup.module.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Sign up successful! Redirecting to login...')

      // 🔥 Redirect to login page
      setTimeout(() => {
        router.push('/login')
      }, 1500)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Sign Up</h2>

        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={styles.button} onClick={handleSignUp}>
          Sign Up
        </button>

        <p className={styles.message}>{message}</p>

        <p className={styles.subtext}>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}
