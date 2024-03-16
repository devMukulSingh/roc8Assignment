'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import * as z from "zod";

const page = () => {
    const formSchema = z.object({
        pin: z.string().min(8, {
            message: 'Enter valid OTP'
        })
    })
    const form = useForm({
        resolver: zodResolver(formSchema)
    })
    const onSubmit = (data: FieldValues) => {
        console.log(data);
    }
    return (
        <div className='flex justify-center w-screen h-[calc(100vh-10rem)]'>
            <div className='w-1/3 border items-center h-[23rem] flex flex-col gap-5 rounded-xl p-10 mt-10'>
                <h1 className='text-center text-2xl font-semibold'>
                    Verify you email
                </h1>
                <h1 className='text-center'>
                    Enter the 8 digit code you have received on
                    mukulsingh2276@gmail.com
                </h1>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className='h-full flex flex-col gap-5'>
                                <FormField
                                    name="pin"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Code
                                            </FormLabel>
                                            <FormControl>
                                                <InputOTP
                                                    maxLength={8}
                                                    render={({ slots }: any) => (
                                                        <InputOTPGroup className="gap-2">
                                                            {slots.map((slot:any, index:any) => (
                                                                <React.Fragment key={index}>
                                                                    <InputOTPSlot className="rounded-md border" {...slot} />
                                                                </React.Fragment>
                                                            ))}{" "}
                                                        </InputOTPGroup>
                                                    )}
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}

                                />

                                <Button
                                    type="submit"
                                    className="bg-black  h-10 mt-10"
                                >
                                    VERIFY
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default page