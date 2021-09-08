import { H2 } from '../../ui/Headings'
import { Input } from '../../ui/Input'
import { Button } from '../../ui/Button'
import { SocialAuth } from '../SocialAuth'

export const SignIn = () => {
  return (
    <>
      <H2 className="mb-5">Sign in to your account</H2>
      <SocialAuth />
      <p className="mt-5 mb-3 font-bold">Or with your email</p>
      <form className="space-y-3">
        <Input
          name="email-signin"
          type="email"
          label="Email address"
          required
        />
        <Input
          name="password-signin"
          type="password"
          label="Password"
          required
        />
        <Button>Sign in</Button>
      </form>
    </>
  )
}
