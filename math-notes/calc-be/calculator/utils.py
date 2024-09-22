import google.generativeai as generativeai
import ast
import json
from PIL import Image
from constants import GEMINI_API_KEY

generativeai.configure_openai(api_key=GEMINI_API_KEY)
model = generativeai.GenerativeModel("gemini-1.5-flash")

def analyze_image(img: Image, dict_of_vars: dict):
    dict_of_vars_str = json.dumps(dict_of_vars)
    pass  # Placeholder for function body
