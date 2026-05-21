import UpdateSectionUser from "@/src/components/ManageUsersPage/UpdateUserSection";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <UpdateSectionUser id={id} />;
};

export default page;
