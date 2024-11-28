import React from 'react'
import Section from './Section'
const ContactSection = () => {
    return (
        <Section>
            <h2 className="text-5xl font-bold">Contact Me</h2>
            <div className="mt-8 p-8 rounded-d bg-white w-96 max-w-full">
                <form>
                    <label htmlFor='name' className="font-medium text-gray-900 block mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <label htmlFor='email' className="font-medium text-gray-900 block mb-1">Name</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <label htmlFor='message' className="font-medium text-gray-900 block mb-1">Name</label>
                    <textarea
                        name="message"
                        id="name"
                        className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <button type='submit' className='bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16'>Submit</button>
                </form>
            </div>
        </Section>
    )
}

export default ContactSection