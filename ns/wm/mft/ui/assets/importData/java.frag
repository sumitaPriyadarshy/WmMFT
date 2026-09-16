<?xml version="1.0" encoding="UTF-8"?>

<Values version="2.0">
  <value name="name">importData</value>
  <array name="sig" type="value" depth="1">
    <value>[i] field:0:required force {"false","true"}</value>
    <value>[i] field:0:required simulate {"false","true"}</value>
    <value>[i] field:0:optional all {"true","false"}</value>
    <value>[i] field:0:required base64EncodedZipContent</value>
    <value>[i] record:1:optional importData</value>
    <value>[i] - field:0:optional assetType {"portServer","serverInstance","serverPreference","user","template","postProcessEvent","monitorFolderAction","postProcessAction","VFS","MFTSettings","rba","actionTemplate"}</value>
    <value>[i] - field:0:optional all {"true","false"}</value>
    <value>[i] - field:1:optional ids</value>
    <value>[i] - field:1:optional names</value>
    <value>[o] record:1:optional assets</value>
    <value>[o] - field:0:required assetType</value>
    <value>[o] - record:1:required items</value>
    <value>[o] -- field:0:required id</value>
    <value>[o] -- field:0:required name</value>
    <value>[o] -- record:1:required messages</value>
    <value>[o] --- field:0:optional message</value>
    <value>[o] --- field:0:optional severity</value>
    <value>[o] --- field:0:optional status</value>
    <value>[o] record:0:optional summary</value>
    <value>[o] - field:0:required conflict</value>
    <value>[o] - field:0:required missingDependency</value>
    <value>[o] - field:0:required skipped</value>
  </array>
  <value name="subtype">unknown</value>
  <value name="sigtype">java 3.5</value>
  <value name="encodeutf8">true</value>
  <value name="body">ClN0cmluZyBpbXBvcnRBbGwgPSBudWxsOwpib29sZWFuIGFsbCA9IGZhbHNlOwpTdHJpbmcgZm9y
Y2VVcGRhdGUgPSBudWxsOwpib29sZWFuIGZvcmNlID0gZmFsc2U7Ckxpc3Q8SW1wb3J0TWVzc2Fn
ZT4gb3V0TGlzdCA9IG51bGw7ClN0cmluZyBlcnJvciA9IG51bGw7CgpJRGF0YUN1cnNvciBjdXIg
PSBudWxsOwoKSW5wdXRTdHJlYW0gY29udGVudFN0cmVhbSA9IG51bGw7CklucHV0U3RyZWFtIGlu
cHV0RmlsZVN0cmVhbSA9IG51bGw7CklEYXRhW10gaW1wb3J0RmlsdGVyID0gbnVsbDsKdHJ5IHsK
CVJCQVByb3h5LnZhbGlkYXRlU2Vzc2lvbihSQkFVaUhhbmRsZS5BU1NFVF9JTVBPUlRfVklFVyk7
CgoJY29udGVudFN0cmVhbSA9IChJbnB1dFN0cmVhbSkgVmFsdWVzRW11bGF0b3IuZ2V0KHBpcGVs
aW5lLCJjb250ZW50U3RyZWFtIik7CglpZiAobnVsbD09Y29udGVudFN0cmVhbSkgewoJCS8vIHRo
cm93IG5ldyBleGNlcHRpb24KCQl0aHJvdyBuZXcgU2VydmljZUV4Y2VwdGlvbigiSW52YWxpZCBp
bnB1dCIpOwoJfQoKCU1hcCBwaXBlbGluZUNvbnRlbnQgPSBnZXRGaWxlQ29udGVudEZyb21Db250
ZW50U3RyZWFtKGNvbnRlbnRTdHJlYW0pOwoKCWZvcmNlVXBkYXRlID0gZ2V0U3RyaW5nVmFsdWVG
cm9tQ29udGVudFN0cmVhbVBpcGVsaW5lKHBpcGVsaW5lQ29udGVudCwgImZvcmNlIik7CglpbXBv
cnRBbGwgPSBnZXRTdHJpbmdWYWx1ZUZyb21Db250ZW50U3RyZWFtUGlwZWxpbmUocGlwZWxpbmVD
b250ZW50LCAiYWxsIik7CglTdHJpbmcgaW1wb3J0RGF0YSA9IGdldFN0cmluZ1ZhbHVlRnJvbUNv
bnRlbnRTdHJlYW1QaXBlbGluZShwaXBlbGluZUNvbnRlbnQsICJpbXBvcnREYXRhIik7Cglib29s
ZWFuIHNpbXVsYXRlID0gQm9vbGVhbi52YWx1ZU9mKGdldFN0cmluZ1ZhbHVlRnJvbUNvbnRlbnRT
dHJlYW1QaXBlbGluZShwaXBlbGluZUNvbnRlbnQsICJzaW11bGF0ZSIpKTsKCglpbnB1dEZpbGVT
dHJlYW0gPSAoSW5wdXRTdHJlYW0pIHBpcGVsaW5lQ29udGVudC5nZXQoImZpbGUiKTsKCWlmIChu
dWxsPT1pbnB1dEZpbGVTdHJlYW0pIHsKCQl0aHJvdyBuZXcgU2VydmljZUV4Y2VwdGlvbigiSW52
YWxpZCBjb250ZW50Iik7Cgl9CgoJU3RyaW5nIGJhc2U2NEVuY29kZWRaaXBTdHJlYW0gPSBCYXNl
NjQuZ2V0RW5jb2RlcigpLmVuY29kZVRvU3RyaW5nKGlucHV0RmlsZVN0cmVhbS5yZWFkQWxsQnl0
ZXMoKSk7CglpZiAobnVsbCA9PSBiYXNlNjRFbmNvZGVkWmlwU3RyZWFtKSB7CgkJdGhyb3cgbmV3
IFNlcnZpY2VFeGNlcHRpb24oIkludmFsaWQgaW5wdXQiKTsKCX0KCglpZiAoaW1wb3J0QWxsICE9
IG51bGwgJiYgaW1wb3J0QWxsLnRyaW0oKS5lcXVhbHNJZ25vcmVDYXNlKCJ0cnVlIikpIHsKCQlh
bGwgPSB0cnVlOwoJfQoKCWlmIChmb3JjZVVwZGF0ZSAhPSBudWxsICYmIGZvcmNlVXBkYXRlLnRy
aW0oKS5lcXVhbHNJZ25vcmVDYXNlKCJ0cnVlIikpIHsKCQlmb3JjZSA9IHRydWU7Cgl9CgoJamF2
YS51dGlsLkxpc3Q8QXNzZXRGaWx0ZXI+IGZpbHRlckxpc3QgPSBudWxsOwoKCWlmIChhbGwpIHsK
CQlmaWx0ZXJMaXN0ID0gY3JlYXRlUkJBRmlsdGVyTGlzdCgpOwoJfSBlbHNlIHsKCQlmaWx0ZXJM
aXN0ID0gY3JlYXRlRmlsdGVyTGlzdEZyb21Kc29uKGltcG9ydERhdGEpOwoJfQoKCWlmIChiYXNl
NjRFbmNvZGVkWmlwU3RyZWFtICE9IG51bGwpIHsKCQlvdXRMaXN0ID0gQXNzZXRNYW5hZ2VyUHJv
eHkuaW1wb3J0QXNzZXRzRnJvbVppcFN0cmVhbShmYWxzZSwgYmFzZTY0RW5jb2RlZFppcFN0cmVh
bSwgZmlsdGVyTGlzdCwgZm9yY2UsIHNpbXVsYXRlKTsKCX0KCn0gY2F0Y2ggKFRocm93YWJsZSB0
KSB7CgllcnJvciA9IHQuZ2V0TG9jYWxpemVkTWVzc2FnZSgpOwoJb3V0TGlzdCA9IGNyZWF0ZUVy
cm9ySW1wb3J0TWVzc2FnZSh0KTsKfSBmaW5hbGx5IHsKCWlmIChudWxsICE9IGlucHV0RmlsZVN0
cmVhbSkgewoJCXRyeSB7CgkJCWlucHV0RmlsZVN0cmVhbS5jbG9zZSgpOwoJCX0gY2F0Y2ggKEV4
Y2VwdGlvbiBlKSB7CgkJfQoJfQoJaWYgKG51bGwgIT0gY29udGVudFN0cmVhbSkgewoJCXRyeSB7
CgkJCWNvbnRlbnRTdHJlYW0uY2xvc2UoKTsKCQl9IGNhdGNoIChFeGNlcHRpb24gZSkgewoJCX0K
CX0KCglWYWx1ZXNFbXVsYXRvci5yZW1vdmUocGlwZWxpbmUsICJjb250ZW50U3RyZWFtIik7CglW
YWx1ZXNFbXVsYXRvci5yZW1vdmUocGlwZWxpbmUsICJiYXNlNjRFbmNvZGVkWmlwQ29udGVudCIp
OwoJcG9wdWxhdGVJbXBvcnREYXRhUmVzcG9uc2UocGlwZWxpbmUsIG91dExpc3QpOwoJVmFsdWVz
RW11bGF0b3IucHV0KHBpcGVsaW5lLCAiZXJyb3JNZXNzYWdlcyIsIGVycm9yKTsKfQo=</value>
</Values>
