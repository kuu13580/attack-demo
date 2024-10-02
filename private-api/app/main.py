from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
validTokens = []
SECRET = "server_secret"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,   # 追記により追加
    allow_methods=["*"],      # 追記により追加
    allow_headers=["*"]       # 追記により追加
)

@app.get("/")
def root():
    return { "Hello World" }

@app.get("/secret")
def get_secret():
    return { "secret": SECRET }