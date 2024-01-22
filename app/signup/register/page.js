'use client'

import { useFormState } from 'react-dom';

import FormSubmit from '../../../components/FormSubmit';
import { addUser } from '../../../lib/actions';

export default function Register() {
    const [state, formAction] = useFormState(addUser, { message: null })
    return (
        <main className='text-white bg-FILM rounded-md p-6'>
            <h1 className="text-[32px] font-normal mb-4">Create a password to start your membership</h1>
            <p className="text-[18px] leading-6 mb-4">Just one more step and you&#39;re done! We hate paperwork, too.</p>
            <div>
                <form action={formAction} >
                    <p>
                        <label htmlFor="name" />
                        <input name='name' id='name' placeholder="Name" type='text' className="border-2 border-stone-400 p-2 mb-2 w-full rounded-md bg-FILM" required />
                    </p>
                    <p>
                        <label htmlFor="email" />
                        <input name='email' id="email" placeholder="Email" type='email' className="border-2 border-stone-400 p-2 mb-2 w-full rounded-md bg-FILM" required />
                    </p>
                    <p>
                        <label htmlFor="password" />
                        <input name='password' id="password" placeholder="Add a password" type='password' className="border-2 border-stone-400 p-2 mb-2 w-full rounded-md bg-FILM" required />
                    </p>
                    <FormSubmit text={'Submit'} />
                </form>
            </div >
        </main >
    )
}