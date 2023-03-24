import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { createAuthUser, createUserDocFromAuth } from '../../Utils/Fire-Base';
import Button from '../Button/button';

const SignInUp = () => {
    const Navigate = useNavigate();
    const {
        setCurrentUser
    } = useContext(UserContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm();

    const onFormSubmit = async (data) => {
        // console.log(data);
        const response = await createAuthUser(data.email, data.password1)
        try {
            createUserDocFromAuth(response.user.uid, data.name, data.email)
            setCurrentUser(response)
             Navigate("/")
            reset()
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <h2>Registro</h2>
            <h4>Name</h4>
            <input placeholder='Name' {...register('name', {
                required: true,
                pattern: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/
            })} />
            {errors?.name?.type === "required" && <p>Please enter nombre.</p>}
            {errors?.name?.type === "pattern" && <p>Please enter correct nombre.</p>}
            <br />
            <h4>Email</h4>
            <input placeholder='Email' {...register('email', {
                required: true,
                pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
            })} />
            {errors?.email?.type === "required" && <p>Please enter email.</p>}
            {errors?.email?.type === "pattern" && <p>Please enter correct email.</p>}
            <h4>Password</h4>
            <input placeholder='password1' type="password" {...register('password1', {
                required: true,
                pattern: /(?=.*[0-9a-zA-Z]).{6,}/
            })} />
            {errors.password && <p>Password is required.</p>}
            {errors?.password?.type === "pattern" && <p>Please enter correct password.</p>}
            <br />
            <input placeholder='password2' type="password" {...register('password2', {
                required: true,
                pattern: /(?=.*[0-9a-zA-Z]).{6,}/
            })} />
            {errors.password && <p>Password is required.</p>}
            {errors?.password?.type === "pattern" && <p>Please enter correct password.</p>}

            {watch('password1') !== watch('password2') && <p> Password do not match. </p>}
            <br />
            <Button buttonText="Sign Up" />
        </form>
    );
};

export default SignInUp;