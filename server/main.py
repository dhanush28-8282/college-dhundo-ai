from flask import Flask, request, jsonify
import requests
import os
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)  # Allow React frontend to call Flask API

api_key = os.getenv("OPENROUTER_API_KEY")  # Your OpenRouter API key
openrouter_url = "https://openrouter.ai/api/v1/chat/completions"

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get("message")

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": "deepseek/deepseek-chat-v3-0324:free",
        "messages": [
            {"role": "system", "content": "You are a helpful college admission assistant."},
            {"role": "user", "content": user_message}
        ],
        "max_tokens": 200,
        "temperature": 0.3
    }

    try:
        response = requests.post(openrouter_url, headers=headers, json=payload)
        if response.status_code == 200:
            reply = response.json()["choices"][0]["message"]["content"]
            return jsonify({"reply": reply})
        else:
            print(f"❌ API Error {response.status_code}: {response.text}")
            return jsonify({"error": f"API error {response.status_code}: {response.text}"}), response.status_code
    except Exception as e:
        print("❌ Request failed with error:", e)
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
