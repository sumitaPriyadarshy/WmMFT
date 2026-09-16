<?xml version="1.0" encoding="UTF-8"?>

<Values version="2.0">
  <value name="name">listAllUserDetails</value>
  <array name="sig" type="value" depth="1">
    <value>[i] field:0:required pageNumber</value>
    <value>[i] field:0:required pageSize</value>
    <value>[i] field:0:required userIdFilter</value>
    <value>[o] record:1:required userDetails</value>
    <value>[o] - field:0:required userName</value>
    <value>[o] - field:0:required firstName</value>
    <value>[o] - field:0:required lastName</value>
    <value>[o] - field:0:required emailAddress</value>
    <value>[o] - field:0:required directoryService</value>
    <value>[o] field:0:required totalUsers</value>
    <value>[o] field:0:required message</value>
    <value>[o] field:0:required success</value>
  </array>
  <value name="subtype">unknown</value>
  <value name="sigtype">java 3.5</value>
  <value name="encodeutf8">true</value>
  <value name="body">ClN0cmluZyBtZXNzYWdlID0gTUZUUmVzb3VyY2VzLmdldE1lc3NhZ2UoIjEwMTMiKTsKYm9vbGVh
biBzdWNjZXNzID0gdHJ1ZTsKaW50IHRvdGFsVXNlcnMgPSAwOwpMaXN0PElEYXRhPiBpZGF0YUxp
c3QgPSBuZXcgQXJyYXlMaXN0PD4oKTsKdHJ5IHsKCWludCBwYWdlTnVtYmVyID0gVmFsdWVzRW11
bGF0b3IuZ2V0SW50KHBpcGVsaW5lLCAicGFnZU51bWJlciIpOwoJaW50IHBhZ2VTaXplID0gVmFs
dWVzRW11bGF0b3IuZ2V0SW50KHBpcGVsaW5lLCAicGFnZVNpemUiKTsKCVN0cmluZyB1c2VySWRG
aWx0ZXIgPSBWYWx1ZXNFbXVsYXRvci5nZXRTdHJpbmcocGlwZWxpbmUsICJ1c2VySWRGaWx0ZXIi
KTsKCUxpc3Q8VXNlcklkZW50aXR5PiB1c2VySWRlbnRpdGllcyA9IG5ldyBBcnJheUxpc3Q8Pigp
OwoJTGlzdDxTdHJpbmc+IHR5cGVMaXN0ID0gZ2V0VHlwZUxpc3QoKTsKCWlmICghdHlwZUxpc3Qu
aXNFbXB0eSgpKSB7CgkJdXNlcklkZW50aXRpZXMgPSBVc2VyTWFuYWdlclByb3h5Lmxpc3RVc2Vy
cyhwYWdlTnVtYmVyLCBwYWdlU2l6ZSwgdHlwZUxpc3QsIHRydWUsIHVzZXJJZEZpbHRlcik7Cgl9
CglpZiAobnVsbCAhPSB1c2VySWRlbnRpdGllcyAmJiAhdXNlcklkZW50aXRpZXMuaXNFbXB0eSgp
KSB7CgkJaWYgKFN5c3RlbS5nZXRQcm9wZXJ0eSgibWZ0LnVzZXIubGlzdC5zaG93LnVzZXIuZGV0
YWlscyIsICJ0cnVlIikuZXF1YWxzSWdub3JlQ2FzZSgiZmFsc2UiKSkgewoJCQlmb3IgKFVzZXJJ
ZGVudGl0eSB1SSA6IHVzZXJJZGVudGl0aWVzKSB7CgkJCQlpZGF0YUxpc3QuYWRkKHVzZXJJZGVu
dGl0eVRvSURhdGEodUksIHVJLmdldFVzZXJUeXBlKCkpKTsKCQkJfQoJCX0gZWxzZSB7CgkJCWZv
ciAoVXNlcklkZW50aXR5IHVJIDogdXNlcklkZW50aXRpZXMpIHsKCQkJCWlkYXRhTGlzdC5hZGQo
Z2V0RGV0YWlsc0Zyb21JRGlyZWN0b3J5KHVJLmdldFVzZXJJZCgpLAoJCQkJCQlVSVV0aWxzLmxv
b2t1cEVudGl0eUJ5TmFtZSh1SS5nZXRVc2VySWQoKSwgZ2V0VHlwZSh1SS5nZXRVc2VyVHlwZSgp
KSksCgkJCQkJCXVJLmdldFVzZXJUeXBlKCkpKTsKCQkJfQoJCX0KCX0KCWlmIChudWxsIT11c2Vy
SWRGaWx0ZXIgJiYgIXVzZXJJZEZpbHRlci50cmltKCkuaXNFbXB0eSgpKSB7CgkJdG90YWxVc2Vy
cyA9IGlkYXRhTGlzdC5zaXplKCk7Cgl9IGVsc2UgewoJCVZlY3RvcjxVc2VySWRlbnRpdHk+IHVz
ZXJzID0gVXNlck1hbmFnZXJQcm94eS5saXN0QWxsVXNlckVudGl0aWVzKCk7CgkJdG90YWxVc2Vy
cyA9IHVzZXJzLnNpemUoKTsKCX0KCn0gY2F0Y2ggKFRocm93YWJsZSB0KSB7CglzdWNjZXNzID0g
ZmFsc2U7CgltZXNzYWdlID0gdC5nZXRMb2NhbGl6ZWRNZXNzYWdlKCk7Cn0gZmluYWxseSB7CglW
YWx1ZXNFbXVsYXRvci5wdXQocGlwZWxpbmUsICJzdWNjZXNzIiwgU3RyaW5nLnZhbHVlT2Yoc3Vj
Y2VzcykpOwoJVmFsdWVzRW11bGF0b3IucHV0KHBpcGVsaW5lLCAidXNlckRldGFpbHMiLCBpZGF0
YUxpc3QudG9BcnJheShuZXcgSURhdGFbaWRhdGFMaXN0LnNpemUoKV0pKTsKCVZhbHVlc0VtdWxh
dG9yLnB1dChwaXBlbGluZSwgInRvdGFsVXNlcnMiLCB0b3RhbFVzZXJzKTsKCVZhbHVlc0VtdWxh
dG9yLnB1dChwaXBlbGluZSwgIm1lc3NhZ2UiLCBtZXNzYWdlKTsKfQo=</value>
</Values>
