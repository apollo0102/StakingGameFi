import { ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import { useCall, useContractFunction } from '@usedapp/core';
import GameFiContractABI from '../abi/GameFiContractABI.json';
import { ContractAddressByRinkeby } from '../contracts';

const GameFiContractABIInterface = new ethers.utils.Interface(GameFiContractABI);

const GameFiContract = new Contract(
  ContractAddressByRinkeby,
  GameFiContractABIInterface
);

export const BaseURI = () => {
  const { value, error } = useCall(ContractAddressByRinkeby && {
    contract: new Contract(ContractAddressByRinkeby, GameFiContractABIInterface),
    method: 'baseURI',
    args: []
  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }
  return value;
};

// export const useMint = () => {
//   const { state, send, event } = useContractFunction(
//     StakingContract,
//     'mint',
//     {}
//   );
//   return { state, send, event };
// };