pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";

contract TheBoredApesFNFT is ERC721Token {
  constructor() ERC721Token("TheBoredApesFNFT", "TBAF") {}
  function mint(uint tid) public { _mint(msg.sender, tid); }
}
