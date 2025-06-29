import { useForm, type SubmitHandler } from 'react-hook-form';

interface FormData {
    name: string;
    email: string;
    password: string;
}

const Form = () => {

  const {
    register,
    handleSubmit,
    formState : { errors, isSubmitting }
  }  = useForm<FormData>(); 

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' placeholder='Enter name here' {...register('name', { required: 'Name is required'})} />
            {errors.name && <p style={{color:'red'}}>{errors.name.message}</p>}
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' placeholder='Enter email here' {...register('email', { required: 'Email is required',pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
            }})} />
            {errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id='password' placeholder='Enter password here' {...register('password', { required: 'Password is required'})} />
            {errors.password && <p style={{color:'red'}}>{errors.password.message}</p>}
        </div>
        <button type="submit" disabled={isSubmitting}>{isSubmitting?'Loading . . . ':'Submit'}</button>
    </form>
  )
}

export default Form