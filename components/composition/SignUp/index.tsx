import { H2 } from '../../ui/Headings'
import { Input } from '../../ui/Input'
import { Button } from '../../ui/Button'
import { SocialAuth } from '../SocialAuth'

export const SignUp = () => {
  return (
    <>
      <H2 className="mb-5">Sign up for a new account</H2>
      <SocialAuth />
      <p className="mt-5 mb-3 font-bold">Or with your email</p>
      <form className="space-y-3">
        <Input
          name="email-signup"
          type="email"
          label="Email address"
          required
        />
        <Input
          name="password-signup"
          type="password"
          label="Password"
          required
        />
        <Button>Sign up</Button>
      </form>
    </>
  )
}
