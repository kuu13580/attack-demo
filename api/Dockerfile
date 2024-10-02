FROM python:3.11-slim

WORKDIR /app

# パッケージインストール
COPY ./requirements.txt requirements.txt
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# ファイルのコピー
COPY ./app /app/

# # サーバー起動
CMD ["sh", "-c", "uvicorn main:app --reload --host 0.0.0.0 --port 3000"]