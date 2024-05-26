"use server";
import { redirect } from "next/navigation";
import { z } from "zod";

const schemaRegister = z.object({
  name: z
    .string()
    // .nonempty()
    .min(4, { message: "Must be 4 or more characters long" })
    .max(20, { message: "Must be 5 or fewer characters long" }),
  password: z
    .string()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_])\S{8,128}$/ , { 
      message: "The password is not acceptable",
    }),
  email: z.string().email({ message: "Invalid email address" }),
});

export async function registerUserAction(prevState: any, formData: FormData) {

  const validatedFields = schemaRegister.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Register",
    };
  }

  return redirect("/");
}
