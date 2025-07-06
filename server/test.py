import requests
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("OPENROUTER_API_KEY")

print("🔑 Loaded API Key:", api_key)

url = "https://openrouter.ai/api/v1/chat/completions"
headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

data = {
    "model": "deepseek/deepseek-chat-v3-0324:free",
    "messages": [
        {"role": "user", "content": "Hello!"}
    ],
    "max_tokens": 50
}

response = requests.post(url, headers=headers, json=data)

if response.status_code == 200:
    reply = response.json()["choices"][0]["message"]["content"]
    print("✅ Response:", reply)
else:
    print(f"❌ Error: {response.status_code} - {response.text}")
