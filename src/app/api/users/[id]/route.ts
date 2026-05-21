import { UserValidation } from "@/src/lib/validation/user-validation";
import {
  deleteUser,
  getUserById,
  updateUser,
} from "@/src/services/user-services";
import { serverError } from "@/src/utils/api-helper";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const res = await getUserById(id);

    if (res.status !== 200) {
      return NextResponse.json(
        { message: res.message },
        { status: res.status },
      );
    }

    return NextResponse.json(res.user);
  } catch (error) {
    return serverError(error);
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const res = await deleteUser(id);

    return NextResponse.json(
      { message: res.message },
      {
        status: res.status,
      },
    );
  } catch (error) {
    return serverError(error);
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const validation = UserValidation.UPDATE.safeParse(body);

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

    const res = await updateUser(id, body);

    if (res.status !== 200 && res.status !== 201) {
      return NextResponse.json(
        { message: res.message },
        { status: res.status },
      );
    }

    return NextResponse.json({
      status: 200,
      message: "Data user berhasil diubah",
    });
  } catch (error) {
    return serverError(error);
  }
}
