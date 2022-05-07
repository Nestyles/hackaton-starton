import { useWeb3React } from "@web3-react/core"
import { injected } from "../components/wallet/Connectors"
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import { provider } from "web3-core"

export default function Login() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }
  function getLibrary(provider_var: provider) {
    return new Web3(provider_var)
  }
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="flex flex-col items-center justify-center">
        <button onClick={connect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Connect to MetaMask</button>
        {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
        <button onClick={disconnect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Disconnect</button>
      </div>
    </Web3ReactProvider>
  )
}