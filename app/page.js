import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import User from "./components/user";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <section>
      <div>Home</div>
      <pre>{JSON.stringify(session)}</pre>
      <h1>client side</h1>
      <User />
    </section>
  );
}
