import AccountPage from "./_components/account-page";

async function Profile() {
  //   const session = await auth();
  //   const loggedInUser = await getUserByEmail(session?.user?.email);

  return (
    <section className="pt-14 bg-gray-100 ">
      <div>
        <AccountPage />
      </div>
    </section>
  );
}

export default Profile;
