export const ING_LOCK_ABI = [
  "function balanceOf(address account) view returns (uint256 balance)",
  "function claimAll(address user)",
  "function claimByIndex(address user, uint256 index)",
  "function getHistory(address user) view returns (uint256 total, tuple(uint256 totalAmount, uint256 amount, uint256 time)[] arrBalances)",
];
