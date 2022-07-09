// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.8.0;

import "./IStarknetCore.sol";

abstract contract StarknetClient {
    IStarknetCore starknetCore;

    constructor(address starknetCore_) {
        starknetCore = IStarknetCore(starknetCore_);
    }
}
