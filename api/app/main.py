import hashlib
import random
from fastapi import FastAPI, HTTPException, Header, Response, Cookie
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
    return { "Hello World"}

@app.get("/token")
def get_token(response: Response):
    session = random.randint(100000, 999999)
    token = hashlib.sha1((SECRET + str(session)).encode("utf-8")).hexdigest()
    validTokens.append(token)
    response.set_cookie(key="token", value=str(token), secure=True, httponly=False, samesite="None")
    return { "status": "success" }

@app.post("/authorize")
def csrf(token: str = Cookie(None)):
    # Cookieの確認のみ行う
    print(token)
    print(validTokens)
    if token not in validTokens:
        raise HTTPException(status_code=401, detail="Invalid token")
    return { "status": "success" }

@app.post("/double-submit-cookie")
def double_submit_cookie(token: str = Cookie(None), X_Xsrftoken: str = Header(None)):
    if token not in validTokens:
        raise HTTPException(status_code=401, detail="Invalid token")
    if token != X_Xsrftoken:
        raise HTTPException(status_code=401, detail="Invalid X-XSRF-TOKEN")
    return { "status": "success" }
