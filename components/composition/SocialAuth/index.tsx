import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from 'firebase/auth'
import { GoogleIcon, FacebookIcon, TwitterIcon } from '../../ui/SocialIcon'

export const SocialAuth = () => {
  const triggerAuth = (provider: string) => {
    const authProvider =
      provider === 'facebook'
        ? new FacebookAuthProvider()
        : provider === 'twitter'
        ? new TwitterAuthProvider()
        : new GoogleAuthProvider()
    const auth = getAuth()
    signInWithPopup(auth, authProvider).catch(() => {})
  }

  return (
    <div className="space-x-3">
      <button onClick={() => triggerAuth('google')}>
        <GoogleIcon />
      </button>
      <button onClick={() => triggerAuth('facebook')}>
        <FacebookIcon />
      </button>
      <button onClick={() => triggerAuth('twitter')}>
        <TwitterIcon />
      </button>
    </div>
  )
}
