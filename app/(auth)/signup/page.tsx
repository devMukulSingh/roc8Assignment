'use client'
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form"
import * as z from "zod";

const SignupPage = () => {

  const formSchema = z.object({
    name: z.string().max(20),
    password: z.string().min(6).max(20),
    email: z.string().email(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  }
  return (
    <div className="flex items-center  justify-center w-full h-[calc(100vh-10rem)]">

      <div
        className="border w-1/3 p-10 rounded-lg flex flex-col gap-5">

        <h1 className=" text-center text-2xl font-bold">
          Create your account
        </h1>

        <Form  {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5 ">

              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                      <Input {...field} type="password" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                className="h-12 bg-black rounded-md"
                type="submit"
              >
                CREATE ACCOUNT
              </Button>

              <div className="flex gap-2 self-center mt-5">
                <h1 className="text-neutral-500 text-sm">
                  Have an Account?
                </h1>
                <Link
                  className=""
                  href={'/signin'}>
                  LOGIN
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