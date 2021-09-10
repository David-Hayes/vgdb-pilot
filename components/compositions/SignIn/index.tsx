import { SyntheticEvent, FormEvent, useState, useEffect } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useAppState } from '../../../libs/AppState'
import { H2 } from '../../ui/Headings'
import { Input } from '../../ui/Input'
import { Button } from '../../ui/Button'
import { SocialAuth } from '../SocialAuth'

export const SignIn = () => {
  const router = useRouter()
  const { user, authLoading } = useAppState()
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
    error: '',
  })

  useEffect(() => {
    if (!authLoading && user) {
      router.push('/profile')
    }
  }, [authLoading, user, router])

  const handleSignin = async (e: SyntheticEvent) => {
    e.preventDefault()
    const auth = getAuth()
    signInWithEmailAndPassword(auth, signInData.email, signInData.password)
      .then((userCredential) => {})
      .catch((error) => {
        setSignInData({
          ...signInData,
          error: 'Incorrect username or password',
        })
      })
  }

  return (
    <>
      <H2 className="mb-5">Sign in to your account</H2>
      <SocialAuth />
      <p className="mt-5 mb-3 font-bold">Or with your email</p>
      <form onSubmit={handleSignin} className="space-y-3">
        {signInData.error && (
          <div className="text-red-500 font-semibold">{signInData.error}</div>
        )}
        <Input
          name="email-signin"
          type="email"
          label="Email address"
          required
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setSignInData({
              ...signInData,
              email: e.currentTarget.value,
            })
          }
        />
        <Input
          name="password-signin"
          type="password"
          label="Password"
          required
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setSignInData({
              ...signInData,
              password: e.currentTarget.value,
            })
          }
        />
        <Button>Sign in</Button>
      </form>
    </>
  )
}
