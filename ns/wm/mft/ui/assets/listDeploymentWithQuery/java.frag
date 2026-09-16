<?xml version="1.0" encoding="UTF-8"?>

<Values version="2.0">
  <value name="name">listDeploymentWithQuery</value>
  <array name="sig" type="value" depth="1">
    <value>[i] field:0:optional invokeDoQuery {"true","false"}</value>
    <value>[i] recref:0:optional searchCreteria wm.mft.ui.rec:doQuerySerachInput</value>
    <value>[i] field:0:required queryId</value>
    <value>[i] field:0:required pageNumber</value>
    <value>[i] field:0:optional queryIdToCancel</value>
    <value>[o] field:0:required threadRunning</value>
    <value>[o] field:0:required rowsRead</value>
    <value>[o] record:1:required deployments</value>
    <value>[o] - field:0:required id</value>
    <value>[o] - field:0:required name</value>
    <value>[o] - field:0:required Description</value>
    <value>[o] - field:0:required createdBy</value>
    <value>[o] - field:0:required environment</value>
    <value>[o] - field:0:required internal</value>
    <value>[o] - field:0:required createdOn</value>
    <value>[o] field:0:required status</value>
    <value>[o] field:0:required message</value>
  </array>
  <value name="subtype">unknown</value>
  <value name="sigtype">java 3.5</value>
  <value name="encodeutf8">true</value>
  <value name="body">Ym9vbGVhbiBzdWNjZXNzID0gdHJ1ZTsKU3RyaW5nIG1lc3NhZ2UgPSAiIjsKdHJ5IHsKCVJCQVBy
b3h5LnZhbGlkYXRlU2Vzc2lvbihSQkFVaUhhbmRsZS5BU1NFVF9ERVBMT1lNRU5UX1ZJRVcpOwoJ
Ly8gU2luY2UgcXVlcnlJbnB1dCBpZCBub3QgcHJvdmlkZWQsIGludm9rZSBkb1F1ZXJ5CglpZiAo
InRydWUiLmVxdWFsc0lnbm9yZUNhc2UoVmFsdWVzRW11bGF0b3IuZ2V0U3RyaW5nKHBpcGVsaW5l
LCAiaW52b2tlRG9RdWVyeSIpKSkgeyAKCQlJRGF0YSBzZWFyY2hDcmV0ZXJpYSA9IChJRGF0YSkg
VmFsdWVzRW11bGF0b3IuZ2V0KHBpcGVsaW5lLCAic2VhcmNoQ3JldGVyaWEiKTsKCQlJRGF0YSBx
dWVyeUlucHV0ID0gVUlVdGlscy5wYXJzZURvUXVlcnlTZWFyY2hJbnB1dChzZWFyY2hDcmV0ZXJp
YSk7CgoJCWlmIChWYWx1ZXNFbXVsYXRvci5nZXQocXVlcnlJbnB1dCwgInNvcnRPcmRlciIpID09
IG51bGwpIHsKCQkJSURhdGEgZGVmYXVsdFNvcnRPcmRlciA9IElEYXRhRmFjdG9yeS5jcmVhdGUo
KTsKCQkJVmFsdWVzRW11bGF0b3IucHV0KGRlZmF1bHRTb3J0T3JkZXIsICJjb2x1bW5OYW1lIiwg
ImNyZWF0ZWRPbiIpOwoJCQlWYWx1ZXNFbXVsYXRvci5wdXQocXVlcnlJbnB1dCwgInNvcnRPcmRl
ciIsIG5ldyBJRGF0YVtdIHsgZGVmYXVsdFNvcnRPcmRlciB9KTsKCQl9CgkJU3RyaW5nW10gcmVz
dWx0Q29scyA9IG5ldyBTdHJpbmdbXSB7ICJpZCIsICJuYW1lIiwgIkRlc2NyaXB0aW9uIiwgImNy
ZWF0ZWRCeSIsICJlbnZpcm9ubWVudCIsICJpbnRlcm5hbCIsICJjcmVhdGVkT24ifTsKCQlWYWx1
ZXNFbXVsYXRvci5wdXQocXVlcnlJbnB1dCwgInJlc3VsdFNldENvbHVtbnMiLCByZXN1bHRDb2xz
KTsKCgkJSURhdGEgZG9RdWVyeUlucHV0ID0gSURhdGFGYWN0b3J5LmNyZWF0ZSgpOwoJCVZhbHVl
c0VtdWxhdG9yLnB1dChkb1F1ZXJ5SW5wdXQsICJxdWVyeUlucHV0IiwgcXVlcnlJbnB1dCk7CgkJ
VmFsdWVzRW11bGF0b3IucHV0KGRvUXVlcnlJbnB1dCwgInF1ZXJ5VHlwZSIsIE1GVERhdGFDb25z
dGFudHMuUVVFUllfVFlQRV9ERVBMT1lNRU5UKTsKCQlWYWx1ZXNFbXVsYXRvci5wdXQoZG9RdWVy
eUlucHV0LCAicXVlcnlJZFRvQ2FuY2VsIiwgVmFsdWVzRW11bGF0b3IuZ2V0KHBpcGVsaW5lLCAi
cXVlcnlJZFRvQ2FuY2VsIikpOwoJCVNlcnZpY2UuZG9JbnZva2UoIndtLm1mdC51aS5xdWVyaWVz
IiwgImRvUXVlcnkiLCBkb1F1ZXJ5SW5wdXQpOwoJfQoKCUlEYXRhIGdldFF1ZXJ5UmVzdWx0SW5w
dXQgPSBJRGF0YUZhY3RvcnkuY3JlYXRlKCk7CglWYWx1ZXNFbXVsYXRvci5wdXQoZ2V0UXVlcnlS
ZXN1bHRJbnB1dCwgInF1ZXJ5SWQiLCBWYWx1ZXNFbXVsYXRvci5nZXQocGlwZWxpbmUsICJxdWVy
eUlkIikpOwoJVmFsdWVzRW11bGF0b3IucHV0KGdldFF1ZXJ5UmVzdWx0SW5wdXQsICJwYWdlTnVt
YmVyIiwgVmFsdWVzRW11bGF0b3IuZ2V0KHBpcGVsaW5lLCAicGFnZU51bWJlciIpKTsKCVZhbHVl
c0VtdWxhdG9yLnB1dChnZXRRdWVyeVJlc3VsdElucHV0LCAicXVlcnlUeXBlIiwgU3RyaW5nLnZh
bHVlT2YoTUZURGF0YUNvbnN0YW50cy5RVUVSWV9UWVBFX0RFUExPWU1FTlQpKTsKCVNlcnZpY2Uu
ZG9JbnZva2UoIndtLm1mdC51aS5xdWVyaWVzIiwgImdldFF1ZXJ5UmVzdWx0cyIsIGdldFF1ZXJ5
UmVzdWx0SW5wdXQpOwoKCVZhbHVlc0VtdWxhdG9yLnB1dChwaXBlbGluZSwgInRocmVhZFJ1bm5p
bmciLCBWYWx1ZXNFbXVsYXRvci5nZXQoZ2V0UXVlcnlSZXN1bHRJbnB1dCwgInRocmVhZFJ1bm5p
bmciKSk7CglWYWx1ZXNFbXVsYXRvci5wdXQocGlwZWxpbmUsICJyb3dzUmVhZCIsIFZhbHVlc0Vt
dWxhdG9yLmdldChnZXRRdWVyeVJlc3VsdElucHV0LCAicm93c1JlYWQiKSk7CgoJSURhdGFbXSBk
YXRhQXJyYXkgPSAoSURhdGFbXSkgVmFsdWVzRW11bGF0b3IuZ2V0KGdldFF1ZXJ5UmVzdWx0SW5w
dXQsICJkYXRhQXJyYXlJRGF0YSIpOwoJaWYgKGRhdGFBcnJheSAhPSBudWxsKSB7CgkJVmFsdWVz
RW11bGF0b3IucHV0KHBpcGVsaW5lLCAiZGVwbG95bWVudHMiLCBkYXRhQXJyYXkpOwoJfQoKfSBj
YXRjaCAoRXhjZXB0aW9uIHQpIHsKCXN1Y2Nlc3MgPSBmYWxzZTsKCW1lc3NhZ2UgPSB0LmdldExv
Y2FsaXplZE1lc3NhZ2UoKTsKfSBmaW5hbGx5IHsKCVZhbHVlc0VtdWxhdG9yLnB1dChwaXBlbGlu
ZSwgInN1Y2Nlc3MiLCBTdHJpbmcudmFsdWVPZihzdWNjZXNzKSk7CglWYWx1ZXNFbXVsYXRvci5w
dXQocGlwZWxpbmUsICJtZXNzYWdlIiwgbWVzc2FnZSk7Cn0KCg==</value>
</Values>
