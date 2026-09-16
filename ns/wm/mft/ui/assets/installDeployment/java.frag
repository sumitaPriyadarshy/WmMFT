<?xml version="1.0" encoding="UTF-8"?>

<Values version="2.0">
  <value name="name">installDeployment</value>
  <array name="sig" type="value" depth="1">
    <value>[i] field:0:required force {"false","true"}</value>
    <value>[i] field:0:required simulate {"false","true"}</value>
    <value>[i] field:0:optional all {"true","false"}</value>
    <value>[i] field:0:required deploymentId</value>
    <value>[i] record:1:optional importData</value>
    <value>[i] - field:0:optional assetType {"portServer","serverInstance","serverPreference","user","template","postProcessEvent","monitorFolderAction","postProcessAction","VFS","MFTSettings","rba"}</value>
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
  <value name="body">CklEYXRhQ3Vyc29yIGN1ciA9IG51bGw7ClN0cmluZyBpbXBvcnRBbGwgPSBudWxsOwpJRGF0YVtd
IGltcG9ydEZpbHRlciA9IG51bGw7CmJvb2xlYW4gYWxsID0gZmFsc2U7ClN0cmluZyBmb3JjZVVw
ZGF0ZSA9IG51bGw7CmJvb2xlYW4gZm9yY2UgPSBmYWxzZTsKamF2YS51dGlsLkxpc3Q8SW1wb3J0
TWVzc2FnZT4gb3V0TGlzdCA9IG51bGw7ClN0cmluZyBlcnJvciA9IG51bGw7Cgpib29sZWFuIHN1
Y2Nlc3MgPSBmYWxzZTsKdHJ5IHsKCVJCQVByb3h5LnZhbGlkYXRlU2Vzc2lvbihSQkFVaUhhbmRs
ZS5BU1NFVF9JTVBPUlRfVklFVyk7CglSQkFQcm94eS52YWxpZGF0ZVNlc3Npb24oUkJBVWlIYW5k
bGUuQVNTRVRfREVQTE9ZTUVOVF9WSUVXKTsKCQoJY3VyID0gcGlwZWxpbmUuZ2V0Q3Vyc29yKCk7
CgkKCWlmIChjdXIuZmlyc3QoImZvcmNlIikpIHsKCQlmb3JjZVVwZGF0ZSA9IChTdHJpbmcpIGN1
ci5nZXRWYWx1ZSgpOwoJfQoJCglCb29sZWFuIHNpbXVsYXRlID0gdHJ1ZTsKCWlmIChjdXIuZmly
c3QoInNpbXVsYXRlIikpIHsKCQlzaW11bGF0ZSA9IEJvb2xlYW4udmFsdWVPZigoU3RyaW5nKSBj
dXIuZ2V0VmFsdWUoKSk7Cgl9CgkKCWlmIChjdXIuZmlyc3QoImFsbCIpKSB7CgkJaW1wb3J0QWxs
ID0gKFN0cmluZykgY3VyLmdldFZhbHVlKCk7Cgl9CgkKCVN0cmluZyBkZXBsb3ltZW50SWQgPSBu
dWxsOwoJaWYgKGN1ci5maXJzdCgiZGVwbG95bWVudElkIikpIHsKCQlkZXBsb3ltZW50SWQgPSAo
U3RyaW5nKSBjdXIuZ2V0VmFsdWUoKTsKCX0KCglpZiAoY3VyLmZpcnN0KCJpbXBvcnREYXRhIikp
IHsKCQlpbXBvcnRGaWx0ZXIgPSAoSURhdGFbXSkgY3VyLmdldFZhbHVlKCk7Cgl9CgoJCglpZiAo
aW1wb3J0QWxsICE9IG51bGwgJiYgaW1wb3J0QWxsLnRyaW0oKS5lcXVhbHNJZ25vcmVDYXNlKCJ0
cnVlIikpIHsKCQlhbGwgPSB0cnVlOwoJfQoKCWlmIChmb3JjZVVwZGF0ZSAhPSBudWxsICYmIGZv
cmNlVXBkYXRlLnRyaW0oKS5lcXVhbHNJZ25vcmVDYXNlKCJ0cnVlIikpIHsKCQlmb3JjZSA9IHRy
dWU7Cgl9CgoJamF2YS51dGlsLkxpc3Q8QXNzZXRGaWx0ZXI+IGZpbHRlckxpc3QgPSBudWxsOwoK
CWlmIChhbGwpIHsKCQlmaWx0ZXJMaXN0ID0gY3JlYXRlUkJBRmlsdGVyTGlzdCgpOwoJfSBlbHNl
IHsKCQlmaWx0ZXJMaXN0ID0gY3JlYXRlRmlsdGVyTGlzdChpbXBvcnRGaWx0ZXIpOwoJfQoKCWlm
IChkZXBsb3ltZW50SWQgIT0gbnVsbCkgewoJCW91dExpc3QgPSBBc3NldE1hbmFnZXJQcm94eS5p
bnN0YWxsQXNzZXRzRnJvbURlcGxveW1lbnQoZmFsc2UsIGRlcGxveW1lbnRJZCwgZmlsdGVyTGlz
dCwgZm9yY2UsIHNpbXVsYXRlKTsKCQlzdWNjZXNzID0gdHJ1ZTsKCX0KCn0gY2F0Y2ggKFRocm93
YWJsZSB0KSB7CgllcnJvciA9IHQuZ2V0TG9jYWxpemVkTWVzc2FnZSgpOwoJb3V0TGlzdCA9IGNy
ZWF0ZUVycm9ySW1wb3J0TWVzc2FnZSh0KTsKfSBmaW5hbGx5IHsKCXBvcHVsYXRlSW1wb3J0RGF0
YVJlc3BvbnNlKHBpcGVsaW5lLCBvdXRMaXN0KTsKCVZhbHVlc0VtdWxhdG9yLnB1dChwaXBlbGlu
ZSwgImVycm9yTWVzc2FnZXMiLCBlcnJvcik7CglWYWx1ZXNFbXVsYXRvci5wdXQocGlwZWxpbmUs
ICJzdWNjZXNzIiwgU3RyaW5nLnZhbHVlT2Yoc3VjY2VzcykpOwp9Cg==</value>
</Values>
