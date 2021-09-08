import type { NextPage } from 'next'
import { Main } from '../components/template/Main'
import { Card } from '../components/ui/Card'
import { H1 } from '../components/ui/Headings'
import { SignIn as SignInComposition } from '../components/composition/SignIn'
import { SignUp } from '../components/composition/SignUp'

const SignIn: NextPage = () => {
  return (
    <Main>
      <div className="max-w-screen-md mx-auto">
        <Card>
          <H1>Sign in or Sign up</H1>
          <div className="grid grid-cols-2 space-y-10 md:space-y-0 md:gap-24">
            <div className="col-span-2 md:col-span-1">
              <SignInComposition />
            </div>
            <div className="col-span-2 md:col-span-1">
              <SignUp />
            </div>
          </div>
        </Card>
      </div>
    </Main>
  )
}

export default SignIn
