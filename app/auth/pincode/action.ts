"use server";
import { redirect } from "next/navigation";
import { z } from "zod";

const schemaPinCode = z.object({
  pincode: z
    .string()
    .regex( /^\d{4}$/ , {
      message: "The entered code is incorrect",
    }),
});
export async function pincodeUserAction(prevState: any, formData: FormData) {
  const validatedFields = schemaPinCode.safeParse({
    pincode: formData.get("pincode"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Register",
    };
  }

  return redirect("/confirm");
}
