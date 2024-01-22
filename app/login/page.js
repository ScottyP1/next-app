'use client'
import FormSubmit from "../../components/FormSubmit";
import { useFormState } from 'react-dom';
import { LoginUser } from "../../lib/actions";

export default function LoginPage() {
    const [state, formAction] = useFormState(LoginUser, { message: null })

    return (
        <main className='text-white bg-FILM rounded-md p-6 w-[350px]'>
            <h1 className="text-[32px] font-normal mb-4">Sign In</h1>
            <div>
                <form action={formAction}>
                    <p>
                        <label htmlFor="email" />
                        <input name='email' id="email" placeholder="Email" type='email' className="border-2 border-stone-400 p-2 mb-2 w-full rounded-md bg-FILM" required />
                    </p>
                    <p>
                        <label htmlFor="password" />
                        <input name='password' id="password" placeholder="Add a password" type='password' className="border-2 border-stone-400 p-2 mb-2 w-full rounded-md bg-FILM" required />
                    </p>
                    {state.message ? <p>{state.message}</p> : null}
                    <FormSubmit text={'Log In'} />
                </form>
            </div >
        </main >
    )
}