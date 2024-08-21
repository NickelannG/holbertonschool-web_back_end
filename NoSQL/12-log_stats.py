#!/usr/bin/env python3
"""Provides stats about Nginx logs sorted in MongoDB"""
from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient("mongodb://localhost:27017/")
    db = client.logs
    collection = db.nginx

    x = db.nginx.count_documents({})
    print("{} logs".format(x))


    print("Methods:")
    list = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for i in list:
        db.nginx.count_documents({"i": i})
        print(" method {}: {}".format(i, x))

    status = db.nginx.count_documents({"method": "GET", "path": "/status"})
    print("{} status check".format(status))
