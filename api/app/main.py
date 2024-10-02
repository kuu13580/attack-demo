from os import getenv

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return { "Hello World"}
