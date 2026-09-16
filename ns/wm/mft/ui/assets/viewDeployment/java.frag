<?xml version="1.0" encoding="UTF-8"?>

<Values version="2.0">
  <value name="name">viewDeployment</value>
  <array name="sig" type="value" depth="1">
    <value>[i] field:0:required deploymentId</value>
    <value>[i] field:0:required name</value>
    <value>[o] field:0:required success</value>
    <value>[o] record:0:required deployment</value>
    <value>[o] - field:0:required id</value>
    <value>[o] - field:0:required name</value>
    <value>[o] - field:0:required description</value>
    <value>[o] - field:0:required createdDate</value>
    <value>[o] - field:0:required modifiedDate</value>
    <value>[o] - field:0:required internal</value>
    <value>[o] - field:0:required createdBy</value>
    <value>[o] - field:0:required sourceEnvironment</value>
    <value>[o] - recref:1:optional extractedAssets wm.mft.assets.rec.management:extractedAssets</value>
    <value>[o] field:0:required message</value>
    <value>[o] record:0:required summary</value>
    <value>[o] - field:0:required extracted</value>
    <value>[o] - field:0:required skipped</value>
  </array>
  <value name="subtype">unknown</value>
  <value name="sigtype">java 3.5</value>
  <value name="encodeutf8">true</value>
  <value name="body">ClN0cmluZyBtZXNzYWdlID0gTUZUUmVzb3VyY2VzLmdldE1lc3NhZ2UoIjEwMTMiKTsKSURhdGFD
dXJzb3IgY3VyID0gcGlwZWxpbmUuZ2V0Q3Vyc29yKCk7ClN0cmluZyBkZXBsb3ltZW50SWQgPSBu
dWxsOwpTdHJpbmcgbmFtZSA9IG51bGw7CmJvb2xlYW4gc3VjY2VzcyA9IGZhbHNlOwppbnQgc2tp
cHBlZCA9IDA7CmludCBleHRyYWN0ZWQgPSAwOwpJRGF0YSBhdElEYXRhID0gbnVsbDsKTGlzdDxJ
RGF0YT4gZXh0YWN0ZWRBc3NldHMgPSBuZXcgQXJyYXlMaXN0PD4oKTsKdHJ5IHsKCVJCQVByb3h5
LnZhbGlkYXRlU2Vzc2lvbihSQkFVaUhhbmRsZS5BU1NFVF9ERVBMT1lNRU5UX1ZJRVcpOwoJaWYg
KGN1ci5maXJzdCgiZGVwbG95bWVudElkIikpIHsKCQlkZXBsb3ltZW50SWQgPSAoU3RyaW5nKSBj
dXIuZ2V0VmFsdWUoKTsKCX0KCWlmIChjdXIuZmlyc3QoIm5hbWUiKSkgewoJCW5hbWUgPSAoU3Ry
aW5nKSBjdXIuZ2V0VmFsdWUoKTsKCX0KCQoJQVREZXBsb3ltZW50IGF0ID0gQXNzZXRNYW5hZ2Vy
UHJveHkudmlld0RlcGxveW1lbnQoZGVwbG95bWVudElkLCBuYW1lKTsKCWlmIChudWxsID09IGF0
KSB7CgkJdGhyb3cgbmV3IElPRXhjZXB0aW9uKCJEZXBsb3ltZW50IG5vdCBmb3VuZDoiICsgZGVw
bG95bWVudElkKTsKCX0KCglhdElEYXRhID0gQXNzZXRVdGlscy5hdERlcGxveW1lbnRUb0lEYXRh
KGF0KTsKCUV4cG9ydERhdGEgZXhwb3J0RGF0YSA9IGF0LmdldEV4cG9ydERhdGEoKTsKCWlmIChu
dWxsICE9IGV4cG9ydERhdGEpIHsKCQlTZXQ8U3RyaW5nPiByYmFQZXJtaXR0ZWRBc3NldFR5cGVz
ID0gZ2V0UkJBRmlsdGVyTGlzdFN0cmluZ3MoKTsKCQlMaXN0PEludGVnZXI+IGNvdW50bGlzdCA9
IG5ldyBBcnJheUxpc3Q8PigpOwoJCWV4dGFjdGVkQXNzZXRzID0gQXNzZXRVdGlscy5leHRyYWN0
QXNzZXRzQXNJRGF0YShyYmFQZXJtaXR0ZWRBc3NldFR5cGVzLCBleHBvcnREYXRhLCBjb3VudGxp
c3QpOwoJCWlmICghY291bnRsaXN0LmlzRW1wdHkoKSkgewoJCQlleHRyYWN0ZWQgPSBjb3VudGxp
c3QuZ2V0KDApOwoJCX0KCQlza2lwcGVkID0gZ2V0QXNzZXRDb3VudChleHBvcnREYXRhKSAtIGV4
dHJhY3RlZDsKCX0KCWlmIChudWxsICE9IGV4dGFjdGVkQXNzZXRzKSB7CgkJVmFsdWVzRW11bGF0
b3IucHV0KGF0SURhdGEsICJhc3NldHMiLCBleHRhY3RlZEFzc2V0cy50b0FycmF5KG5ldyBJRGF0
YVtleHRhY3RlZEFzc2V0cy5zaXplKCldKSk7Cgl9CglzdWNjZXNzID0gdHJ1ZTsKfSBjYXRjaCAo
VGhyb3dhYmxlIHQpIHsKCW1lc3NhZ2UgPSB0LmdldE1lc3NhZ2UoKTsKCXN1Y2Nlc3MgPSBmYWxz
ZTsKfSBmaW5hbGx5IHsKCVZhbHVlc0VtdWxhdG9yLnB1dChwaXBlbGluZSwgInN1Y2Nlc3MiLCBT
dHJpbmcudmFsdWVPZihzdWNjZXNzKSk7CglWYWx1ZXNFbXVsYXRvci5wdXQocGlwZWxpbmUsICJk
ZXBsb3ltZW50IiwgYXRJRGF0YSk7CglWYWx1ZXNFbXVsYXRvci5wdXQocGlwZWxpbmUsICJtZXNz
YWdlIiwgbWVzc2FnZSk7CgkKCUlEYXRhIHN1bW1hcnkgPSBJRGF0YUZhY3RvcnkuY3JlYXRlKCk7
CglWYWx1ZXNFbXVsYXRvci5wdXQoc3VtbWFyeSwgImV4dHJhY3RlZCIsIFN0cmluZy52YWx1ZU9m
KGV4dHJhY3RlZCkpOwoJVmFsdWVzRW11bGF0b3IucHV0KHN1bW1hcnksICJza2lwcGVkIiwgU3Ry
aW5nLnZhbHVlT2Yoc2tpcHBlZCkpOwoJCglWYWx1ZXNFbXVsYXRvci5wdXQocGlwZWxpbmUsICJz
dW1tYXJ5Iiwgc3VtbWFyeSk7CglpZiAoY3VyICE9IG51bGwpIHsKCQljdXIuZGVzdHJveSgpOwoJ
fQp9Cg==</value>
</Values>
