import { UserValidation } from "@/src/lib/validation/user-validation";
import { getAllUsers, createUser } from "@/src/services/user-services";
import { serverError } from "@/src/utils/api-helper";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await getAllUsers();

    return NextResponse.json(res.users, {
      status: 200,
    });
  } catch (error) {
    return serverError(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = UserValidation.CREATE.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          message: "Validation Failed!",
          errors: validation.error.flatten((issue) => issue.message)
            .fieldErrors,
        },
        { status: 400 },
      );
    }

    const res = await createUser(body);

    if (res.status !== 201) {
      return NextResponse.json(
        { message: res.message },
        { status: res.status },
      );
    }

    return NextResponse.json(
      { message: "User berhasil dibuat", user: res.user },
      { status: 201 },
    );
  } catch (error) {
    return serverError(error);
  }
}
