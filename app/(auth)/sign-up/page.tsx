"use client"

import AuthForm from '@/components/AuthForm'
import { SignUp } from '@/lib/actions/auth';
import { signUpSchema } from '@/lib/validation'
import React from 'react'

const Page = () => (
    <AuthForm 
        type="SIGN_UP"
        schema={signUpSchema}
        defaultValues={{
            email: "",
            password: "",
            fullName: "",
            universityId: 0,
            universityCard: "",
        }}
        onSubmit={SignUp}
    />
);

export default Page