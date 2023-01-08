import hashlib
import json

class Block:
    def __init__(self, index, transactions, timestamp, previous_hash, nonce=0):
        self.index = index
        self.transactions = transactions
        self.timestamp = timestamp
        self.previous_hash = previous_hash
        self.nonce = nonce

    def compute_hash(self):
        block_string = json.dumps(self.__dict__, sort_keys=True)
        return hashlib.sha256(block_string.encode()).hexdigest()

    def __str__(self):
        return "Block: " + str(self.index) + "\nTransactions: " + str(self.transactions) + "\nTimestamp: " + str(self.timestamp) + "\nPrevious Hash: " + str(self.previous_hash) + "\nNonce: " + str(self.nonce)