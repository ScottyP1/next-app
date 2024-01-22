'use client'

import { useFormStatus } from 'react-dom'

export default function FormSubmit({ text }) {
    const { pending } = useFormStatus()

    return (
        <button disabled={pending} className='rounded-sm bg-RED w-full mt-3 h-12 text-white'>
            {pending ? 'Submitting' : text}
        </button>
    )
}