'use client'
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form"
import * as z from "zod";

const SignupPage = () => {

  const [type, setType] = useState<string>("password");
  const formSchema = z.object({
    password: z.string().min(6).max(20),
    email: z.string().email(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  }
  const handleShowPwd = () => {
    type === 'password' ? setType("text") : setType('password');
  }
  return (
    <div className="flex items-center  justify-center w-full h-[calc(100vh-10rem)]">

      <div
        className="border w-1/3 p-10 rounded-xl flex flex-col gap-5">

        <h1 className="text-center text-2xl font-bold">
          Login
        </h1>
        <div className="space-y-2">
          <h1 className="text-center text-xl font-semibold">
            Welcome back to ECOMMERCE
          </h1>
          <h1 className="text-center text-sm">
            The next gen buisiness marketplace
          </h1>
        </div>
        <Form  {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-8 ">

              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter email" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="w-full border flex items-center rounded-md pr-2">
                        <Input
                          {...field}
                          type={type}
                          placeholder="Enter password"
                          className="border-none focus:outline-0 focus:border-0 focus:outline-none"
                        />
                        <Button
                          type="button"
                          onClick={handleShowPwd}
                          variant="ghost"
                          className="underline text-sm hover:bg-transparent">
                          Show
                        </Button>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                className="h-12 bg-black rounded-md"
                type="submit"
              >
                LOGIN
              </Button>
              <hr className="" />
              <div className="flex gap-2 self-center ">
                <h1 className="text-neutral-500 text-sm">
                  Don't have an Account?
                </h1>
                <Link
                  className=""
                  href={'/signup'}>
                  SIGNUP
                </Link>
              </div>
            </div>
          </form>
        </Form>

      </div>
    </div>

  )
}

export default SignupPage