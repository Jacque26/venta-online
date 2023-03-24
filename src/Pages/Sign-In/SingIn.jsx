import SignInForm from '../../components/SingIn-Form/SingIN-Form';
import SignInUp from '../../components/SingIn-Up/SingIn-Up';
import"./SingIn.css"
const SignIn = () => {

    return (
        <div className='authentication-container' >

            <SignInForm />

            <SignInUp />
        </div>
    );
};

export default SignIn;