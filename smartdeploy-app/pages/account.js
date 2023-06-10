// account.js
import { useEffect, useState } from "react";
import { StellarSdk, Server } from "stellar-sdk";
import { getPublicKey, isConnected } from "@stellar/freighter-api";

export default function Account() {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    (async () => {
      if (await isConnected()) {
        const key = await getPublicKey();
        const server = new Server("https://horizon-testnet.stellar.org");
        const account = await server.loadAccount(key);
        setBalance(account.balances[0].balance);
      }
    })();
  }, []);

  return (
    <div className="uk-flex uk-flex-center uk-flex-middle uk-height-viewport">
      <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-box-shadow-large uk-width-1-2@s uk-width-1-4@l">
        <h1>Your Wallet</h1>
        {balance ? (
          <p>Your account balance: {balance} XLM</p>
        ) : (
          <p>Loading...</p>
        )}
        <button
          className="uk-button uk-button-danger"
          onClick={disconnectWallet}
        >
          Logout
        </button>
      </div>
    </div>
  );

  function disconnectWallet() {
    // Implement logic to disconnect wallet
  }
}
