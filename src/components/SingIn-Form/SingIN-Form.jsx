import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { createUserDocFromAuth, signInUser, signInWithGooglePopUp } from '../../Utils/Fire-Base';
import Button from '../Button/button';

const SignInForm = () => {
    const Navigate = useNavigate();
    const {
        setCurrentUser
    } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const LogGoogle = async () => {
        const response = await signInWithGooglePopUp()
        // console.log(response);
        setCurrentUser(response)
        Navigate("/")
        createUserDocFromAuth(response.user.uid, response.user.displayName, response.user.email)
    }

    const signInUserForm = async (data) => {
        try {
            const response = await signInUser(data.email, data.password)
            setCurrentUser(response)
            Navigate("/")
            reset()
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <form onSubmit={handleSubmit(signInUserForm)}>
            <h2>Login</h2>
            <h4>Email</h4>
            <input {...register('email', {
                required: true,
                pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
            })} />
            {errors?.email?.type === "required" && <p>Please enter email.</p>}
            {errors?.email?.type === "pattern" && <p>Please enter correct email.</p>}
            <h4>Password</h4>
            <input type="password" {...register('password', { required: true })} />
            {errors.password && <p>Password is required.</p>}
            <br />
            <Button buttonText="Sign In" />
            <br />
            <Button type="button" onClick={LogGoogle} buttonClass="google-sign-in" buttonText="Login with Google" />

        </form>
    );
};

export default SignInForm;