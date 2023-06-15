import os
import uvicorn
import traceback
import tensorflow as tf
import re
import json
from tensorflow.keras.preprocessing.sequence import pad_sequences
from keras.preprocessing.text import Tokenizer
import numpy as np
from tensorflow.keras.preprocessing.text import tokenizer_from_json




from pydantic import BaseModel
from urllib.request import Request
from fastapi import FastAPI, Response, UploadFile
from utils import load_image_into_numpy_array


# If you use h5 type uncomment line below
model = tf.keras.models.load_model('./model_embed10k.h5',compile = False) # mengunakan model .h5

# Load tokenizer from JSON file
with open('tokenizer_word_index.json', 'r') as f:
    tokenizer_word_index  = json.load(f)

tokenizer = Tokenizer()
tokenizer.word_index = tokenizer_word_index



app = FastAPI(
    title = 'InFenTor Model Fast API',
    description="InFenTor project API")

# This endpoint is for a test (or health check) to this server
@app.get("/")
def index():
    return "Hello world from ML endpoint!"

# If your model need text input use this endpoint!
class RequestText(BaseModel):
    text:str

@app.post("/predict_text")
def predict_text(req: RequestText, response: Response):
    try:
        # In here you will get text sent by the user
        text = req.text
        print("Uploaded text:", text)
        
        # Step 1: (Optional) Do your text preprocessing
        # Step 2: Prepare your data to your model
        # Step 3: Predict the data
        # result = model.predict(...)
        # Step 4: Change the result your determined API output

        # Membersihkan inputan user

        def preprocess_text(text):
            text = text.lower()            
            text = re.sub(r'[^a-zA-Z\s]', '', text)
            return text

        text = preprocess_text(text)

        # TAHAP MODELLING #

        # Max number of words in each description.
        MAX_SEQUENCE_LENGTH = 250


        # convert inputan user untuk prediksi model
        sequence = tokenizer.texts_to_sequences([text])
        test = pad_sequences(sequence, maxlen=MAX_SEQUENCE_LENGTH)


        # List Career
        career = ['Akuntan', 'Designer', 'Guru', 'Kesehatan','IT']


        probabilitas = f"{(np.max(model.predict(test)))*100:.2f}%" # untuk menghasilkan probabilitas
        nama_karir = career[np.around(model.predict(test), decimals=0).argmax(axis=1)[0]] # untuk menghasokan string career
        result = 'Rekomendasi Karir anda adalah : '+nama_karir+' dengan probabilitas : '+ probabilitas
        # Print hasil
        print(result)


        return result
    
    
    except Exception as e:
        traceback.print_exc()
        response.status_code = 500
        return "Internal Server Error"


# Starting the server
# Your can check the API documentation easily using /docs after the server is running
port = os.environ.get("PORT", 3000)
print(f"Listening to http://0.0.0.0:{port}")
uvicorn.run(app, host='127.0.0.1',port=port)