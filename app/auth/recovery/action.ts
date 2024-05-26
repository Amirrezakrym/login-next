"use server";
import { redirect } from "next/navigation";
import { z } from "zod";

const schemaRecovery = z.object({
    email: z.string().email({ message: "Invalid email address" }),
  });

  export async function recoveryUserAction(prevState: any, formData: FormData) {

    const validatedFields = schemaRecovery.safeParse({
      email: formData.get("email"),
    });
  
    if (!validatedFields.success) {
      return {
        ...prevState,
        zodErrors: validatedFields.error.flatten().fieldErrors,
        message: "Missing Fields. Failed to Register",
      };
    }
  
    return redirect("recovery/pincode");
  }
  