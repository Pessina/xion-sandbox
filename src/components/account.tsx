import { useAbstraxionAccount } from "@burnt-labs/abstraxion";

export const Account = () => {
  const { data: account } = useAbstraxionAccount();

  return (
    <div>
      <h1>Account</h1>
      <p>{account?.bech32Address}</p>
    </div>
  );
}