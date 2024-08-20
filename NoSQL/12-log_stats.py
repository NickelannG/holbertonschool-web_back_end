#!/usr/bin/env python3
"""Provides stats about Nginx logs sotred in MongoDB"""
from pymongo import MongoClient

client = MongoClient()
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
print("{} satus check".format(status))
