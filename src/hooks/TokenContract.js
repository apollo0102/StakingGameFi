import { ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import { useContractCall, useContractFunction } from '@usedapp/core';
import StakingContractABI from '../abi/StakingContractABI.json';
import { ContractAddressByRinkeby } from '../contracts';

const StakingContractInterface = new ethers.utils.Interface(StakingContractABI);

const StakingContract = new Contract(
  ContractAddressByRinkeby,
  StakingContractInterface
);

export const useWhitelist = (address) => {
  const [whitelist] =
    useContractCall(
      address && {
        abi: StakingContractInterface,
        address: ContractAddressByRinkeby,
        method: 'whitelist',
        args: [address],
      }
    ) ?? [];
  return whitelist;
};

export const useMint = () => {
  const { state, send, event } = useContractFunction(
    StakingContract,
    'mint',
    {}
  );
  return { state, send, event };
};
