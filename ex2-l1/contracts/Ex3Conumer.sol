// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.8.0;
import "./StarknetClient.sol";

contract Ex3Conumer is StarknetClient {
    constructor() StarknetClient(0xde29d060D45901Fb19ED6C6e959EB22d8626708e) {}

    function consumeMessage(uint256 l2ContractAddress, uint256 l2User)
        external
    {
        uint256[] memory payload = new uint256[](1);
        payload[0] = l2User;
        starknetCore.consumeMessageFromL2(l2ContractAddress, payload);
    }
}
