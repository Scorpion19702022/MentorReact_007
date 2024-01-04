import React from 'react'
import { useForm } from 'react-hook-form'

const LnLogin = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm()

	const onSubmit = data => {
		console.log(data)
		reset()
	}

	const registerOption = {
		login: {
			required: 'login is required',
			minLength: {
				value: 5,
				message: 'login must have at least 5 characters',
			},
		},
		password: {
			required: 'password is required',
			minLength: {
				value: 8,
				message: 'password must have at least 8 characters',
			},
		},
	}

	console.log(errors)

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label></label>
				<input type='text' {...register('login', registerOption.login)} />
				{errors.login?.message ? <h2>{errors.login.message}</h2> : null}
				<label></label>
				<input type='text' {...register('password', registerOption.password)} />
				{errors.password?.message ? <h2>{errors.password.message}</h2> : null}
				<button type='submit'>Loguj</button>
			</form>
		</div>
	)
}

export default LnLogin
