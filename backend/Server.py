from flask import Flask, request, send_from_directory
from flask_restful import Api
from flask_cors import CORS
from Blockchain import Blockchain
import json

app = Flask(__name__, static_folder='../frontend/build')

CORS(app)

blockchain = Blockchain()

api = Api(app)

# @app.route("/<path:path>")
# def serve(path):
#     return send_from_directory(app.static_folder,path)

@app.route('/api/chain', methods=['GET'])
def get_chain():
    chain_data = []
    for block in blockchain.chain:
        chain_data.append(block.__dict__)
    return json.dumps(
        {
            "length": len(chain_data),
            "chain": chain_data
        }
    )

@app.route('/api/transactions/new', methods=['POST'])
def new_transaction():
    blockchain.add_new_transaction(request.get_json())
    print(blockchain.unconfirmed_transactions)
    if(len(blockchain.unconfirmed_transactions) == 2):
        blockchain.mine()
    return "Transaction added to the block"

app.run(debug=True, port=5000)
