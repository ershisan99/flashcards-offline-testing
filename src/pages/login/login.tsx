import { SignIn } from '../../components/auth/sign-in'
import { Page } from '../../components/ui/page'
import { useLoginMutation } from '../../services'

export const Login = () => {
  const [login, { error }] = useLoginMutation()

  console.log(error)
  // const navigate = useNavigate()
  //
  // useEffect(() => {
  // if (!me) return
  //
  // navigate('/')
  // }, [me])

  return (
    <Page flex>
      <SignIn onSubmit={login} />
    </Page>
  )
}
